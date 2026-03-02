/**
 * Embracon Design System
 * 
 * Biblioteca de componentes Vue 3 com TypeScript
 */

import type { App } from 'vue'

// Importar estilos globais
import './styles/colors.css'
import './styles/typography.css'
import './styles/spacing.css'
import './styles/border-radius.css'
import './styles/shadows.css'
import './styles/transitions.css'
import './styles/z-index.css'
import './styles/accessibility.css'

// Importar componentes
import Accordion from './components/Accordion/Accordion.vue'
import AttentionCard from './components/AttentionCard/AttentionCard.vue'
import Breadcrumbs from './components/Breadcrumbs/Breadcrumbs.vue'
import Button from './components/Button/Button.vue'
import PrimaryButton from './components/Button/PrimaryButton.vue'
import SecondaryButton from './components/Button/SecondaryButton.vue'
import TertiaryButton from './components/Button/TertiaryButton.vue'
import LinkButton from './components/Button/LinkButton.vue'
import Checkbox from './components/Checkbox/Checkbox.vue'
import Chip from './components/Chip/Chip.vue'
import Drawer from './components/Drawer/Drawer.vue'
import Icon from './components/Icon/Icon.vue'
import InformativeCard from './components/InformativeCard/InformativeCard.vue'
import Input from './components/Input/Input.vue'
import Loading from './components/Loading/Loading.vue'
import Pagination from './components/Pagination/Pagination.vue'
import Radio from './components/Radio/Radio.vue'
import SearchInput from './components/SearchInput/SearchInput.vue'
import Select from './components/Select/Select.vue'
import Skeleton from './components/Skeleton/Skeleton.vue'
import Tag from './components/Tag/Tag.vue'
import ToggleSwitch from './components/ToggleSwitch/ToggleSwitch.vue'
import Tooltip from './components/Tooltip/Tooltip.vue'
import UploadFiles from './components/UploadFiles/UploadFiles.vue'

// Exportar componentes individualmente
export {
  Accordion,
  AttentionCard,
  Breadcrumbs,
  Button,
  PrimaryButton,
  SecondaryButton,
  TertiaryButton,
  LinkButton,
  Checkbox,
  Chip,
  Drawer,
  Icon,
  InformativeCard,
  Input,
  Loading,
  Pagination,
  Radio,
  SearchInput,
  Select,
  Skeleton,
  Tag,
  ToggleSwitch,
  Tooltip,
  UploadFiles,
}

// Exportar tipos
export type { AccordionProps, AccordionEmits } from './components/Accordion/Accordion.types'
export type { AttentionCardProps } from './components/AttentionCard/AttentionCard.types'
export type { BreadcrumbsProps, BreadcrumbItem } from './components/Breadcrumbs/Breadcrumbs.types'
export type { ButtonBaseProps, ButtonProps, ButtonEmits, ButtonVariant, ButtonSize, ButtonType } from './components/Button/Button.types'
export type { CheckboxProps, CheckboxEmits } from './components/Checkbox/Checkbox.types'
export type { ChipProps, ChipEmits } from './components/Chip/Chip.types'
export type { DrawerProps, DrawerEmits } from './components/Drawer/Drawer.types'
export type { IconProps } from './components/Icon/Icon.types'
export type { InformativeCardProps } from './components/InformativeCard/InformativeCard.types'
export type { InputProps, InputEmits, ValidationRule } from './components/Input/Input.types'
export type { LoadingProps } from './components/Loading/Loading.types'
export type { PaginationProps, PaginationEmits } from './components/Pagination/Pagination.types'
export type { RadioProps, RadioEmits } from './components/Radio/Radio.types'
export type { SearchInputProps, SearchInputEmits } from './components/SearchInput/SearchInput.types'
export type { SelectProps, SelectEmits, SelectOption } from './components/Select/Select.types'
export type { SkeletonProps } from './components/Skeleton/Skeleton.types'
export type { TagProps } from './components/Tag/Tag.types'
export type { ToggleSwitchProps, ToggleSwitchEmits } from './components/ToggleSwitch/ToggleSwitch.types'
export type { TooltipProps, TooltipEmits } from './components/Tooltip/Tooltip.types'
export type { UploadFilesProps, UploadFilesEmits, UploadedFile } from './components/UploadFiles/UploadFiles.types'

// Plugin para instalação global
const EmbraconDesignSystem = {
  install(app: App) {
    // Registrar todos os componentes globalmente
    app.component('Accordion', Accordion)
    app.component('AttentionCard', AttentionCard)
    app.component('Breadcrumbs', Breadcrumbs)
    app.component('Button', Button)
    app.component('PrimaryButton', PrimaryButton)
    app.component('SecondaryButton', SecondaryButton)
    app.component('TertiaryButton', TertiaryButton)
    app.component('LinkButton', LinkButton)
    app.component('Checkbox', Checkbox)
    app.component('Chip', Chip)
    app.component('Drawer', Drawer)
    app.component('Icon', Icon)
    app.component('InformativeCard', InformativeCard)
    app.component('Input', Input)
    app.component('Loading', Loading)
    app.component('Pagination', Pagination)
    app.component('Radio', Radio)
    app.component('SearchInput', SearchInput)
    app.component('Select', Select)
    app.component('Skeleton', Skeleton)
    app.component('Tag', Tag)
    app.component('ToggleSwitch', ToggleSwitch)
    app.component('Tooltip', Tooltip)
    app.component('UploadFiles', UploadFiles)
  },
}

// Exportar plugin como default
export default EmbraconDesignSystem
