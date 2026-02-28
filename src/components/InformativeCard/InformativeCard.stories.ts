import type { Meta, StoryObj } from '@storybook/vue3'
import InformativeCard from './InformativeCard.vue'

const meta: Meta<typeof InformativeCard> = {
  title: 'Components/InformativeCard',
  component: InformativeCard,
  tags: ['autodocs'],
  argTypes: {
    titulo: {
      control: 'text',
      description: 'Título do card'
    },
    texto: {
      control: 'text',
      description: 'Texto do card'
    },
    icon: {
      control: 'text',
      description: 'Nome do ícone (ex: informacao, aviso, check)'
    },
    iconColor: {
      control: 'select',
      options: [
        'primary-red',
        'primary-red-dark',
        'secondary-yellow',
        'secondary-blue-light',
        'secondary-blue-dark',
        'secondary-white',
        'secondary-gray-graphite',
        'secondary-orange',
        'gray-10',
        'gray-20',
        'gray-30',
        'gray-40',
        'gray-50',
        'gray-60',
        'gray-70',
        'gray-80',
        'gray-90',
        'gray-100',
        'feedback-neutral-1',
        'feedback-neutral-2',
        'feedback-neutral-3',
        'feedback-neutral-4',
        'feedback-neutral-5',
        'feedback-success-1',
        'feedback-success-2',
        'feedback-success-3',
        'feedback-success-4',
        'feedback-success-5',
        'feedback-critical-1',
        'feedback-critical-2',
        'feedback-critical-3',
        'feedback-critical-4',
        'feedback-critical-5',
        'feedback-alert-1',
        'feedback-alert-2',
        'feedback-alert-3',
        'feedback-alert-4',
        'feedback-alert-5'
      ],
      description: 'Cor do ícone usando tokens de cores do Design System'
    }
  }
}

export default meta
type Story = StoryObj<typeof InformativeCard>

export const WithTitle: Story = {
  render: (args) => ({
    components: { InformativeCard },
    setup() {
      return { args }
    },
    template: '<div style="max-width: 600px;"><InformativeCard v-bind="args" /></div>'
  }),
  args: {
    titulo: 'Informação Importante',
    texto: 'Este card contém informações relevantes sobre o sistema.'
  }
}

export const TextOnly: Story = {
  render: (args) => ({
    components: { InformativeCard },
    setup() {
      return { args }
    },
    template: '<div style="max-width: 600px;"><InformativeCard v-bind="args" /></div>'
  }),
  args: {
    texto: 'Informação sem título, apenas o texto descritivo.'
  }
}

export const LongContent: Story = {
  render: (args) => ({
    components: { InformativeCard },
    setup() {
      return { args }
    },
    template: '<div style="max-width: 600px;"><InformativeCard v-bind="args" /></div>'
  }),
  args: {
    titulo: 'Este é um título mais longo para demonstrar',
    texto: 'A descrição também pode ser mais extensa, contendo múltiplas linhas de texto para fornecer informações detalhadas ao usuário sobre o contexto.'
  }
}
