export interface DrawerProps {
  title?: string
  height?: string
  closeButton?: boolean
  desktopAsModal?: boolean
  fixedFooter?: boolean
  pusher?: boolean
  buttonText?: string
  contentText?: string
  icon?: string
  closeIcon?: string
}

export interface DrawerEmits {
  (e: 'close'): void
  (e: 'click'): void
}
