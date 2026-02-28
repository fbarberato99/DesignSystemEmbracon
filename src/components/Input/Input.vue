<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import Tooltip from '../Tooltip/Tooltip.vue'
import type { InputProps, InputEmits } from './Input.types'

const props = withDefaults(defineProps<InputProps>(), {
  value: '',
  type: 'text',
  label: '',
  placeholder: '',
  caption: '',
  maxLength: undefined,
  disabled: false,
  size: 'lg',
  customClass: '',
  tooltiptext: '',
  rules: () => [],
  noNumbers: false,
  onlyNumbers: false,
  noSpecials: false,
  realTimeValidation: false
})

const emit = defineEmits<InputEmits>()

// Estado interno
const internalValue = ref(String(props.value))
const errorMessage = ref<string>('')
const isFocused = ref(false)
const hasBeenBlurred = ref(false)

// Sincroniza valor interno com prop value
watch(() => props.value, (newValue) => {
  internalValue.value = String(newValue)
  // Valida em tempo real se habilitado
  if (props.realTimeValidation) {
    validate()
  }
})

// Computed
const inputId = computed(() => `input-${Math.random().toString(36).substr(2, 9)}`)
const hasError = computed(() => !!errorMessage.value)
const showError = computed(() => hasError.value && (hasBeenBlurred.value || props.realTimeValidation))
const characterCount = computed(() => {
  if (!props.maxLength) return ''
  const current = internalValue.value.length
  const max = typeof props.maxLength === 'string' ? parseInt(props.maxLength) : props.maxLength
  return `${current} / ${max}`
})

// Filtros de digitação
const applyFilters = (value: string): string => {
  let filtered = value

  // Prioridade: onlyNumbers > noNumbers > noSpecials
  if (props.onlyNumbers) {
    filtered = filtered.replace(/\D/g, '')
  } else if (props.noNumbers) {
    filtered = filtered.replace(/\d/g, '')
  }

  if (props.noSpecials && !props.onlyNumbers) {
    // Remove caracteres especiais e acentos
    filtered = filtered
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '') // Remove acentos
      .replace(/[^a-zA-Z0-9\s]/g, '') // Remove especiais
  }

  return filtered
}

// Validação
const validate = (): boolean => {
  if (!props.rules || props.rules.length === 0) {
    errorMessage.value = ''
    return true
  }

  for (const rule of props.rules) {
    const result = rule(internalValue.value)
    if (result !== true) {
      errorMessage.value = result
      return false
    }
  }

  errorMessage.value = ''
  return true
}

// Handlers
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  let newValue = target.value

  // Aplica filtros
  newValue = applyFilters(newValue)

  // Atualiza valor se mudou após filtros
  if (newValue !== target.value) {
    target.value = newValue
  }

  internalValue.value = newValue
  emit('input', newValue)

  // Valida em tempo real se habilitado
  if (props.realTimeValidation) {
    validate()
  }
}

const handleBlur = (event: FocusEvent) => {
  isFocused.value = false
  hasBeenBlurred.value = true
  validate()
  emit('blur', event)
}

const handleFocus = () => {
  isFocused.value = true
}

const clearInput = () => {
  internalValue.value = ''
  emit('input', '')
  if (props.realTimeValidation || hasBeenBlurred.value) {
    validate()
  }
}

// Valida no mount se realTimeValidation estiver ativo e houver valor inicial
onMounted(() => {
  if (props.realTimeValidation && internalValue.value) {
    validate()
  }
})

</script>

