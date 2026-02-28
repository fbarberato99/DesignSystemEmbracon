export interface SearchInputProps {
  value?: string
  placeholder?: string
  searchIcon?: string
  clearIcon?: string
  disabled?: boolean
}

export interface SearchInputEmits {
  (e: 'input', value: string): void
}
