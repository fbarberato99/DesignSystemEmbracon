<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { RadioProps, RadioEmits } from './Radio.types'

const props = withDefaults(defineProps<RadioProps>(), {
  label: '',
  subtitle: '',
  value: false,
  modelValue: undefined,
  disabled: false
})

const emit = defineEmits<RadioEmits>()

// Estado interno para modo não controlado
const internalValue = ref(props.value)

// Atualiza estado interno quando value prop mudar
watch(() => props.value, (newValue) => {
  if (!isControlled.value) {
    internalValue.value = newValue
  }
})

// Modo controlado: usa modelValue se fornecido, senão usa estado interno
const isControlled = computed(() => props.modelValue !== undefined)
const internalChecked = computed(() => 
  isControlled.value ? props.modelValue : internalValue.value
)

const handleClick = (event: MouseEvent) => {
  if (props.disabled) return
  
  // Previne o comportamento padrão do input radio
  event.preventDefault()
  
  // Para radio, permitir desmarcar clicando novamente
  const newValue = !internalChecked.value
  
  if (isControlled.value) {
    // Modo controlado: emite update:modelValue para v-model
    emit('update:modelValue', newValue)
  } else {
    // Modo não controlado: atualiza estado interno e emite input
    internalValue.value = newValue
    emit('input', newValue)
  }
}

const hasLabel = computed(() => props.label || props.subtitle)

</script>

<template>
  <label 
    class="radio-wrapper"
    :class="{ 'radio-wrapper--disabled': props.disabled }"
    @click="handleClick"
  >
    <input
      type="radio"
      class="radio-input"
      :checked="internalChecked"
      :disabled="props.disabled"
      :aria-checked="internalChecked"
      :aria-disabled="props.disabled"
      tabindex="0"
      @keydown.space.prevent="handleClick($event as any)"
      @keydown.enter.prevent="handleClick($event as any)"
    />
    <span class="radio-box" :class="{ 'radio-box--checked': internalChecked }">
      <span v-if="internalChecked" class="radio-inner"></span>
    </span>
    <div v-if="hasLabel" class="radio-content">
      <span v-if="props.label" class="radio-label">{{ props.label }}</span>
      <span v-if="props.subtitle" class="radio-subtitle">{{ props.subtitle }}</span>
    </div>
  </label>
</template>

<style scoped>
.radio-wrapper {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--spacing-8);
  cursor: pointer;
  user-select: none;
}

.radio-wrapper--disabled {
  cursor: not-allowed;
}

.radio-wrapper--disabled .radio-content {
  opacity: 0.5;
}

.radio-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.radio-box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  min-width: 24px;
  border-radius: 50%;
  background: var(--colors-secondary-white);
  transition: all 0.2s ease;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
}

.radio-box::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 50%;
  border: 2px solid var(--colors-gray-100);
  transition: border-color 0.2s ease;
}

.radio-box--checked {
  background: var(--colors-primary-red);
}

.radio-box--checked::before {
  border-color: transparent;
}

.radio-wrapper:hover:not(.radio-wrapper--disabled) .radio-box:not(.radio-box--checked)::before {
  border-color: var(--colors-primary-red);
}

.radio-wrapper:hover:not(.radio-wrapper--disabled) .radio-box--checked {
  background: var(--colors-primary-red-dark);
}

.radio-input:focus-visible + .radio-box {
  outline: 2px solid var(--colors-primary-red);
  outline-offset: 2px;
}

.radio-inner {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--colors-secondary-white);
  transition: all 0.2s ease;
  position: relative;
  z-index: 1;
}

.radio-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding-top: 0;
  justify-content: center;
}

.radio-label {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-body-size);
  font-weight: 400;
  line-height: 1.5;
  color: var(--colors-secondary-gray-graphite);
}

.radio-subtitle {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-small-size);
  font-weight: 400;
  line-height: 1.4;
  color: var(--colors-gray-100);
}
</style>
