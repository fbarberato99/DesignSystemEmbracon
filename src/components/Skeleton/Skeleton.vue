<script setup lang="ts">
import { computed } from 'vue'
import type { SkeletonProps } from './Skeleton.types'

const props = withDefaults(defineProps<SkeletonProps>(), {
  tamanho: 63
})

// Computed para dimensões
const dimensoes = computed(() => {
  const { tipo, tamanho } = props
  
  // Para tipos circulares e quadrados
  if (tipo === 'circulo' || tipo === 'quadrado') {
    const size = typeof tamanho === 'number' ? `${tamanho}px` : tamanho
    return {
      width: size,
      height: size
    }
  }
  
  // Para linha média
  if (tipo === 'md-linha') {
    return {
      width: '288px',
      height: '40px'
    }
  }
  
  // Para linha pequena
  if (tipo === 'sm-linha') {
    return {
      width: '288px',
      height: '15px'
    }
  }
  
  // Para parágrafo
  if (tipo === 'paragrafo') {
    return {
      width: '213px',
      height: '60px'
    }
  }
  
  // Para lista
  if (tipo === 'lista') {
    return {
      width: '287px',
      height: '48px'
    }
  }
  
  return {}
})

</script>

<template>
  <!-- Skeleton Círculo -->
  <div
    v-if="tipo === 'circulo'"
    class="skeleton skeleton--circulo"
    :style="dimensoes"
  >
    <div class="skeleton-gradient skeleton-gradient--circulo"></div>
  </div>

  <!-- Skeleton Quadrado -->
  <div
    v-else-if="tipo === 'quadrado'"
    class="skeleton skeleton--quadrado"
    :style="dimensoes"
  >
    <div class="skeleton-gradient skeleton-gradient--quadrado"></div>
  </div>

  <!-- Skeleton Linha Média -->
  <div
    v-else-if="tipo === 'md-linha'"
    class="skeleton skeleton--md-linha"
    :style="dimensoes"
  >
    <div class="skeleton-gradient skeleton-gradient--linha"></div>
  </div>

  <!-- Skeleton Linha Pequena -->
  <div
    v-else-if="tipo === 'sm-linha'"
    class="skeleton skeleton--sm-linha"
    :style="dimensoes"
  >
    <div class="skeleton-gradient skeleton-gradient--linha"></div>
  </div>

  <!-- Skeleton Parágrafo -->
  <div
    v-else-if="tipo === 'paragrafo'"
    class="skeleton skeleton--paragrafo"
    :style="dimensoes"
  >
    <div class="skeleton-line skeleton-line--1"></div>
    <div class="skeleton-line skeleton-line--2"></div>
    <div class="skeleton-line skeleton-line--3"></div>
  </div>

  <!-- Skeleton Lista -->
  <div
    v-else-if="tipo === 'lista'"
    class="skeleton skeleton--lista"
    :style="dimensoes"
  >
    <div class="skeleton-lista-circulo"></div>
    <div class="skeleton-lista-content">
      <div class="skeleton-lista-title"></div>
      <div class="skeleton-lista-subtitle"></div>
    </div>
  </div>
</template>

<style scoped>
.skeleton {
  position: relative;
  overflow: hidden;
}

/* Gradiente animado base */
@keyframes shimmer {
  0% {
    background-position: -100% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.skeleton-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(217, 217, 217, 0.4) 0%,
    rgba(217, 217, 217, 0.2) 50%,
    rgba(217, 217, 217, 0.4) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
}

/* Círculo */
.skeleton--circulo {
  border-radius: 60px;
}

.skeleton-gradient--circulo {
  border-radius: 60px;
}

/* Quadrado */
.skeleton--quadrado {
  border-radius: var(--border-radius-sm);
}

.skeleton-gradient--quadrado {
  border-radius: var(--border-radius-sm);
}

/* Linhas */
.skeleton--md-linha,
.skeleton--sm-linha {
  border-radius: var(--border-radius-sm);
}

.skeleton-gradient--linha {
  border-radius: var(--border-radius-sm);
}

/* Parágrafo */
.skeleton--paragrafo {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skeleton-line {
  border-radius: var(--border-radius-sm);
  background: linear-gradient(
    90deg,
    rgba(217, 217, 217, 0.4) 0%,
    rgba(217, 217, 217, 0.2) 50%,
    rgba(217, 217, 217, 0.4) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
}

.skeleton-line--1 {
  height: 12px;
  width: 100%;
}

.skeleton-line--2 {
  height: 12px;
  width: 80%;
}

.skeleton-line--3 {
  height: 12px;
  width: 90%;
}

/* Lista */
.skeleton--lista {
  display: flex;
  align-items: center;
  gap: var(--spacing-16);
}

.skeleton-lista-circulo {
  flex-shrink: 0;
  width: 48px;
  height: 48px;
  border-radius: 60px;
  background: linear-gradient(
    90deg,
    rgba(217, 217, 217, 0.4) 0%,
    rgba(217, 217, 217, 0.2) 50%,
    rgba(217, 217, 217, 0.4) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
}

.skeleton-lista-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.skeleton-lista-title {
  height: 15px;
  width: 100%;
  border-radius: var(--border-radius-sm);
  background: linear-gradient(
    90deg,
    rgba(217, 217, 217, 0.4) 0%,
    rgba(217, 217, 217, 0.2) 50%,
    rgba(217, 217, 217, 0.4) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
}

.skeleton-lista-subtitle {
  height: 15px;
  width: 63%;
  border-radius: var(--border-radius-sm);
  background: linear-gradient(
    90deg,
    rgba(217, 217, 217, 0.4) 0%,
    rgba(217, 217, 217, 0.2) 50%,
    rgba(217, 217, 217, 0.4) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite linear;
}
</style>
