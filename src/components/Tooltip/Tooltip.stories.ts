import type { Meta, StoryObj } from '@storybook/vue3'
import Tooltip from './Tooltip.vue'
import PrimaryButton from '../Button/PrimaryButton.vue'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    conteudo: {
      control: 'text',
      description: 'Conteúdo do tooltip',
      table: {
        type: { summary: 'String' }
      }
    },
    titulo: {
      control: 'text',
      description: 'Título opcional do tooltip',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '-' }
      }
    },
    icon: {
      control: 'text',
      description: 'Nome do ícone exibido como trigger',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'ajuda' }
      }
    },
    posicao: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posição do tooltip em relação ao trigger',
      table: {
        type: { summary: "'top' | 'bottom' | 'left' | 'right'" },
        defaultValue: { summary: 'top' }
      }
    },
    largura: {
      control: 'text',
      description: 'Largura customizada do tooltip',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '200px' }
      }
    },
    botaoTxt: {
      control: 'text',
      description: 'Texto do botão de ação (opcional)',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '-' }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Default: Story = {
  render: (args) => ({
    components: { Tooltip },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 100px; display: flex; justify-content: center;">
        <Tooltip v-bind="args" />
      </div>
    `
  }),
  args: {
    conteudo: 'Esta é uma dica útil',
    posicao: 'top',
    icon: 'ajuda'
  }
}
