<script setup lang="ts">
import { ref, computed, onMounted, nextTick, onUnmounted } from 'vue'
import Icon from '../Icon/Icon.vue'
import type { SelectProps, SelectEmits } from './Select.types'

const props = withDefaults(defineProps<SelectProps>(), {
  placeholder: 'Selecionar',
  disabled: false,
  size: 'lg',
  leftIcon: '',
  chevronIcon: 'chevron-down',
  label: '',
  caption: '',
  error: false,
  errorMessage: '',
  fullWidth: false,
  options: () => []
})

const emit = defineEmits<SelectEmits>()

const isOpen = ref(false)
const selectRef = ref<HTMLDivElement | null>(null)
const dropdownWidth = ref<string>('auto')
const activeIndex = ref(-1)

// IDs únicos para acessibilidade
const uniqueId = `select-${Math.random().toString(36).substr(2, 9)}`
const labelId = `${uniqueId}-label`
const dropdownId = `${uniqueId}-dropdown`

const selectedOption = computed(() => {
  return props.options.find(opt => opt.value === props.modelValue)
})

const displayText = computed(() => {
  return selectedOption.value?.label || props.placeholder
})

const activeOptionId = computed(() => {
  if (activeIndex.value >= 0 && activeIndex.value < props.options.length) {
    return `${uniqueId}-option-${activeIndex.value}`
  }
  return undefined
})

const toggleDropdown = async () => {
  if (props.disabled) return
  
  // Captura a largura antes de abrir (apenas na primeira vez)
  if (!isOpen.value && selectRef.value && dropdownWidth.value === 'auto') {
    const width = selectRef.value.offsetWidth
    dropdownWidth.value = `${width}px`
  }
  
  isOpen.value = !isOpen.value
  
  // Define índice ativo para opção selecionada ao abrir
  if (isOpen.value) {
    const selectedIndex = props.options.findIndex(opt => opt.value === props.modelValue)
    activeIndex.value = selectedIndex >= 0 ? selectedIndex : 0
  }
}

const selectOption = (value: string | number) => {
  if (props.disabled) return
  emit('update:modelValue', value)
  emit('change', value)
  isOpen.value = false
  activeIndex.value = -1
}

const navigateDown = () => {
  if (!isOpen.value) {
    toggleDropdown()
    return
  }
  
  let nextIndex = activeIndex.value + 1
  while (nextIndex < props.options.length && props.options[nextIndex].disabled) {
    nextIndex++
  }
  
  if (nextIndex < props.options.length) {
    activeIndex.value = nextIndex
  }
}

const navigateUp = () => {
  if (!isOpen.value) {
    toggleDropdown()
    return
  }
  
  let prevIndex = activeIndex.value - 1
  while (prevIndex >= 0 && props.options[prevIndex].disabled) {
    prevIndex--
  }
  
  if (prevIndex >= 0) {
    activeIndex.value = prevIndex
  }
}

const selectActive = () => {
  if (isOpen.value && activeIndex.value >= 0 && activeIndex.value < props.options.length) {
    const option = props.options[activeIndex.value]
    if (!option.disabled) {
      selectOption(option.value)
    }
  } else if (!isOpen.value) {
    toggleDropdown()
  }
}

const closeDropdown = () => {
  isOpen.value = false
  activeIndex.value = -1
}

const handleClickOutside = (event: MouseEvent) => {
  if (selectRef.value && !selectRef.value.contains(event.target as Node)) {
    closeDropdown()
  }
}

// Adiciona listener para fechar ao clicar fora
if (typeof window !== 'undefined') {
  document.addEventListener('click', handleClickOutside)
}

// Remove listener ao desmontar
onUnmounted(() => {
  if (typeof window !== 'undefined') {
    document.removeEventListener('click', handleClickOutside)
  }
})

