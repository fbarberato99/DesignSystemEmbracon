import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Checkbox from './Checkbox.vue'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto principal exibido ao lado do checkbox',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    subtitle: {
      control: 'text',
      description: 'Texto secundário exibido abaixo do label',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    value: {
      control: 'boolean',
      description: 'Valor inicial quando não usado com v-model',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    modelValue: {
      control: 'boolean',
      description: 'Valor controlado via v-model',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'undefined' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o checkbox',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    size: {
      control: 'select',
      options: ['24px', '20px', '16px'],
      description: 'Tamanho do checkbox',
      table: {
        type: { summary: "'24px' | '20px' | '16px'" },
        defaultValue: { summary: "'24px'" }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Checkbox>

export const Default: Story = {
  render: (args) => ({
    components: { Checkbox },
    setup() {
      const checked = ref(false)
      return { args, checked }
    },
    template: '<Checkbox v-bind="args" v-model="checked" />'
  }),
  args: {
    label: 'Aceito os termos',
    subtitle: 'Li e concordo com os termos de uso',
    size: '24px'
  }
}
