export interface ChipProps {
  texto?: string
  valor?: string
  selecionado?: boolean
  disabled?: boolean
  close?: boolean
}

export interface ChipEmits {
  (e: 'selecionado', valor: string): void
  (e: 'close', valor: string): void
}
