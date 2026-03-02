<script setup lang="ts">
import { watch } from 'vue'
import Icon from '../Icon/Icon.vue'
import type { DrawerProps, DrawerEmits } from './Drawer.types'
import { PrimaryButton } from '../Button'

const props = withDefaults(defineProps<DrawerProps>(), {
  title: '',
  height: 'auto',
  closeButton: true,
  desktopAsModal: false,
  fixedFooter: false,
  pusher: false,
  buttonText: '',
  contentText: '',
  icon: 'aviso',
  closeIcon: 'fechar'
})

const emit = defineEmits<DrawerEmits>()

const isOpen = defineModel<boolean>({ default: false })

const handleClose = () => {
  isOpen.value = false
  emit('close')
}

const handleButtonClick = () => {
  emit('click')
}

// Fecha ao clicar no overlay
const handleOverlayClick = () => {
  handleClose()
}

// Previne o fechamento ao clicar dentro do drawer
const handleDrawerClick = (e: Event) => {
  e.stopPropagation()
}

// Controla o scroll do body e ESC
watch(isOpen, (newValue) => {
  if (newValue) {
    document.body.style.overflow = 'hidden'
    // Adiciona listener para ESC
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    
    // Remove listener ao fechar
    const cleanup = () => {
      document.removeEventListener('keydown', handleEscape)
    }
    
    // Retorna cleanup
    return cleanup
  } else {
    document.body.style.overflow = ''
  }
})
</script>

<template>
  <Teleport to="body">
    <Transition name="drawer">
      <div
        v-if="isOpen"
        class="drawer-overlay"
        :class="{ 'drawer-overlay--modal': desktopAsModal }"
        @click="handleOverlayClick"
      >
        <div
          role="dialog"
          aria-modal="true"
          :aria-labelledby="title ? 'drawer-title' : undefined"
          class="drawer"
          :class="{
            'drawer--modal': desktopAsModal,
            'drawer--pusher': pusher,
            'drawer--fixed-footer': fixedFooter
          }"
          :style="{ height }"
          @click="handleDrawerClick"
        >
          <!-- Conteúdo -->
          <div class="drawer-content">
            <!-- Ícone (opcional) -->
            <div v-if="props.icon" class="drawer-icon" aria-hidden="true">
              <Icon :name="props.icon" :size="24" color="#CE181E" />
            </div>

            <!-- Header -->
            <div class="drawer-header">
              <h2 v-if="title" id="drawer-title" class="drawer-title">{{ title }}</h2>
              <button
                v-if="closeButton"
                type="button"
                class="drawer-close"
                aria-label="Fechar"
                @click="handleClose"
              >
                <Icon :name="props.closeIcon" :size="24" color="#191E26" />
              </button>
            </div>

            <!-- Texto do conteúdo (opcional) -->
            <p v-if="contentText" class="drawer-text">{{ contentText }}</p>

            <!-- Slot para conteúdo customizado -->
            <slot></slot>
          </div>

          <!-- Footer (opcional) -->
          <div v-if="buttonText || $slots.footer" class="drawer-footer">
            <slot name="footer">
              <PrimaryButton
                v-if="buttonText"
                block
                @click="handleButtonClick"
              >
                {{ buttonText }}
              </PrimaryButton>
            </slot>
          </div>

          <!-- Pusher para mobile (opcional) -->
          <div v-if="pusher" class="drawer-pusher"></div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
/* Overlay */
.drawer-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: flex;
  align-items: flex-end;
  justify-content: center;
}

.drawer-overlay--modal {
  align-items: center;
  justify-content: center;
}

/* Drawer */
.drawer {
  position: relative;
  width: 100%;
  background: var(--colors-secondary-white);
  display: flex;
  flex-direction: column;
  max-height: 90vh;
  overflow: hidden;
}

.drawer--modal {
  border-radius: 8px;
  max-height: 80vh;
  max-width: 375px;
}

.drawer--pusher {
  padding-top: 8px;
}

/* Conteúdo */
.drawer-content {
  flex: 1;
  padding: var(--spacing-32) 24px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-24);
}

.drawer--fixed-footer .drawer-content {
  padding-bottom: 24px;
}

/* Ícone */
.drawer-icon {
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

/* Header */
.drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-16);
}

.drawer-title {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-large-size);
  font-weight: 600;
  line-height: 1.5;
  color: var(--colors-secondary-gray-graphite);
  margin: 0;
  flex: 1;
}

.drawer-close {
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
}

.drawer-close:hover {
  opacity: 0.7;
}

/* Texto */
.drawer-text {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-body-size);
  font-weight: 400;
  line-height: 1.5;
  color: var(--colors-gray-100);
  margin: 0;
}

/* Footer */
.drawer-footer {
  padding: 0 24px 40px;
  flex-shrink: 0;
}

.drawer--fixed-footer .drawer-footer {
  position: sticky;
  bottom: 0;
  background: var(--colors-secondary-white);
  padding: var(--spacing-24);
  border-top: 1px solid var(--colors-gray-20);
}

/* Pusher */
.drawer-pusher {
  width: 40px;
  height: 4px;
  background: var(--colors-gray-40);
  border-radius: 2px;
  margin: 0 auto 8px;
  flex-shrink: 0;
}

/* Transições */
.drawer-enter-active,
.drawer-leave-active {
  transition: opacity 0.3s ease;
}

.drawer-enter-active .drawer,
.drawer-leave-active .drawer {
  transition: transform 0.3s ease;
}

.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
}

.drawer-enter-from .drawer {
  transform: translateY(100%);
}

.drawer-leave-to .drawer {
  transform: translateY(100%);
}

.drawer-overlay--modal .drawer-enter-from .drawer,
.drawer-overlay--modal .drawer-leave-to .drawer {
  transform: scale(0.9);
}

/* Desktop */
@media (min-width: 768px) {
  .drawer-overlay:not(.drawer-overlay--modal) {
    align-items: stretch;
    justify-content: flex-end;
  }

  .drawer:not(.drawer--modal) {
    max-width: 400px;
    max-height: 100vh;
    height: 100vh;
  }

  .drawer-enter-from .drawer:not(.drawer--modal) {
    transform: translateX(100%);
  }

  .drawer-leave-to .drawer:not(.drawer--modal) {
    transform: translateX(100%);
  }
}
</style>
