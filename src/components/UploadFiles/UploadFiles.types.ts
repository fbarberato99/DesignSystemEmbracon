export interface UploadFilesProps {
  label?: string
  titulo: string
  disabled?: boolean
  fileCategory?: string
  accept?: string[]
  sizeLimit?: number
  wrongFileTypeMessage?: string
  fullWidth?: boolean
  tooltiptext?: boolean
  tooltipPosicao?: 'top' | 'bottom' | 'left' | 'right'
  tooltipLargura?: string
}

export interface UploadFilesEmits {
  (e: 'input', file: { name: string; base64: string; type: string } | null): void
}

export interface UploadedFile {
  name: string
  base64: string
  type: string
  size: number
}
