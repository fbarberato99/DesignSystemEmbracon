import type { Meta, StoryObj } from '@storybook/vue3'
import ButtonBase from './ButtonBase.vue'

const meta: Meta<typeof ButtonBase> = {
  title: 'Components/Button',
  component: ButtonBase,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'link'],
      description: 'Variação do botão'
    },
    size: {
      control: 'select',
      options: ['36px', '40px', '44px', '48px'],
      description: 'Tamanho do botão'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
    },
    loading: {
      control: 'boolean',
      description: 'Estado de carregamento'
    },
    block: {
      control: 'boolean',
      description: 'Botão ocupa 100% da largura'
    },
    iconLeft: {
      control: 'text',
      description: 'Nome do ícone à esquerda'
    },
    iconRight: {
      control: 'text',
      description: 'Nome do ícone à direita'
    },
    iconSize: {
      table: {
        disable: true
      }
    },
    type: {
      table: {
        disable: true
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof ButtonBase>

export const Default: Story = {
  render: (args) => ({
    components: { ButtonBase },
    setup() {
      return { args }
    },
    template: '<div style="display: flex; gap: 16px; flex-wrap: wrap;"><ButtonBase v-bind="args">Button</ButtonBase></div>'
  }),
  args: {
    variant: 'primary',
    size: '48px',
    disabled: false,
    loading: false,
    block: false
  }
}
