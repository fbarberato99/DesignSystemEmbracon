export interface PaginationProps {
  modelValue?: number
  totalPages?: number
}

export interface PaginationEmits {
  (e: 'update:modelValue', page: number): void
  (e: 'change', page: number): void
}
