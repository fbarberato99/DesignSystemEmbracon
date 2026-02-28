<script setup lang="ts">
import { computed } from 'vue'
import type { IconProps } from './Icon.types'
import * as icons from './icons'

const props = withDefaults(defineProps<IconProps>(), {
  size: 24,
  color: 'currentColor'
})

// Converte kebab-case para PascalCase
const toPascalCase = (str: string): string => {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('')
}

const IconComponent = computed(() => {
  // Normaliza o nome do ícone para o formato IconNome
  let normalizedName = props.name
  
  // Se não começa com Icon, adiciona o prefixo
  if (!normalizedName.startsWith('Icon')) {
    // Converte kebab-case para PascalCase
    const pascalName = toPascalCase(normalizedName)
    normalizedName = `Icon${pascalName}`
  }
  
  const icon = icons[normalizedName as keyof typeof icons]
  return icon || null
})
</script>

<template>
  <component
    v-if="IconComponent"
    :is="IconComponent"
    :width="props.size"
    :height="props.size"
    :style="{ color: props.color }"
    class="icon"
  />
</template>

<style scoped>
.icon {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}
</style>
