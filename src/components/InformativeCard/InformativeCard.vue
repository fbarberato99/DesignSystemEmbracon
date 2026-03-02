<script setup lang="ts">
import { computed } from 'vue'
import Icon from '../Icon/Icon.vue'
import type { InformativeCardProps } from './InformativeCard.types'

const props = withDefaults(defineProps<InformativeCardProps>(), {
  titulo: '',
  texto: '',
  icon: 'informacao',
  iconColor: 'gray-100',
  fullWidth: false
})

const iconColorVar = computed(() => {
  return `var(--colors-${props.iconColor})`
})

</script>

<template>
  <div class="informative-card" :class="{ 'informative-card--full-width': fullWidth }">
    <!-- Ícone à esquerda -->
    <div 
      v-if="props.icon"
      class="informative-card-icon"
      :style="{ color: iconColorVar }"
      aria-hidden="true"
    >
      <Icon :name="props.icon" :size="24" />
    </div>

    <!-- Conteúdo à direita -->
    <div class="informative-card-content">
      <!-- Título -->
      <h3 v-if="props.titulo" class="informative-card-titulo">
        {{ props.titulo }}
      </h3>

      <!-- Texto ou Slot -->
      <div class="informative-card-texto">
        <slot>
          {{ props.texto }}
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.informative-card {
  display: flex;
  max-width: 343px;
  padding: var(--spacing-24);
  align-items: center;
  gap: var(--spacing-16);
  border-radius: var(--border-radius-sm);
  background: var(--colors-gray-10);
  box-sizing: border-box;
}

.informative-card--full-width {
  max-width: none;
  width: 100%;
}

.informative-card-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.informative-card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  min-width: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}

.informative-card-titulo {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-body-size);
  font-weight: 600;
  line-height: 1.5;
  color: var(--colors-secondary-gray-graphite);
  margin: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}

.informative-card-texto {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-small-size);
  font-weight: 400;
  line-height: 1.5;
  color: var(--colors-gray-100);
  margin: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}

/* Quando não há título, remove o gap */
.informative-card-content:not(:has(.informative-card-titulo)) {
  gap: 0;
}
</style>
