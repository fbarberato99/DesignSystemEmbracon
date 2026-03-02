<script setup lang="ts">
import { computed } from 'vue'
import type { ChipProps, ChipEmits } from './Chip.types'

const props = withDefaults(defineProps<ChipProps>(), {
  texto: '',
  valor: '',
  selecionado: false,
  disabled: false,
  close: false
})

const emit = defineEmits<ChipEmits>()

// Se tem close, sempre está selecionado e não pode ser clicado para desmarcar
const isSelecionado = computed(() => props.close || props.selecionado)
const isClickable = computed(() => !props.close && !props.disabled)

const handleClick = () => {
  if (!isClickable.value) return
  emit('selecionado', props.valor)
}

const handleClose = (event: MouseEvent) => {
  // Previne que o evento de close dispare o evento selecionado
  event.stopPropagation()
  emit('close', props.valor)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (!isClickable.value) return
  
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleClick()
  }
}

const handleCloseKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    event.stopPropagation()
    emit('close', props.valor)
  }
}


</script>

<template>
  <div
    class="chip"
    :class="{
      'chip--selecionado': isSelecionado,
      'chip--disabled': props.disabled,
      'chip--with-close': props.close
    }"
    role="button"
    :aria-pressed="isSelecionado"
    :aria-disabled="props.disabled"
    :tabindex="props.disabled ? -1 : 0"
    @click="handleClick"
    @keydown="handleKeydown"
  >
    <span class="chip-texto">{{ props.texto }}</span>
    
    <button
      v-if="props.close"
      class="chip-close"
      :aria-label="`Remover ${props.texto}`"
      :disabled="props.disabled"
      @click="handleClose"
      @keydown="handleCloseKeydown"
    >
      <svg
        class="chip-close-icon"
        width="11"
        height="11"
        viewBox="0 0 11 11"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M1.5 1.5L9.5 9.5M9.5 1.5L1.5 9.5"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>

<style scoped>
.chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-8);
  height: 28px;
  padding: 6px var(--spacing-8);
  border-radius: 100px;
  cursor: pointer;
  user-select: none;
  transition: background-color 0.2s ease;
  background: var(--colors-gray-20);
}

.chip--with-close {
  cursor: default;
}

.chip--selecionado {
  background: var(--colors-primary-red);
}

.chip--disabled {
  cursor: not-allowed;
  background: var(--colors-gray-10);
  border: 1px dashed var(--colors-gray-40);
  pointer-events: none;
}

.chip:hover:not(.chip--disabled):not(.chip--selecionado):not(.chip--with-close) {
  background: var(--colors-gray-30);
}

.chip--selecionado:hover:not(.chip--disabled):not(.chip--with-close) {
  background: var(--colors-primary-red);
}

.chip:focus-visible {
  outline: 2px solid var(--colors-primary-red);
  outline-offset: 2px;
}

.chip-texto {
  font-family: var(--typography-font-family);
  font-size: var(--typography-caption-size);
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
  color: var(--colors-gray-100);
  white-space: nowrap;
}

.chip--selecionado .chip-texto {
  font-weight: 600;
  color: var(--colors-secondary-white);
}

.chip--disabled .chip-texto {
  color: var(--colors-gray-50);
  text-decoration: line-through;
}

.chip-close {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  border: none;
  border-radius: var(--border-radius-sm);
  background: var(--colors-gray-40);
  cursor: pointer;
  transition: background-color 0.2s ease;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

.chip--selecionado .chip-close {
  background: var(--colors-primary-red-dark);
}

.chip-close:hover:not(:disabled) {
  opacity: 0.8;
}

.chip-close:focus-visible {
  outline: 2px solid var(--colors-secondary-white);
  outline-offset: 1px;
}

.chip-close:disabled {
  cursor: not-allowed;
}

.chip-close-icon {
  width: 11px;
  height: 11px;
  color: var(--colors-secondary-white);
}
</style>
