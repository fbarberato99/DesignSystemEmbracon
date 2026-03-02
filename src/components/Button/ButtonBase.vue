<script setup lang="ts">
import { computed, useSlots } from 'vue'
import type { ButtonBaseProps, ButtonEmits } from './Button.types'
import Icon from '../Icon/Icon.vue'

const props = withDefaults(defineProps<ButtonBaseProps>(), {
  variant: 'primary',
  size: '48px',
  type: 'button',
  disabled: false,
  loading: false,
  block: false,
  iconSize: 18,
})

const emit = defineEmits<ButtonEmits>()
const slots = useSlots()

const buttonClasses = computed(() => [
  'btn',
  `btn--${props.variant}`,
  `btn--${props.size}`,
  {
    'btn--disabled': props.disabled,
    'btn--loading': props.loading,
    'btn--block': props.block,
  },
])

const handleClick = (event: MouseEvent) => {
  if (!props.disabled && !props.loading) {
    emit('click', event)
  }
}

const hasIconLeft = computed(() => props.iconLeft || slots['icon-left'])
const hasIconRight = computed(() => props.iconRight || slots['icon-right'])
</script>

<template>
  <button
    :type="props.type"
    :disabled="props.disabled || props.loading"
    :class="buttonClasses"
    :aria-disabled="props.disabled || props.loading"
    :aria-busy="props.loading"
    @click="handleClick"
  >
    <span v-if="props.loading" class="btn__spinner" aria-hidden="true" />
    
    <!-- Ícone esquerdo via prop ou slot -->
    <template v-if="!props.loading">
      <Icon 
        v-if="props.iconLeft" 
        :name="props.iconLeft" 
        :size="props.iconSize" 
        class="btn__icon btn__icon--left"
        aria-hidden="true"
      />
      <slot v-else name="icon-left" />
    </template>
    
    <!-- Conteúdo do botão -->
    <span v-if="slots.default" class="btn__content" :aria-hidden="props.loading">
      <slot />
    </span>
    
    <!-- Ícone direito via prop ou slot -->
    <template v-if="!props.loading">
      <Icon 
        v-if="props.iconRight" 
        :name="props.iconRight" 
        :size="props.iconSize"
        class="btn__icon btn__icon--right"
        aria-hidden="true"
      />
      <slot v-else name="icon-right" />
    </template>
    
    <!-- Texto para leitores de tela quando loading -->
    <span v-if="props.loading" class="sr-only">Carregando...</span>
  </button>
</template>

<style>
/* ========== Base Button ========== */
.btn {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-8);
  padding: var(--spacing-16) var(--spacing-24);
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-body-size);
  font-weight: 600;
  line-height: var(--typography-text-body-line-height);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;
  user-select: none;
  border: none;
}

.btn:focus-visible {
  outline: 2px solid var(--colors-primary-red);
  outline-offset: 2px;
}

/* ========== Sizes ========== */
.btn--48px {
  height: 48px;
  padding: var(--spacing-16) var(--spacing-24);
}

.btn--44px {
  height: 44px;
  padding: var(--spacing-16) var(--spacing-24);
}

.btn--40px {
  height: 40px;
  padding: var(--spacing-16) var(--spacing-24);
}

.btn--36px {
  height: 36px;
  padding: var(--spacing-16) var(--spacing-24);
}

/* ========== Primary Variant ========== */
.btn--primary {
  background-color: var(--colors-primary-red);
  color: var(--colors-secondary-white);
  border: none;
}

.btn--primary:hover:not(:disabled):not(.btn--loading) {
  background-color: #DA3B41;
}

.btn--primary:active:not(:disabled):not(.btn--loading) {
  background-color: #A00F16;
}

.btn--primary:disabled,
.btn--primary.btn--disabled {
  background-color: var(--colors-gray-10);
  color: var(--colors-gray-30);
  cursor: not-allowed;
}

/* ========== Secondary Variant ========== */
.btn--secondary {
  background-color: var(--colors-secondary-white);
  color: var(--colors-primary-red);
  border: 2px solid var(--colors-primary-red);
  padding: calc(var(--spacing-16) - 2px) calc(var(--spacing-24) - 2px);
}

.btn--secondary.btn--48px {
  padding: calc(var(--spacing-16) - 2px) calc(var(--spacing-24) - 2px);
}

.btn--secondary.btn--44px {
  padding: calc(var(--spacing-16) - 2px) calc(var(--spacing-24) - 2px);
}

.btn--secondary.btn--40px {
  padding: calc(var(--spacing-16) - 2px) calc(var(--spacing-24) - 2px);
}

.btn--secondary.btn--36px {
  padding: calc(var(--spacing-16) - 2px) calc(var(--spacing-24) - 2px);
}

.btn--secondary:hover:not(:disabled):not(.btn--loading) {
  border-color: #DA3B41;
  color: #DA3B41;
}

.btn--secondary:active:not(:disabled):not(.btn--loading) {
  border-color: #A00F16;
  color: #A00F16;
}

.btn--secondary:disabled,
.btn--secondary.btn--disabled {
  background-color: var(--colors-secondary-white);
  border-color: #FABBBE;
  color: #FABBBE;
  cursor: not-allowed;
}

/* ========== Tertiary Variant ========== */
.btn--tertiary {
  background-color: var(--colors-secondary-white);
  color: var(--colors-primary-red);
  border: none;
}

.btn--tertiary:hover:not(:disabled):not(.btn--loading) {
  background-color: var(--colors-gray-10);
  color: #DA3B41;
}

.btn--tertiary:active:not(:disabled):not(.btn--loading) {
  background-color: var(--colors-gray-10);
  color: #A00F16;
}

.btn--tertiary:disabled,
.btn--tertiary.btn--disabled {
  background-color: var(--colors-secondary-white);
  color: #FABBBE;
  cursor: not-allowed;
}

/* ========== Link Variant ========== */
.btn--link {
  background-color: transparent;
  color: var(--colors-primary-red);
  border: none;
}

.btn--link .btn__content {
  text-decoration: underline;
  text-decoration-skip-ink: none;
}

.btn--link:hover:not(:disabled):not(.btn--loading) {
  color: #DA3B41;
}

.btn--link:active:not(:disabled):not(.btn--loading) {
  color: #A00F16;
}

.btn--link:disabled,
.btn--link.btn--disabled {
  color: #FABBBE;
  cursor: not-allowed;
}

/* ========== States ========== */
.btn--loading {
  cursor: wait;
  pointer-events: none;
}

.btn--block {
  width: 100%;
}

/* ========== Spinner ========== */
.btn__spinner {
  display: inline-block;
  width: 1em;
  height: 1em;
  border: 2px solid currentColor;
  border-right-color: transparent;
  border-radius: 50%;
  animation: btn-spin 0.6s linear infinite;
}

@keyframes btn-spin {
  to {
    transform: rotate(360deg);
  }
}

.btn__content {
  display: inline-flex;
  align-items: center;
}

/* ========== Icons ========== */
.btn__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  line-height: 0;
  width: auto;
  height: 18px;
}

/* ========== Screen Reader Only ========== */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
</style>
