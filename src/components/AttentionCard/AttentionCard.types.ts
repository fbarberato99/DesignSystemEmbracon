export interface AttentionCardProps {
  texto: string
  acao1?: string
  acao2?: string
  closeButton?: boolean
  icon?: string
  fullWidth?: boolean
}

export interface AttentionCardEmits {
  (e: 'close'): void
  (e: 'acao1'): void
  (e: 'acao2'): void
}
