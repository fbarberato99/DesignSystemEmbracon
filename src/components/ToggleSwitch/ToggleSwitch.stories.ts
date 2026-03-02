import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import ToggleSwitch from './ToggleSwitch.vue'

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Estado atual do switch (ativo/inativo), acessível via v-model',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    size: {
      control: 'select',
      options: ['24px', '20px'],
      description: 'Define o tamanho do componente switch',
      table: {
        type: { summary: "'24px' | '20px'" },
        defaultValue: { summary: '24px' }
      },
      mapping: {
        '24px': 'md',
        '20px': 'sm'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Quando true, desabilita a interação com o switch',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    // Eventos
    'update:modelValue': {
      description: 'Emitido quando o estado do switch é alterado',
      table: {
        category: 'Eventos',
        type: { summary: '(value: boolean) => void' }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof ToggleSwitch>

export const Default: Story = {
  render: (args) => ({
    components: { ToggleSwitch },
    setup() {
      const active = ref(false)
      return { args, active }
    },
    template: '<ToggleSwitch v-bind="args" v-model="active" />'
  }),
  args: {
    size: '24px'
  }
}