// Captura largura inicial
onMounted(() => {
  if (selectRef.value) {
    const width = selectRef.value.offsetWidth
    dropdownWidth.value = `${width}px`
  }
})
</script>
<template>
  <div class="select-wrapper" :class="{ 'select-wrapper--full-width': fullWidth }">
    <!-- Label -->
    <label v-if="label" :id="labelId" class="select-label">{{ label }}</label>

    <!-- Select -->
    <div
      ref="selectRef"
      role="combobox"
      :aria-expanded="isOpen"
      :aria-controls="dropdownId"
      :aria-activedescendant="activeOptionId"
      :aria-labelledby="label ? labelId : undefined"
      :aria-label="!label ? placeholder : undefined"
      :aria-disabled="disabled"
      :aria-invalid="error"
      tabindex="0"
      class="select"
      :class="{
        'select--sm': size === 'sm',
        'select--lg': size === 'lg',
        'select--disabled': disabled,
        'select--error': error,
        'select--open': isOpen,
        'select--has-value': modelValue !== undefined && modelValue !== null && modelValue !== ''
      }"
      :style="{ width: dropdownWidth }"
      @click="toggleDropdown"
      @keydown.down.prevent="navigateDown"
      @keydown.up.prevent="navigateUp"
      @keydown.enter.prevent="selectActive"
      @keydown.space.prevent="selectActive"
      @keydown.escape="closeDropdown"
    >
      <!-- Conteúdo do select -->
      <div class="select-content">
        <!-- Ícone esquerdo (opcional) -->
        <div v-if="leftIcon" class="select-icon-left">
          <Icon :name="leftIcon" :size="16" />
        </div>

        <!-- Texto -->
        <span class="select-text">{{ displayText }}</span>

        <!-- Chevron (obrigatório) -->
        <div class="select-chevron" :class="{ 'select-chevron--open': isOpen }">
          <Icon :name="chevronIcon" :size="24" />
        </div>
      </div>

      <!-- Dropdown -->
      <Transition name="dropdown">
        <ul 
          v-if="isOpen" 
          :id="dropdownId"
          role="listbox"
          :aria-labelledby="label ? labelId : undefined"
          class="select-dropdown" 
          :style="{ width: dropdownWidth }"
        >
          <li
            v-for="(option, index) in options"
            :id="`${uniqueId}-option-${index}`"
            :key="option.value"
            role="option"
            :aria-selected="option.value === modelValue"
            :aria-disabled="option.disabled"
            class="select-option"
            :class="{
              'select-option--selected': option.value === modelValue,
              'select-option--disabled': option.disabled,
              'select-option--active': index === activeIndex
            }"
            @click.stop="!option.disabled && selectOption(option.value)"
            @mouseenter="activeIndex = index"
          >
            {{ option.label }}
          </li>
        </ul>
      </Transition>
    </div>

    <!-- Caption ou Error Message -->
    <p v-if="error && errorMessage" class="select-error">{{ errorMessage }}</p>
    <p v-else-if="caption" class="select-caption">{{ caption }}</p>
  </div>
</template>

<style scoped>
.select-wrapper {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-8);
  width: 100%;
  position: relative;
}

/* Label */
.select-label {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-small-size);
  font-weight: 600;
  line-height: 1.5;
  color: var(--colors-secondary-gray-graphite);
}

/* Select */
.select {
  position: relative;
  width: 100%;
  background: var(--colors-secondary-white);
  border: 1px solid var(--colors-gray-20);
  border-radius: var(--border-radius-sm);
  cursor: pointer;
  transition: border-color 0.2s ease;
  box-sizing: border-box;
}

.select--lg {
  height: 48px;
  padding: 0 16px;
}

.select--sm {
  height: 40px;
  padding: 0 16px;
}

.select:hover:not(.select--disabled) {
  border-color: var(--colors-gray-40);
}

.select--open {
  border-color: var(--colors-primary-red);
}

.select--error {
  border-color: var(--colors-feedback-critical-4);
}

.select--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Conteúdo */
.select-content {
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
  height: 100%;
}

/* Ícone esquerdo */
.select-icon-left {
  flex-shrink: 0;
  width: 16px;
  height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Texto */
.select-text {
  flex: 1;
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-body-size);
  font-weight: 400;
  line-height: 1.5;
  color: var(--colors-gray-100);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.select--has-value .select-text {
  color: var(--colors-secondary-gray-graphite);
}

/* Chevron */
.select-chevron {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.select-chevron--open {
  transform: rotate(180deg);
}

/* Dropdown */
.select-dropdown {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  background: var(--colors-secondary-white);
  border: 1px solid var(--colors-gray-20);
  border-radius: var(--border-radius-sm);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  max-height: 240px;
  overflow-y: auto;
  z-index: 100;
  box-sizing: border-box;
  list-style: none;
  margin: 0;
  padding: 0;
}

/* Opção */
.select-option {
  padding: 12px 16px;
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-body-size);
  font-weight: 400;
  line-height: 1.5;
  color: var(--colors-secondary-gray-graphite);
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.select-option:hover:not(.select-option--disabled),
.select-option--active:not(.select-option--disabled) {
  background: var(--colors-gray-10);
}

.select-option--selected {
  background: var(--colors-gray-10);
  font-weight: 600;
  color: var(--colors-primary-red);
}

.select-option--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

/* Caption e Error */
.select-caption {
  font-family: var(--typography-font-family);
  font-size: var(--typography-caption-size);
  font-weight: 400;
  line-height: 1.5;
  color: var(--colors-gray-70);
  margin: 0;
}

.select-error {
  font-family: var(--typography-font-family);
  font-size: var(--typography-caption-size);
  font-weight: 400;
  line-height: 1.5;
  color: var(--colors-feedback-critical-3);
  margin: 0;
}

/* Transição do dropdown */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
