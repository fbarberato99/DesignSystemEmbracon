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
  fullWidth: false,
  tooltiptext: false,
  tooltipPosicao: 'top',
  tooltipLargura: '200px',
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
  <div class="input-wrapper" :class="[props.customClass, { 'input-wrapper--full-width': props.fullWidth }]">
    <!-- Label e Tooltip -->
    <div v-if="props.label" class="input-label-wrapper">
      <label :for="inputId" class="input-label">
        {{ props.label }}
      </label>
      <Tooltip
        v-if="props.tooltiptext"
        conteudo="Texto do tooltip exibido em '?'"
        :posicao="props.tooltipPosicao"
        :largura="props.tooltipLargura"
      >
        <template #icon>
          <div class="input-tooltip">
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 14 14" fill="none">
              <g clip-path="url(#clip0_input_tooltip)">
                <path d="M6.90411 13.125C5.30191 13.125 3.76534 12.4797 2.63241 11.331C1.49948 10.1824 0.863014 8.62445 0.863014 7C0.863014 5.37555 1.49948 3.81763 2.63241 2.66897C3.76534 1.52031 5.30191 0.875 6.90411 0.875C8.50631 0.875 10.0429 1.52031 11.1758 2.66897C12.3087 3.81763 12.9452 5.37555 12.9452 7C12.9452 8.62445 12.3087 10.1824 11.1758 11.331C10.0429 12.4797 8.50631 13.125 6.90411 13.125ZM6.90411 14C8.73519 14 10.4913 13.2625 11.7861 11.9497C13.0808 10.637 13.8082 8.85652 13.8082 7C13.8082 5.14348 13.0808 3.36301 11.7861 2.05025C10.4913 0.737498 8.73519 0 6.90411 0C5.07303 0 3.31694 0.737498 2.02217 2.05025C0.727395 3.36301 0 5.14348 0 7C0 8.85652 0.727395 10.637 2.02217 11.9497C3.31694 13.2625 5.07303 14 6.90411 14Z" fill="#191E26"/>
                <path d="M4.53534 5.06275C4.53416 5.09101 4.53869 5.11921 4.54866 5.14563C4.55862 5.17204 4.57381 5.19611 4.5933 5.21636C4.61278 5.2366 4.63614 5.25259 4.66194 5.26334C4.68774 5.27409 4.71543 5.27938 4.74333 5.27888H5.45531C5.57441 5.27888 5.66934 5.18 5.68487 5.06013C5.76255 4.48613 6.1509 4.06788 6.84304 4.06788C7.43507 4.06788 7.97704 4.368 7.97704 5.08988C7.97704 5.6455 7.65427 5.901 7.14423 6.2895C6.56342 6.71738 6.10344 7.217 6.13623 8.02813L6.13882 8.218C6.13973 8.27541 6.16286 8.33015 6.20322 8.37042C6.24358 8.41069 6.29794 8.43326 6.35457 8.43325H7.05448C7.1117 8.43325 7.16658 8.4102 7.20704 8.36918C7.2475 8.32816 7.27023 8.27252 7.27023 8.2145V8.12263C7.27023 7.49438 7.50583 7.3115 8.14187 6.82238C8.66745 6.41725 9.21546 5.9675 9.21546 5.02338C9.21546 3.70125 8.11426 3.0625 6.90863 3.0625C5.81519 3.0625 4.61733 3.57875 4.53534 5.06275ZM5.87905 10.1054C5.87905 10.5718 6.24583 10.9165 6.7507 10.9165C7.27627 10.9165 7.63787 10.5718 7.63787 10.1054C7.63787 9.62238 7.27541 9.28288 6.74983 9.28288C6.24583 9.28288 5.87905 9.62238 5.87905 10.1054Z" fill="#191E26"/>
              </g>
              <defs>
                <clipPath id="clip0_input_tooltip">
                  <rect width="13.8082" height="14" fill="white"/>
                </clipPath>
              </defs>
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

.input-wrapper--full-width {
  max-width: none;
}

.input-label-wrapper {
  display: flex;
  align-items: center;
  gap: 4px;
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
