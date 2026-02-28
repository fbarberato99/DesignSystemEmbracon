export type CheckboxSize = '24px' | '20px' | '16px'

export interface CheckboxProps {
  label?: string
  subtitle?: string
  value?: boolean
  modelValue?: boolean
  disabled?: boolean
  size?: CheckboxSize
}

export interface CheckboxEmits {
  (e: 'input', value: boolean): void
  (e: 'update:modelValue', value: boolean): void
}
