<script setup lang="ts">
import Icon from '../Icon/Icon.vue'
import type { TagProps } from './Tag.types'

const props = withDefaults(defineProps<TagProps>(), {
  leftIcon: undefined,
  rightIcon: undefined
})

// Ícones padrão por variante
const defaultIcons: Record<TagProps['variante'], string> = {
  sucesso: 'check',
  atencao: 'aviso',
  info: 'informacao',
  erro: 'aviso'
}

</script>

<template>
  <div
    class="tag"
    :class="`tag--${props.variante}`"
  >
    <!-- Ícone Esquerdo -->
    <span
      v-if="props.leftIcon || (!props.rightIcon && !props.leftIcon)"
      class="tag-icon tag-icon--left"
    >
      <Icon :name="props.leftIcon || defaultIcons[props.variante]" :size="14" />
    </span>

    <!-- Texto -->
    <span class="tag-text">{{ props.texto }}</span>

    <!-- Ícone Direito -->
    <span
      v-if="props.rightIcon"
      class="tag-icon tag-icon--right"
    >
      <Icon :name="props.rightIcon" :size="14" />
    </span>
  </div>
</template>

<style scoped>
.tag {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-8);
  height: 24px;
  padding: 4px 12px;
  border-radius: var(--border-radius-lg);
  width: fit-content;
}

/* Variante Sucesso */
.tag--sucesso {
  background: #EDFFF4;
}

.tag--sucesso .tag-text {
  color: #008F39;
}

.tag--sucesso .tag-icon {
  color: #008F39;
}

/* Variante Atenção */
.tag--atencao {
  background: #F1E5FF;
}

.tag--atencao .tag-text {
  color: #6800F1;
}

.tag--atencao .tag-icon {
  color: #6800F1;
}

/* Variante Info */
.tag--info {
  background: #DFE7FF;
}

.tag--info .tag-text {
  color: #3855B5;
}

.tag--info .tag-icon {
  color: #3855B5;
}

/* Variante Erro */
.tag--erro {
  background: #FFEBF2;
}

.tag--erro .tag-text {
  color: #B80043;
}

.tag--erro .tag-icon {
  color: #B80043;
}

/* Texto */
.tag-text {
  font-family: var(--typography-font-family);
  font-size: var(--typography-caption-size);
  font-weight: 400;
  line-height: 1.5;
  white-space: nowrap;
}

/* Ícones */
.tag-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 1;
  height: 14px;
}
</style>
