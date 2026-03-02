export type IconColor = 
  | 'primary-red' 
  | 'primary-red-dark' 
  | 'secondary-yellow'
  | 'secondary-blue-light'
  | 'secondary-blue-dark'
  | 'secondary-white' 
  | 'secondary-gray-graphite'
  | 'secondary-orange'
  | 'gray-10' 
  | 'gray-20' 
  | 'gray-30' 
  | 'gray-40'
  | 'gray-50'
  | 'gray-60' 
  | 'gray-70'
  | 'gray-80'
  | 'gray-90'
  | 'gray-100'
  | 'feedback-neutral-1'
  | 'feedback-neutral-2'
  | 'feedback-neutral-3'
  | 'feedback-neutral-4'
  | 'feedback-neutral-5'
  | 'feedback-success-1'
  | 'feedback-success-2'
  | 'feedback-success-3'
  | 'feedback-success-4'
  | 'feedback-success-5'
  | 'feedback-critical-1'
  | 'feedback-critical-2'
  | 'feedback-critical-3'
  | 'feedback-critical-4'
  | 'feedback-critical-5'
  | 'feedback-alert-1'
  | 'feedback-alert-2'
  | 'feedback-alert-3'
  | 'feedback-alert-4'
  | 'feedback-alert-5'

/**
 * Embracon Design System - Accordion Types
 */

export interface AccordionProps {
  /**
   * Título do accordion
   * @default ""
   */
  titulo?: string
  
  /**
   * Conteúdo do accordion (ignorado se slot default existir)
   * @default ""
   */
  conteudo?: string
  
  /**
   * Nome do ícone exibido ao lado do título (ex: informacao, aviso, check)
   * @default "informacao"
   */
  icone?: string
  
  /**
   * Cor do ícone usando tokens de cores do Design System
   * @default "secondary-gray-graphite"
   */
  iconeColor?: IconColor
  
  /**
   * Nome do ícone chevron (ex: chevron-down, chevron-up)
   * @default "chevron-down"
   */
  chevronIcon?: string
  
  /**
   * Estado desabilitado
   * @default false
   */
  disabled?: boolean
  
  /**
   * Define se o componente ocupa 100% da largura disponível
   * @default false
   */
  fullWidth?: boolean
}

export interface AccordionEmits {
  (e: 'toggle', isOpen: boolean): void
}
