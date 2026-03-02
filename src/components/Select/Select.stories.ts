import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Select from './Select.vue'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto exibido acima do campo select',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '""' }
      }
    },
    placeholder: {
      control: 'text',
      description: 'Texto exibido quando nenhuma opção está selecionada',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'Selecione' }
      }
    },
    options: {
      control: 'object',
      description: 'Array de opções disponíveis para seleção. Cada opção deve ter { value: string, label: string }',
      table: {
        type: { summary: 'Array<{ value: string, label: string }>' },
        defaultValue: { summary: '[]' }
      }
    },
    value: {
      control: 'text',
      description: 'Valor selecionado atualmente, acessível via v-model',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '""' }
      }
    },
    size: {
      control: 'select',
      options: ['48px', '40px'],
      description: 'Define a altura do componente select',
      table: {
        type: { summary: "'48px' | '40px'" },
        defaultValue: { summary: '48px' }
      },
      mapping: {
        '48px': 'lg',
        '40px': 'sm'
      }
    },
    leftIcon: {
      control: 'text',
      description: 'Nome do ícone exibido à esquerda do texto (opcional)',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '-' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Quando true, desabilita a interação com o select',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    chevronIcon: {
      table: {
        disable: true
      }
    },
    // Eventos
    input: {
      description: 'Emitido quando uma opção é selecionada',
      table: {
        category: 'Eventos',
        type: { summary: '(value: string) => void' }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Select>

const options = [
  { value: '1', label: 'Opção 1' },
  { value: '2', label: 'Opção 2' },
  { value: '3', label: 'Opção 3' }
]

export const Default: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref('')
      return { args, value, options }
    },
    template: '<Select v-bind="args" v-model="value" :options="options" />'
  }),
  args: {
    label: 'Selecione uma opção',
    placeholder: 'Escolha...',
    size: '48px'
  }
}