<template>
  <div class="input-wrapper" :class="props.customClass">
    <!-- Label e Tooltip -->
    <div v-if="props.label" class="input-label-wrapper">
      <label :for="inputId" class="input-label">
        {{ props.label }}
      </label>
      <Tooltip
        v-if="props.tooltiptext"
        :conteudo="props.tooltiptext"
      >
        <template #icon>
          <div class="input-tooltip">
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="4" stroke="currentColor" stroke-width="1"/>
              <path d="M5 3.5V3.51M5 4.5V7" stroke="currentColor" stroke-width="1" stroke-linecap="round"/>
            </svg>
          </div>
        </template>
      </Tooltip>
    </div>

    <!-- Input Field -->
    <div
      class="input-field"
      :class="{
        'input-field--focused': isFocused,
        'input-field--error': showError,
        'input-field--disabled': props.disabled,
        'input-field--sm': props.size === 'sm'
      }"
    >
      <input
        :id="inputId"
        v-model="internalValue"
        class="input-element"
        :type="props.type"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :maxlength="props.maxLength"
        :aria-invalid="showError"
        :aria-describedby="showError ? `${inputId}-error` : props.caption ? `${inputId}-caption` : undefined"
        @input="handleInput"
        @blur="handleBlur"
        @focus="handleFocus"
      />
      
      <!-- Clear Button -->
      <button
        v-if="internalValue && !props.disabled"
        type="button"
        class="input-clear"
        :aria-label="`Limpar ${props.label || 'campo'}`"
        @click="clearInput"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </button>
    </div>

    <!-- Caption / Error / Character Count -->
    <div v-if="showError || props.caption || props.maxLength" class="input-footer">
      <p
        v-if="showError"
        :id="`${inputId}-error`"
        class="input-message input-message--error"
      >
        {{ errorMessage }}
      </p>
      <p
        v-else-if="props.caption"
        :id="`${inputId}-caption`"
        class="input-message"
      >
        {{ props.caption }}
      </p>
      <p
        v-if="props.maxLength && !showError"
        class="input-character-count"
      >
        {{ characterCount }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.input-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  width: 100%;
  max-width: 456px;
}

.input-label-wrapper {
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
}

.input-label {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-small-size);
  font-weight: var(--typography-text-small-weight);
  color: var(--colors-gray-100);
}

.input-tooltip {
  color: var(--colors-secondary-gray-graphite);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 10px !important;
  height: 10px !important;
  max-width: 10px !important;
  max-height: 10px !important;
  min-width: 10px !important;
  min-height: 10px !important;
}

.input-tooltip svg {
  width: 10px !important;
  height: 10px !important;
  max-width: 10px !important;
  max-height: 10px !important;
  display: block;
}

.input-field {
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  height: 48px;
  padding: 0 var(--spacing-16);
  background: var(--colors-secondary-white);
  border: 1px solid var(--colors-gray-20);
  border-radius: var(--border-radius-sm);
  transition: border-color 0.2s ease;
}

.input-field--sm {
  height: 40px;
}

.input-field--focused {
  border-color: var(--colors-gray-100);
}

.input-field--error {
  border-color: var(--colors-feedback-critical-3);
}

.input-field--disabled {
  background: var(--colors-gray-10);
  cursor: not-allowed;
}

.input-element {
  flex: 1;
  min-width: 0;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-body-size);
  font-weight: var(--typography-text-body-weight);
  line-height: var(--typography-text-body-line-height);
  color: var(--colors-secondary-gray-graphite);
}

.input-element::placeholder {
  color: var(--colors-gray-40);
}

.input-element:disabled {
  color: var(--colors-gray-70);
  cursor: not-allowed;
}

.input-clear {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  color: var(--colors-secondary-gray-graphite);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
}

.input-clear:hover {
  opacity: 0.7;
}

.input-clear:focus-visible {
  outline: 2px solid var(--colors-primary-red);
  outline-offset: 2px;
  border-radius: 2px;
}

.input-footer {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: var(--spacing-8);
}

.input-message {
  flex: 1;
  font-family: var(--typography-font-family);
  font-size: var(--typography-caption-size);
  font-weight: var(--typography-caption-weight);
  color: var(--colors-gray-100);
  margin: 0;
}

.input-message--error {
  color: var(--colors-feedback-critical-3);
}

.input-character-count {
  flex-shrink: 0;
  font-family: var(--typography-font-family);
  font-size: var(--typography-caption-size);
  font-weight: var(--typography-caption-weight);
  color: var(--colors-gray-100);
  margin: 0;
  text-align: right;
}
</style>
