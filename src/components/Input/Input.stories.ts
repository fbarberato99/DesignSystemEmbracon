import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Input from './Input.vue'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Nome do campo exibido acima do input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    placeholder: {
      control: 'text',
      description: 'Texto de exemplo dentro do input',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    caption: {
      control: 'text',
      description: 'Orientações adicionais caso necessário',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
      description: 'Tipo do input HTML',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: "'text'" }
      }
    },
    size: {
      control: 'select',
      options: ['48px', '40px'],
      description: 'Altura do input',
      table: {
        type: { summary: "'48px' | '40px'" },
        defaultValue: { summary: "'48px'" }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o input',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    maxLength: {
      control: 'number',
      description: 'Limite de caracteres',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 'undefined' }
      }
    },
    tooltiptext: {
      control: 'text',
      description: 'Texto exibido no tooltip ao passar o mouse sobre o ícone de informação',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  render: (args) => ({
    components: { Input },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: `<Input 
      v-model="value" 
      :label="args.label"
      :placeholder="args.placeholder"
      :caption="args.caption"
      :type="args.type"
      :disabled="args.disabled"
      :maxLength="args.maxLength"
      :tooltiptext="args.tooltiptext"
      :size="args.size === '48px' ? 'lg' : 'sm'"
    />`
  }),
  args: {
    label: 'Nome do campo',
    placeholder: 'Nome e sobrenome',
    caption: 'Orientações adicionais caso necessário',
    size: '48px'
  }
}
