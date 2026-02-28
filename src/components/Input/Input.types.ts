export type InputSize = 'lg' | 'sm'

export type ValidationRule = (value: string) => true | string

export interface InputProps {
  value?: string | number
  type?: string
  label?: string
  placeholder?: string
  caption?: string
  maxLength?: string | number
  disabled?: boolean
  size?: InputSize
  customClass?: string
  tooltiptext?: string
  rules?: ValidationRule[]
  noNumbers?: boolean
  onlyNumbers?: boolean
  noSpecials?: boolean
  realTimeValidation?: boolean
}

export interface InputEmits {
  (e: 'input', value: string): void
  (e: 'blur', event: FocusEvent): void
}
