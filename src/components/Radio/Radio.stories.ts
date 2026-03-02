import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Radio from './Radio.vue'

const meta: Meta<typeof Radio> = {
  title: 'Components/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto principal exibido do radio',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '""' }
      }
    },
    subtitle: {
      control: 'text',
      description: 'Texto secundário exibido abaixo do label',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '""' }
      }
    },
    value: {
      control: 'text',
      description: 'Valor deste radio',
      table: {
        type: { summary: 'String | Number' },
        defaultValue: { summary: 'null' }
      }
    },
    modelValue: {
      control: 'text',
      description: 'Valor atual selecionado no grupo ( v-model )',
      table: {
        type: { summary: 'String | Number' },
        defaultValue: { summary: 'null' }
      }
    },
    size: {
      control: 'select',
      options: ['24px', '20px', '16px'],
      description: 'Tamanho do radio button',
      table: {
        type: { summary: "'24px' | '20px' | '16px'" },
        defaultValue: { summary: "'24px'" }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    // Eventos
    'update:modelValue': {
      description: 'Emitido ao selecionar o radio, retorna o value do item selecionado',
      table: {
        category: 'Eventos',
        type: { summary: '(value: boolean) => void' }
      }
    },
    input: {
      description: 'Emitido ao selecionar o radio (modo não controlado)',
      table: {
        category: 'Eventos',
        type: { summary: '(value: boolean) => void' }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref(false)
      return { args, selected }
    },
    template: '<Radio v-bind="args" v-model="selected" />'
  }),
  args: {
    label: 'Opção 1',
    subtitle: 'Descrição da opção'
  }
}
