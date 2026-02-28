import type { Meta, StoryObj } from '@storybook/vue3'
import AttentionCard from './AttentionCard.vue'

const meta: Meta<typeof AttentionCard> = {
  title: 'Components/AttentionCard',
  component: AttentionCard,
  tags: ['autodocs'],
  argTypes: {
    texto: {
      control: 'text',
      description: 'Texto do card'
    },
    acao1: {
      control: 'text',
      description: 'Texto do botão primário'
    },
    acao2: {
      control: 'text',
      description: 'Texto do botão secundário'
    },
    closeButton: {
      control: 'boolean',
      description: 'Mostrar botão de fechar'
    }
  }
}

export default meta
type Story = StoryObj<typeof AttentionCard>

export const Default: Story = {
  render: (args) => ({
    components: { AttentionCard },
    setup() {
      return { args }
    },
    template: '<AttentionCard v-bind="args" />'
  }),
  args: {
    texto: 'Mensagem importante que requer atenção do usuário',
    acao1: 'Confirmar',
    acao2: 'Cancelar',
    closeButton: true
  }
}
