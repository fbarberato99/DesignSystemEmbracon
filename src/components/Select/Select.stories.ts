import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Select from './Select.vue'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['48px', '40px'],
      description: 'Tamanho do select',
      mapping: {
        '48px': 'lg',
        '40px': 'sm'
      }
    },
    label: {
      control: 'text',
      description: 'Label do select'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder do select'
    },
    leftIcon: {
      control: 'text',
      description: 'Nome do ícone à esquerda (ex: home, pesquisar). Aceita nomes em kebab-case.'
    },
    chevronIcon: {
      control: 'text',
      description: 'Nome do ícone chevron (ex: chevron-down, chevron-up). Aceita nomes em kebab-case.'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
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
    template: '<div style="max-width: 400px;"><Select v-bind="args" v-model="value" :options="options" /></div>'
  }),
  args: {
    label: 'Selecione uma opção',
    placeholder: 'Escolha...',
    size: 'lg'
  }
}

export const WithValue: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref('2')
      return { args, value, options }
    },
    template: '<div style="max-width: 400px;"><Select v-bind="args" v-model="value" :options="options" /></div>'
  }),
  args: {
    label: 'Opção selecionada',
    placeholder: 'Escolha...'
  }
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Select },
    setup() {
      const value = ref('')
      return { args, value, options }
    },
    template: '<div style="max-width: 400px;"><Select v-bind="args" v-model="value" :options="options" /></div>'
  }),
  args: {
    label: 'Select desabilitado',
    disabled: true
  }
}

export const AllStates: Story = {
  render: () => ({
    components: { Select },
    setup() {
      const value1 = ref('')
      const value2 = ref('2')
      const value3 = ref('')
      return { value1, value2, value3, options }
    },
    template: `
      <div style="max-width: 400px; display: flex; flex-direction: column; gap: 24px;">
        <Select v-model="value1" label="Vazio" placeholder="Escolha..." :options="options" />
        <Select v-model="value2" label="Com valor" placeholder="Escolha..." :options="options" />
        <Select v-model="value3" label="Desabilitado" placeholder="Escolha..." :options="options" disabled />
      </div>
    `
  })
}
