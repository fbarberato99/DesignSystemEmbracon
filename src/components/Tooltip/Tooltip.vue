<script setup lang="ts">
import { ref, useSlots } from 'vue'
import Icon from '../Icon/Icon.vue'
import type { TooltipProps, TooltipEmits } from './Tooltip.types'

const props = withDefaults(defineProps<TooltipProps>(), {
  posicao: 'top',
  largura: '200px',
  icon: 'informacao'
})

const emit = defineEmits<TooltipEmits>()
const slots = useSlots()

const isVisible = ref(false)
let hideTimeout: ReturnType<typeof setTimeout> | null = null

const showTooltip = () => {
  if (hideTimeout) {
    clearTimeout(hideTimeout)
    hideTimeout = null
  }
  isVisible.value = true
}

const hideTooltip = () => {
  // Se tem botão, adiciona um delay para permitir mover o mouse para o tooltip
  if (props.botaoTxt) {
    hideTimeout = setTimeout(() => {
      isVisible.value = false
    }, 100)
  } else {
    isVisible.value = false
  }
}

const handleBotaoClick = () => {
  emit('botao-click')
  isVisible.value = false // Fecha o tooltip após clicar no botão
}

</script>

<template>
  <div class="tooltip-wrapper">
    <!-- Trigger (elemento que ativa o tooltip) -->
    <div
      class="tooltip-trigger"
      @mouseenter="showTooltip"
      @mouseleave="hideTooltip"
      @focus="showTooltip"
      @blur="hideTooltip"
    >
      <slot name="icon">
        <Icon v-if="props.icon" :name="props.icon" :size="24" class="tooltip-icon" />
      </slot>
    </div>

    <!-- Tooltip Content -->
    <transition name="tooltip-fade">
      <div
        v-if="isVisible"
        class="tooltip-content"
        :class="[
          `tooltip-content--${posicao}`,
          { 'tooltip-content--interactive': botaoTxt }
        ]"
        :style="{ width: largura }"
        role="tooltip"
        @mouseenter="showTooltip"
        @mouseleave="hideTooltip"
      >
        <!-- Seta do tooltip -->
        <div class="tooltip-arrow"></div>

        <!-- Conteúdo -->
        <div class="tooltip-body">
          <p v-if="titulo" class="tooltip-title">{{ titulo }}</p>
          
          <div v-if="slots.conteudo" class="tooltip-text">
            <slot name="conteudo" />
          </div>
          <p v-else class="tooltip-text">{{ conteudo }}</p>
          
          <button
            v-if="botaoTxt"
            type="button"
            class="tooltip-button"
            @click="handleBotaoClick"
          >
            {{ botaoTxt }}
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>
.tooltip-wrapper {
  position: relative;
  display: inline-flex;
}

.tooltip-trigger {
  display: inline-flex;
  cursor: pointer;
}

.tooltip-icon {
  color: var(--colors-secondary-gray-graphite);
}

/* Tooltip Content */
.tooltip-content {
  position: absolute;
  z-index: 1000;
  background: var(--colors-secondary-gray-graphite);
  border-radius: var(--border-radius-sm);
  padding: 15px 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
}

/* Tooltip interativo (com botão) permite interação */
.tooltip-content--interactive {
  pointer-events: auto;
}

/* Tooltip não interativo (sem botão) não permite interação */
.tooltip-content:not(.tooltip-content--interactive) {
  pointer-events: none;
}

/* Posicionamento Top */
.tooltip-content--top {
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

/* Posicionamento Bottom */
.tooltip-content--bottom {
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
}

/* Seta do Tooltip */
.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-left: 8px solid transparent;
  border-right: 8px solid transparent;
}

.tooltip-content--top .tooltip-arrow {
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-top: 8px solid var(--colors-secondary-gray-graphite);
}

.tooltip-content--bottom .tooltip-arrow {
  top: -8px;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 8px solid var(--colors-secondary-gray-graphite);
}

/* Corpo do Tooltip */
.tooltip-body {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

/* Título */
.tooltip-title {
  font-family: var(--typography-font-family);
  font-size: var(--typography-caption-size);
  font-weight: 700;
  line-height: 1.5;
  color: var(--colors-secondary-white);
  margin: 0;
}

/* Texto */
.tooltip-text {
  font-family: var(--typography-font-family);
  font-size: var(--typography-caption-size);
  font-weight: 400;
  line-height: 1.5;
  color: var(--colors-secondary-white);
  margin: 0;
}

/* Botão */
.tooltip-button {
  align-self: flex-end;
  margin-top: 4px;
  padding: 0;
  border: none;
  background: transparent;
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-small-size);
  font-weight: 600;
  line-height: 1.5;
  color: var(--colors-secondary-white);
  text-decoration: underline;
  cursor: pointer;
  transition: opacity 0.2s ease;
}

.tooltip-button:hover {
  opacity: 0.8;
}

.tooltip-button:focus-visible {
  outline: 2px solid var(--colors-secondary-white);
  outline-offset: 2px;
  border-radius: 2px;
}

/* Animação de Fade */
.tooltip-fade-enter-active,
.tooltip-fade-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.tooltip-fade-enter-from,
.tooltip-fade-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-4px);
}

.tooltip-content--bottom.tooltip-fade-enter-from,
.tooltip-content--bottom.tooltip-fade-leave-to {
  transform: translateX(-50%) translateY(4px);
}
</style>
