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
      description: 'Nome do campo exibido acima do input.',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '""' }
      }
    },
    placeholder: {
      control: 'text',
      description: 'Texto de exemplo dentro do input.',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '""' }
      }
    },
    caption: {
      control: 'text',
      description: 'Orientações adicionais caso necessário.',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '""' }
      }
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number'],
      description: 'Tipo do input HTML.',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'text' }
      }
    },
    size: {
      control: 'select',
      options: ['48px', '40px'],
      description: 'Altura do input.',
      table: {
        type: { summary: "'48px' | '40px'" },
        defaultValue: { summary: '48px' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o input.',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    maxLength: {
      control: 'number',
      description: 'Limite de caracteres.',
      table: {
        type: { summary: 'Number' },
        defaultValue: { summary: '-' }
      }
    },
    fullWidth: {
      control: 'boolean',
      description: 'Define se o componente ocupa 100% da largura disponível.',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    tooltiptext: {
      control: 'boolean',
      description: 'Ativa ou desativa o ícone de tooltip.',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    tooltipPosicao: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posição do tooltip em relação ao ícone.',
      table: {
        type: { summary: "'top' | 'bottom' | 'left' | 'right'" },
        defaultValue: { summary: 'top' }
      }
    },
    tooltipLargura: {
      control: 'text',
      description: 'Largura customizada do tooltip.',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '200px' }
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
      :fullWidth="args.fullWidth"
      :tooltiptext="args.tooltiptext"
      :tooltipPosicao="args.tooltipPosicao"
      :tooltipLargura="args.tooltipLargura"
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
