export interface RadioProps {
  label?: string
  subtitle?: string
  value?: boolean
  modelValue?: boolean
  disabled?: boolean
}

export interface RadioEmits {
  (e: 'input', value: boolean): void
  (e: 'update:modelValue', value: boolean): void
}
