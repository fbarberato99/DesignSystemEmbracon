<script setup lang="ts">
import { ref, computed, nextTick } from 'vue'
import Icon from '../Icon/Icon.vue'
import type { AccordionProps, AccordionEmits } from './Accordion.types'

const props = withDefaults(defineProps<AccordionProps>(), {
  titulo: '',
  conteudo: '',
  icone: 'informacao',
  iconeColor: 'secondary-gray-graphite',
  chevronIcon: 'chevron-down',
  disabled: false,
  fullWidth: false
})

const emit = defineEmits<AccordionEmits>()

const isOpen = ref(false)
const contentRef = ref<HTMLElement | null>(null)

// Gera IDs únicos para acessibilidade
const uniqueId = `accordion-${Math.random().toString(36).substr(2, 9)}`
const headerId = `${uniqueId}-header`
const contentId = `${uniqueId}-content`

const accordionClasses = computed(() => [
  'accordion',
  {
    'accordion--open': isOpen.value,
    'accordion--disabled': props.disabled,
    'accordion--full-width': props.fullWidth
  },
])

const iconeColorVar = computed(() => {
  return `var(--colors-${props.iconeColor})`
})

const handleToggle = () => {
  if (props.disabled) return
  
  isOpen.value = !isOpen.value
  emit('toggle', isOpen.value)
}

const handleKeydown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    handleToggle()
  }
}

// Funções para animação suave com altura dinâmica
const onBeforeEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = '0'
  element.style.opacity = '0'
}

const onEnter = (el: Element) => {
  const element = el as HTMLElement
  nextTick(() => {
    element.style.height = `${element.scrollHeight}px`
    element.style.opacity = '1'
  })
}

const onAfterEnter = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = 'auto'
}

const onBeforeLeave = (el: Element) => {
  const element = el as HTMLElement
  element.style.height = `${element.scrollHeight}px`
}

const onLeave = (el: Element) => {
  const element = el as HTMLElement
  nextTick(() => {
    element.style.height = '0'
    element.style.opacity = '0'
  })
}
</script>

<template>
  <div :class="accordionClasses">
    <div
      :id="headerId"
      class="accordion__header"
      role="button"
      tabindex="0"
      :aria-expanded="isOpen"
      :aria-controls="contentId"
      :aria-disabled="props.disabled"
      @click="handleToggle"
      @keydown="handleKeydown"
    >
      <div class="accordion__title-wrapper">
        <span 
          v-if="props.icone" 
          class="accordion__icon"
          :style="{ color: iconeColorVar }"
          aria-hidden="true"
        >
          <Icon :name="props.icone" :size="16" />
        </span>
        <h3 class="accordion__title">{{ props.titulo }}</h3>
      </div>
      
      <div 
        class="accordion__chevron"
        :class="{ 'accordion__chevron--rotated': isOpen }"
        aria-hidden="true"
      >
        <Icon :name="props.chevronIcon" :size="24" />
      </div>
    </div>
    
    <transition 
      name="accordion-content"
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @after-enter="onAfterEnter"
      @before-leave="onBeforeLeave"
      @leave="onLeave"
    >
      <div 
        v-if="isOpen" 
        :id="contentId"
        ref="contentRef" 
        class="accordion__content"
        role="region"
        :aria-labelledby="headerId"
      >
        <slot>
          <p class="accordion__text">{{ props.conteudo }}</p>
        </slot>
      </div>
    </transition>
  </div>
</template>

<style>
/* ========== Base Accordion ========== */
.accordion {
  display: block;
  width: 100%;
  padding: 22px 16px;
  border-radius: var(--border-radius-sm);
  border: 1px solid var(--colors-gray-20);
  background: var(--colors-secondary-white);
  transition: background-color var(--transition-normal);
}

.accordion:hover:not(.accordion--disabled) {
  background-color: var(--colors-gray-10);
}

.accordion--open {
  padding-bottom: 22px;
}

.accordion--open .accordion__header {
  margin-bottom: var(--spacing-24);
}

.accordion--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* ========== Header ========== */
.accordion__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  cursor: pointer;
  user-select: none;
  outline: none;
}

.accordion__header:focus-visible {
  outline: 2px solid var(--colors-primary-red);
  outline-offset: 2px;
  border-radius: var(--border-radius-sm);
}

.accordion--disabled .accordion__header {
  cursor: not-allowed;
}

/* ========== Title Wrapper ========== */
.accordion__title-wrapper {
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
}

/* ========== Icon ========== */
.accordion__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  flex-shrink: 0;
}

/* ========== Title ========== */
.accordion__title {
  margin: 0;
  font-family: var(--typography-font-family);
  font-size: var(--typography-h8-size);
  font-weight: var(--typography-h8-weight);
  line-height: var(--typography-h8-line-height);
  color: var(--colors-secondary-gray-graphite);
  white-space: nowrap;
}

/* ========== Chevron ========== */
.accordion__chevron {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  color: var(--colors-secondary-gray-graphite);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  transform: rotate(-90deg);
}

.accordion__chevron--rotated {
  transform: rotate(0deg);
}

/* ========== Content ========== */
.accordion__content {
  width: 100%;
  overflow: hidden;
  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1), 
              opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.accordion__text {
  margin: 0;
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-body-size);
  font-weight: var(--typography-text-body-weight);
  line-height: var(--typography-text-body-line-height);
  color: var(--colors-gray-100);
}
</style>
