import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Chip from './Chip.vue'

const meta: Meta<typeof Chip> = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    texto: {
      control: 'text',
      description: 'Texto exibido no chip',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    valor: {
      control: 'text',
      description: 'Valor retornado nos eventos',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    selecionado: {
      control: 'boolean',
      description: 'Define estado visual ativo',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita interação',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    close: {
      control: 'boolean',
      description: 'Exibe botão de fechar',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Chip>

export const Default: Story = {
  render: (args) => ({
    components: { Chip },
    setup() {
      const selected = ref(false)
      return { args, selected }
    },
    template: '<Chip v-bind="args" :selecionado="selected" @selecionado="selected = !selected" />'
  }),
  args: {
    texto: 'Selecionável',
    valor: 'chip-1'
  }
}
