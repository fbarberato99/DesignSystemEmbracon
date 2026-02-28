export interface SelectOption {
  value: string | number
  label: string
  disabled?: boolean
}

export interface SelectProps {
  modelValue?: string | number
  options?: SelectOption[]
  placeholder?: string
  disabled?: boolean
  size?: 'lg' | 'sm'
  leftIcon?: string
  chevronIcon?: string
  label?: string
  caption?: string
  error?: boolean
  errorMessage?: string
}

export interface SelectEmits {
  (e: 'update:modelValue', value: string | number): void
  (e: 'change', value: string | number): void
}
