<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { CheckboxProps, CheckboxEmits } from './Checkbox.types'

const props = withDefaults(defineProps<CheckboxProps>(), {
  label: '',
  subtitle: '',
  value: false,
  modelValue: undefined,
  disabled: false,
  size: '24px'
})

const emit = defineEmits<CheckboxEmits>()

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
  
  const target = event.target as HTMLInputElement
  const newValue = target.checked
  
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
    class="checkbox-wrapper"
    :class="{ 'checkbox-wrapper--disabled': props.disabled }"
  >
    <input
      type="checkbox"
      class="checkbox-input"
      :checked="internalChecked"
      :disabled="props.disabled"
      :aria-checked="internalChecked"
      :aria-disabled="props.disabled"
      @change="handleChange"
      @keydown.space.prevent="handleChange"
    />
    <span 
      class="checkbox-box" 
      :class="{ 'checkbox-box--checked': internalChecked }"
      :style="{ 
        width: props.size, 
        height: props.size, 
        minWidth: props.size,
        borderWidth: props.size === '16px' ? '1px' : '2px',
        marginTop: props.size === '16px' ? '2px' : props.size === '20px' ? '0px' : '0px'
      }"
    >
      <svg 
        v-if="internalChecked" 
        class="checkbox-icon"
        :width="props.size === '24px' ? 12 : props.size === '20px' ? 10 : 8" 
        :height="props.size === '24px' ? 10 : props.size === '20px' ? 8 : 6" 
        viewBox="0 0 12 10" 
        fill="none"
      >
        <path 
          d="M1 5L4.5 8.5L11 1" 
          stroke="white" 
          stroke-width="2" 
          stroke-linecap="round" 
          stroke-linejoin="round"
        />
      </svg>
    </span>
    <div v-if="hasLabel" class="checkbox-content">
      <span v-if="props.label" class="checkbox-label">{{ props.label }}</span>
      <span v-if="props.subtitle" class="checkbox-subtitle">{{ props.subtitle }}</span>
    </div>
  </label>
</template>

<style scoped>
.checkbox-wrapper {
  display: inline-flex;
  align-items: flex-start;
  gap: var(--spacing-8);
  cursor: pointer;
  user-select: none;
}

.checkbox-wrapper--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.checkbox-input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.checkbox-box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--colors-gray-100);
  border-radius: 2px;
  background: var(--colors-secondary-white);
  transition: background-color 0.2s ease, border-color 0.2s ease;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
}

.checkbox-box--checked {
  background: var(--colors-primary-red);
  border-color: var(--colors-primary-red);
}

.checkbox-wrapper:hover:not(.checkbox-wrapper--disabled) .checkbox-box {
  border-color: var(--colors-primary-red);
}

.checkbox-wrapper:hover:not(.checkbox-wrapper--disabled) .checkbox-box--checked {
  background: var(--colors-primary-red);
  border-color: var(--colors-primary-red);
}

.checkbox-input:focus-visible + .checkbox-box {
  outline: 2px solid var(--colors-primary-red);
  outline-offset: 2px;
  box-shadow: none;
}

.checkbox-icon {
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.checkbox-content {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.checkbox-label {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-body-size);
  font-weight: 400;
  line-height: 1.5;
  color: var(--colors-secondary-gray-graphite);
  margin-top: -2px;
}

.checkbox-subtitle {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-small-size);
  font-weight: 400;
  line-height: 1.4;
  color: var(--colors-gray-100);
}
</style>
