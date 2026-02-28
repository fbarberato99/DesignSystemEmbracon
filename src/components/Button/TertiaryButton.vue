<script setup lang="ts">
import { useSlots } from 'vue'
import ButtonBase from './ButtonBase.vue'
import type { ButtonProps, ButtonEmits } from './Button.types'

const props = withDefaults(defineProps<ButtonProps>(), {
  size: '48px',
  type: 'button',
  disabled: false,
  loading: false,
  block: false,
  iconSize: 18,
})

const emit = defineEmits<ButtonEmits>()
const slots = useSlots()
</script>

<template>
  <ButtonBase
    variant="tertiary"
    :size="props.size"
    :type="props.type"
    :disabled="props.disabled"
    :loading="props.loading"
    :block="props.block"
    :icon-left="props.iconLeft"
    :icon-right="props.iconRight"
    :icon-size="props.iconSize"
    @click="emit('click', $event)"
  >
    <template v-if="slots['icon-left']" #icon-left>
      <slot name="icon-left" />
    </template>
    <slot />
    <template v-if="slots['icon-right']" #icon-right>
      <slot name="icon-right" />
    </template>
  </ButtonBase>
</template>
