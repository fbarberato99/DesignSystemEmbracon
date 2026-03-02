import type { Meta, StoryObj } from '@storybook/vue3'
import Accordion from './Accordion.vue'

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    titulo: {
      control: 'text',
      description: 'Título exibido no cabeçalho do accordion',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    conteudo: {
      control: 'text',
      description: 'Texto do conteúdo principal (exibido quando expandido)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    icone: {
      control: 'text',
      description: 'Nome do ícone exibido ao lado do título',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"informacao"' }
      }
    },
    iconeColor: {
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
      description: 'Cor do ícone usando tokens de cores do Design System',
      table: {
        type: { summary: 'IconColor' },
        defaultValue: { summary: '"secondary-gray-graphite"' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Se verdadeiro, impede o accordion de ser expandido',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    chevronIcon: {
      table: {
        disable: true
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Accordion>

export const Default: Story = {
  render: (args) => ({
    components: { Accordion },
    setup() {
      return { args }
    },
    template: '<Accordion v-bind="args" />'
  }),
  args: {
    titulo: 'Como funciona o consórcio?',
    conteudo: 'O consórcio é uma modalidade de compra programada que permite adquirir bens ou serviços sem pagar juros. É uma forma de poupar dinheiro de maneira organizada e planejada, reunindo pessoas com o mesmo objetivo de compra.'
  }
}
