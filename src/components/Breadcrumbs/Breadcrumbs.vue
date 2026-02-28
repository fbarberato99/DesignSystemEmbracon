<script setup lang="ts">
import type { BreadcrumbsProps } from './Breadcrumbs.types'

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  items: () => []
})

const isLastItem = (index: number) => {
  return index === props.items.length - 1
}
</script>

<template>
  <nav class="breadcrumbs" aria-label="Breadcrumb">
    <ol class="breadcrumbs-list">
      <li
        v-for="(item, index) in items"
        :key="index"
        class="breadcrumbs-item"
      >
        <!-- Separador -->
        <span v-if="index > 0" class="breadcrumbs-separator">/</span>

        <!-- Link ou texto -->
        <a
          v-if="item.to && !isLastItem(index)"
          :href="typeof item.to === 'string' ? item.to : undefined"
          class="breadcrumbs-link"
        >
          {{ item.label }}
        </a>
        <span
          v-else
          class="breadcrumbs-current"
          :aria-current="isLastItem(index) ? 'page' : undefined"
        >
          {{ item.label }}
        </span>
      </li>
    </ol>
  </nav>
</template>

<style scoped>
.breadcrumbs {
  width: 100%;
}

.breadcrumbs-list {
  display: flex;
  align-items: center;
  gap: 6px;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
}

.breadcrumbs-item {
  display: flex;
  align-items: center;
  gap: 6px;
}

/* Separador */
.breadcrumbs-separator {
  font-family: 'Mulish', sans-serif;
  font-size: var(--typography-text-small-size);
  font-weight: 600;
  color: var(--tons-de-cinza-colors-gray-60, #9EA1A4);
}

/* Link */
.breadcrumbs-link {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-small-size);
  font-weight: 500;
  color: var(--tons-de-cinza-colors-gray-60, #9EA1A4);
  text-decoration: none;
  transition: color 0.2s ease;
}

.breadcrumbs-link:hover {
  color: var(--colors-primary-red);
  text-decoration: underline;
}

/* Página atual */
.breadcrumbs-current {
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-small-size);
  font-weight: 600;
  color: var(--colors-secondary-gray-graphite);
}
</style>
