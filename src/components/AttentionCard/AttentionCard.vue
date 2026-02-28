<script setup lang="ts">
import { ref } from 'vue'
import Icon from '../Icon/Icon.vue'
import type { AttentionCardProps, AttentionCardEmits } from './AttentionCard.types'

const props = withDefaults(defineProps<AttentionCardProps>(), {
  acao1: '',
  acao2: '',
  closeButton: false,
  icon: 'informacao'
})

const emit = defineEmits<AttentionCardEmits>()

const isVisible = ref(true)

const handleClose = () => {
  isVisible.value = false
  emit('close')
}

const handleAcao1 = () => {
  emit('acao1')
}

const handleAcao2 = () => {
  emit('acao2')
}
</script>

<template>
  <div
    v-if="isVisible"
    class="attention-card"
    :class="{
      'attention-card--with-actions': acao1 || acao2,
      'attention-card--close-button': closeButton
    }"
  >
    <div class="attention-card-wrapper">
      <!-- Ícone -->
      <div class="attention-card-icon">
        <Icon :name="props.icon" :size="18" color="#486DE8" />
      </div>

      <!-- Conteúdo -->
      <div class="attention-card-content">
        <!-- Texto -->
        <p class="attention-card-text">{{ texto }}</p>

        <!-- Slot para conteúdo customizado -->
        <slot></slot>

        <!-- Ações -->
        <div v-if="acao1 || acao2" class="attention-card-actions">
          <button
            v-if="acao1"
            type="button"
            class="attention-card-action"
            @click="handleAcao1"
          >
            {{ acao1 }}
          </button>
          <button
            v-if="acao2"
            type="button"
            class="attention-card-action"
            @click="handleAcao2"
          >
            {{ acao2 }}
          </button>
        </div>
      </div>

      <!-- Botão fechar (opcional) -->
      <button
        v-if="closeButton"
        type="button"
        class="attention-card-close"
        aria-label="Fechar"
        @click="handleClose"
      >
        <Icon name="fechar" :size="24" color="#CE181E" />
      </button>
    </div>
  </div>
</template>

<style scoped>
.attention-card {
  display: block;
  width: 100%;
  padding: 13px 16px;
  background: var(--status-neutro-colors-feedback-neutral-1, #E6E9F3);
  border: 1px solid var(--status-neutro-colors-feedback-neutral-5, #90A5EC);
  border-radius: var(--border-radius-sm);
  box-sizing: border-box;
}

.attention-card-wrapper {
  display: flex;
  align-items: center;
  gap: var(--spacing-8);
}

.attention-card--with-actions .attention-card-wrapper {
  align-items: flex-start;
  gap: 9px;
}

.attention-card--with-actions .attention-card-icon {
  margin-top: 3px;
}

/* Ícone */
.attention-card-icon {
  flex-shrink: 0;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Conteúdo */
.attention-card-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 7px;
  min-width: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}

/* Texto */
.attention-card-text {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-small-size);
  font-weight: 600;
  line-height: 1.5;
  color: var(--colors-gray-100);
  margin: 0;
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
}

/* Ações */
.attention-card-actions {
  display: flex;
  gap: 12px;
  align-items: center;
  flex-wrap: wrap;
}

.attention-card-action {
  padding: 0;
  border: none;
  background: transparent;
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-small-size);
  font-weight: 600;
  line-height: 1.5;
  color: var(--colors-primary-red);
  cursor: pointer;
  text-decoration: underline;
  transition: opacity 0.2s ease;
}

.attention-card-action:hover {
  opacity: 0.8;
}

/* Botão fechar */
.attention-card-close {
  flex-shrink: 0;
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.2s ease;
}

.attention-card-close:hover {
  opacity: 0.7;
}
</style>
