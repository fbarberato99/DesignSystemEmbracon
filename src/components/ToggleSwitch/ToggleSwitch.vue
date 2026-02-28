<script setup lang="ts">
import { ref, watch } from 'vue'
import type { ToggleSwitchProps, ToggleSwitchEmits } from './ToggleSwitch.types'

const props = withDefaults(defineProps<ToggleSwitchProps>(), {
  size: 'md',
  disabled: false,
  modelValue: false
})

const emit = defineEmits<ToggleSwitchEmits>()

// Estado interno
const internalValue = ref(props.modelValue)

// Sincroniza valor interno com prop modelValue
watch(() => props.modelValue, (newValue) => {
  internalValue.value = newValue
})

// Handler de toggle
const handleToggle = () => {
  if (props.disabled) return
  
  internalValue.value = !internalValue.value
  emit('update:modelValue', internalValue.value)
  emit('toggle', internalValue.value)
}

</script>

<template>
  <button
    type="button"
    role="switch"
    :aria-checked="internalValue"
    :aria-disabled="disabled"
    :disabled="disabled"
    class="toggle-switch"
    :class="[
      `toggle-switch--${size}`,
      {
        'toggle-switch--on': internalValue,
        'toggle-switch--off': !internalValue,
        'toggle-switch--disabled': disabled
      }
    ]"
    @click="handleToggle"
  >
    <span class="toggle-switch-track">
      <span class="toggle-switch-thumb"></span>
    </span>
  </button>
</template>

<style scoped>
.toggle-switch {
  position: relative;
  display: inline-flex;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  transition: opacity 0.2s ease;
}

.toggle-switch:focus-visible {
  outline: 2px solid var(--colors-primary-red);
  outline-offset: 2px;
  border-radius: 100px;
}

.toggle-switch--disabled {
  cursor: not-allowed;
  opacity: 0.6;
}

/* Track (fundo do switch) */
.toggle-switch-track {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 20px;
  transition: background-color 0.3s ease;
}

/* Tamanho MD (médio) - 40x24px */
.toggle-switch--md .toggle-switch-track {
  width: 40px;
  height: 24px;
  padding: 2px 4px;
}

.toggle-switch--md .toggle-switch-thumb {
  width: 20px;
  height: 20px;
}

/* Tamanho SM (pequeno) - 34x20px */
.toggle-switch--sm .toggle-switch-track {
  width: 34px;
  height: 20px;
  padding: 2px 4px;
}

.toggle-switch--sm .toggle-switch-thumb {
  width: 16px;
  height: 16px;
}

/* Estado OFF */
.toggle-switch--off .toggle-switch-track {
  background: var(--colors-gray-30);
}

.toggle-switch--off .toggle-switch-thumb {
  transform: translateX(0);
}

/* Estado ON */
.toggle-switch--on .toggle-switch-track {
  background: var(--colors-primary-red);
}

/* Movimento do thumb para ON */
.toggle-switch--md.toggle-switch--on .toggle-switch-thumb {
  transform: translateX(19px);
}

.toggle-switch--sm.toggle-switch--on .toggle-switch-thumb {
  transform: translateX(18px);
}

/* Hover (apenas quando não desabilitado) */
.toggle-switch:not(.toggle-switch--disabled):hover.toggle-switch--on .toggle-switch-track {
  background: var(--cor-primria-colors-primary-red-hover, #DA3B41);
}

.toggle-switch:not(.toggle-switch--disabled):hover.toggle-switch--off .toggle-switch-track {
  background: var(--colors-gray-40);
}

/* Thumb (bolinha do switch) */
.toggle-switch-thumb {
  position: relative;
  border-radius: 50%;
  background: var(--colors-secondary-white);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  flex-shrink: 0;
}

/* Desabilitado */
.toggle-switch--disabled .toggle-switch-track {
  background: var(--colors-gray-20);
}

.toggle-switch--disabled.toggle-switch--on .toggle-switch-track {
  background: var(--colors-primary-red-dark);
}
</style>
