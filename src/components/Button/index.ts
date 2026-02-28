// Componente base (com prop variant)
export { default as Button } from './Button.vue'

// Componentes específicos por variante
export { default as PrimaryButton } from './PrimaryButton.vue'
export { default as SecondaryButton } from './SecondaryButton.vue'
export { default as TertiaryButton } from './TertiaryButton.vue'
export { default as LinkButton } from './LinkButton.vue'

// Types
export type { ButtonProps, ButtonBaseProps, ButtonVariant, ButtonSize, ButtonType } from './Button.types'
