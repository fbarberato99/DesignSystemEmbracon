export interface BreadcrumbItem {
  label: string
  to?: string | object
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}
