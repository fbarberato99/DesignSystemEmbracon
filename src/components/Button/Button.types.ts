/**
 * Embracon Design System - Button Types
 */

export type ButtonVariant = 'primary' | 'secondary' | 'tertiary' | 'link'
export type ButtonSize = '36px' | '40px' | '44px' | '48px'
export type ButtonType = 'button' | 'submit' | 'reset'

/**
 * Props do componente base (com variant)
 */
export interface ButtonBaseProps {
  /**
   * Variante visual do botão
   * @default 'primary'
   */
  variant?: ButtonVariant
  
  /**
   * Tamanho do botão
   * @default '48px'
   */
  size?: ButtonSize
  
  /**
   * Tipo HTML do botão
   * @default 'button'
   */
  type?: ButtonType
  
  /**
   * Estado desabilitado
   * @default false
   */
  disabled?: boolean
  
  /**
   * Estado de carregamento
   * @default false
   */
  loading?: boolean
  
  /**
   * Botão ocupa toda a largura disponível
   * @default false
   */
  block?: boolean
  
  /**
   * Nome do ícone à esquerda (do componente Icon)
   * @optional
   */
  iconLeft?: string
  
  /**
   * Nome do ícone à direita (do componente Icon)
   * @optional
   */
  iconRight?: string
  
  /**
   * Tamanho dos ícones em pixels
   * @default 24
   */
  iconSize?: number
}

/**
 * Props dos componentes específicos (sem variant)
 */
export interface ButtonProps {
  /**
   * Tamanho do botão
   * @default '48px'
   */
  size?: ButtonSize
  
  /**
   * Tipo HTML do botão
   * @default 'button'
   */
  type?: ButtonType
  
  /**
   * Estado desabilitado
   * @default false
   */
  disabled?: boolean
  
  /**
   * Estado de carregamento
   * @default false
   */
  loading?: boolean
  
  /**
   * Botão ocupa toda a largura disponível
   * @default false
   */
  block?: boolean
  
  /**
   * Nome do ícone à esquerda (do componente Icon)
   * @optional
   */
  iconLeft?: string
  
  /**
   * Nome do ícone à direita (do componente Icon)
   * @optional
   */
  iconRight?: string
  
  /**
   * Tamanho dos ícones em pixels
   * @default 24
   */
  iconSize?: number
}

export interface ButtonEmits {
  (e: 'click', event: MouseEvent): void
}
