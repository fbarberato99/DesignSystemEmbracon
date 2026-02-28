<script setup lang="ts">
import { ref, watch } from 'vue'
import Icon from '../Icon/Icon.vue'
import type { SearchInputProps, SearchInputEmits } from './SearchInput.types'

const props = withDefaults(defineProps<SearchInputProps>(), {
  value: '',
  placeholder: 'Pesquisar',
  searchIcon: 'pesquisar',
  clearIcon: 'fechar',
  disabled: false
})

const emit = defineEmits<SearchInputEmits>()

// Estado interno
const internalValue = ref(props.value)
const isFocused = ref(false)

// Sincroniza valor interno com prop value
watch(() => props.value, (newValue) => {
  internalValue.value = newValue
})

// Handlers
const handleInput = (event: Event) => {
  if (props.disabled) return
  const target = event.target as HTMLInputElement
  internalValue.value = target.value
  emit('input', target.value)
}

const handleFocus = () => {
  if (props.disabled) return
  isFocused.value = true
}

const handleBlur = () => {
  isFocused.value = false
}

const clearInput = () => {
  if (props.disabled) return
  internalValue.value = ''
  emit('input', '')
}

</script>

<template>
  <div
    class="search-input"
    :class="{
      'search-input--focused': isFocused,
      'search-input--has-value': internalValue,
      'search-input--disabled': props.disabled
    }"
  >
    <!-- Ícone de Pesquisa -->
    <div class="search-input-icon">
      <Icon :name="props.searchIcon" :size="24" />
    </div>

    <!-- Input -->
    <input
      v-model="internalValue"
      class="search-input-field"
      type="text"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      @input="handleInput"
      @focus="handleFocus"
      @blur="handleBlur"
    />

    <!-- Botão Limpar -->
    <button
      v-if="internalValue"
      type="button"
      class="search-input-clear"
      aria-label="Limpar pesquisa"
      :disabled="props.disabled"
      @click="clearInput"
    >
      <Icon :name="props.clearIcon" :size="24" />
    </button>
  </div>
</template>

<style scoped>
.search-input {
  display: flex;
  align-items: center;
  gap: var(--spacing-16);
  height: 48px;
  padding: 0 var(--spacing-16);
  background: var(--colors-secondary-white);
  border: 1px solid var(--colors-gray-20);
  border-radius: var(--border-radius-sm);
  width: 100%;
  max-width: 443px;
  transition: border-color 0.2s ease;
}

.search-input--focused {
  border-color: var(--colors-gray-100);
}

.search-input--disabled {
  background: var(--colors-gray-10);
  border-color: var(--colors-gray-20);
  cursor: not-allowed;
  opacity: 0.6;
}

.search-input--disabled .search-input-icon,
.search-input--disabled .search-input-field,
.search-input--disabled .search-input-clear {
  cursor: not-allowed;
  pointer-events: none;
}

.search-input-icon {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  color: var(--colors-primary-red);
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-input-field {
  flex: 1;
  min-width: 0;
  height: 100%;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-body-size);
  font-weight: 400;
  line-height: 1.5;
  color: var(--colors-secondary-gray-graphite);
}

.search-input-field::placeholder {
  font-weight: 600;
  color: var(--colors-gray-100);
}

.search-input--focused .search-input-field::placeholder {
  font-weight: 400;
  color: var(--colors-gray-40);
}

.search-input--has-value .search-input-field::placeholder {
  font-weight: 400;
  color: var(--colors-gray-40);
}

.search-input-clear {
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

.search-input-clear:hover {
  opacity: 0.7;
}

.search-input-clear:focus-visible {
  outline: 2px solid var(--colors-primary-red);
  outline-offset: 2px;
  border-radius: 2px;
}
</style>
