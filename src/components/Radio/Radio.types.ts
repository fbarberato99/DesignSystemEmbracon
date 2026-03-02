export type RadioSize = '24px' | '20px' | '16px'

export interface RadioProps {
  label?: string
  subtitle?: string
  value?: boolean
  modelValue?: boolean
  disabled?: boolean
  size?: RadioSize
}

export interface RadioEmits {
  (e: 'input', value: boolean): void
  (e: 'update:modelValue', value: boolean): void
}
