<script setup lang="ts">
import { computed } from 'vue'
import type { PaginationProps, PaginationEmits } from './Pagination.types'

const props = withDefaults(defineProps<PaginationProps>(), {
  modelValue: 1,
  totalPages: 1
})

const emit = defineEmits<PaginationEmits>()

// Computed
const canGoPrevious = computed(() => props.modelValue > 1)
const canGoNext = computed(() => props.modelValue < props.totalPages)

// Calcula quais páginas mostrar (máximo 5 visíveis)
const visiblePages = computed(() => {
  const pages: number[] = []
  const total = props.totalPages
  const current = props.modelValue
  
  if (total <= 5) {
    // Se tem 5 ou menos páginas, mostra todas
    for (let i = 1; i <= total; i++) {
      pages.push(i)
    }
  } else {
    // Lógica para mostrar 5 páginas
    if (current <= 3) {
      // Início: 1, 2, 3, 4, 5
      pages.push(1, 2, 3, 4, 5)
    } else if (current >= total - 2) {
      // Fim: total-4, total-3, total-2, total-1, total
      pages.push(total - 4, total - 3, total - 2, total - 1, total)
    } else {
      // Meio: current-2, current-1, current, current+1, current+2
      pages.push(current - 2, current - 1, current, current + 1, current + 2)
    }
  }
  
  return pages
})

// Handlers
const goToPage = (page: number) => {
  if (page < 1 || page > props.totalPages || page === props.modelValue) {
    return
  }
  
  emit('update:modelValue', page)
  emit('change', page)
}

const goToPrevious = () => {
  if (canGoPrevious.value) {
    goToPage(props.modelValue - 1)
  }
}

const goToNext = () => {
  if (canGoNext.value) {
    goToPage(props.modelValue + 1)
  }
}

</script>

<template>
  <nav class="pagination" role="navigation" aria-label="Pagination">
    <!-- Botão Anterior -->
    <button
      class="pagination-button pagination-button--prev"
      :class="{ 'pagination-button--disabled': !canGoPrevious }"
      :disabled="!canGoPrevious"
      :aria-disabled="!canGoPrevious"
      aria-label="Ir para página anterior"
      @click="goToPrevious"
    >
      Anterior
    </button>

    <!-- Números das Páginas -->
    <button
      v-for="page in visiblePages"
      :key="page"
      class="pagination-button pagination-button--page"
      :class="{ 'pagination-button--active': page === modelValue }"
      :aria-current="page === modelValue ? 'page' : undefined"
      :aria-label="`Ir para página ${page}`"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>

    <!-- Botão Próximo -->
    <button
      class="pagination-button pagination-button--next"
      :class="{ 'pagination-button--disabled': !canGoNext }"
      :disabled="!canGoNext"
      :aria-disabled="!canGoNext"
      aria-label="Ir para próxima página"
      @click="goToNext"
    >
      Próximo
    </button>
  </nav>
</template>

<style scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-8);
  height: 48px;
}

.pagination-button {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  border: 1.5px solid var(--colors-gray-20);
  border-radius: var(--border-radius-sm);
  background: var(--colors-secondary-white);
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-body-size);
  font-weight: 400;
  line-height: 1;
  color: var(--colors-secondary-gray-graphite);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.pagination-button--prev,
.pagination-button--next {
  padding: 0 var(--spacing-16);
}

.pagination-button--page {
  min-width: 48px;
  width: 48px;
  padding: 0;
}

.pagination-button:hover:not(.pagination-button--disabled):not(.pagination-button--active) {
  border-color: var(--colors-primary-red);
}

.pagination-button:focus-visible {
  outline: 2px solid var(--colors-primary-red);
  outline-offset: 2px;
}

.pagination-button--active {
  background: var(--colors-primary-red);
  border-color: var(--colors-primary-red);
  color: var(--colors-secondary-white);
  cursor: default;
}

.pagination-button--disabled {
  color: var(--colors-gray-30);
  cursor: not-allowed;
  opacity: 1;
}

.pagination-button--disabled:hover {
  border-color: var(--colors-gray-20);
}
</style>
