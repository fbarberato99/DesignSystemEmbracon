<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { RadioProps, RadioEmits } from './Radio.types'

const props = withDefaults(defineProps<RadioProps>(), {
  label: '',
  subtitle: '',
  value: false,
  modelValue: undefined,
  disabled: false,
  size: '24px'
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

const handleChange = (event: Event) => {
  if (props.disabled) return
  
  // Para radio, permitir toggle (marcar/desmarcar)
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

// IDs únicos para acessibilidade
const radioId = computed(() => `radio-${Math.random().toString(36).substr(2, 9)}`)
const subtitleId = computed(() => props.subtitle ? `${radioId.value}-subtitle` : undefined)

</script>

<template>
  <label 
    class="radio-wrapper"
    :class="{ 'radio-wrapper--disabled': props.disabled }"
  >
    <input
      :id="radioId"
      type="radio"
      class="radio-input"
      :checked="internalChecked"
      :disabled="props.disabled"
      :aria-checked="internalChecked"
      :aria-disabled="props.disabled"
      :aria-describedby="subtitleId"
      @click.prevent="handleChange"
      @keydown.space.prevent="handleChange"
    />
    <span 
      class="radio-box" 
      :class="{ 'radio-box--checked': internalChecked }"
      :style="{ 
        width: props.size, 
        height: props.size, 
        minWidth: props.size,
        borderWidth: props.size === '16px' ? '1px' : '2px',
        marginTop: props.size === '16px' ? '2px' : props.size === '20px' ? '0px' : '0px'
      }"
    >
      <span 
        v-if="internalChecked" 
        class="radio-inner"
        aria-hidden="true"
        :style="{
          width: props.size === '24px' ? '10px' : props.size === '20px' ? '8px' : '6px',
          height: props.size === '24px' ? '10px' : props.size === '20px' ? '8px' : '6px'
        }"
      ></span>
    </span>
    <div v-if="hasLabel" class="radio-content">
      <label v-if="props.label" :for="radioId" class="radio-label">{{ props.label }}</label>
      <span v-if="props.subtitle" :id="subtitleId" class="radio-subtitle">{{ props.subtitle }}</span>
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
  border-radius: 50%;
  background: var(--colors-secondary-white);
  border-style: solid;
  border-color: var(--colors-gray-100);
  transition: all 0.2s ease;
  position: relative;
  box-sizing: border-box;
  flex-shrink: 0;
}

.radio-box--checked {
  background: var(--colors-primary-red);
  border-color: var(--colors-primary-red);
}

.radio-wrapper:hover:not(.radio-wrapper--disabled) .radio-box:not(.radio-box--checked) {
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
  border-radius: 50%;
  background: var(--colors-secondary-white);
  transition: all 0.2s ease;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
  margin-top: -2px;
}

.radio-subtitle {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-small-size);
  font-weight: 400;
  line-height: 1.4;
  color: var(--colors-gray-100);
}
</style>
