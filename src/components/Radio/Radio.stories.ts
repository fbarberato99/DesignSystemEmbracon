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
      description: 'Texto principal'
    },
    subtitle: {
      control: 'text',
      description: 'Texto secundário'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
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
    template: '<div style="max-width: 400px;"><Radio v-bind="args" v-model="selected" /></div>'
  }),
  args: {
    label: 'Opção 1',
    subtitle: 'Descrição da opção'
  }
}

export const WithoutSubtitle: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref(false)
      return { args, selected }
    },
    template: '<div style="max-width: 400px;"><Radio v-bind="args" v-model="selected" /></div>'
  }),
  args: {
    label: 'Opção 2'
  }
}

export const Disabled: Story = {
  render: (args) => ({
    components: { Radio },
    setup() {
      const selected = ref(false)
      return { args, selected }
    },
    template: '<div style="max-width: 400px;"><Radio v-bind="args" v-model="selected" /></div>'
  }),
  args: {
    label: 'Opção desabilitada',
    disabled: true
  }
}

export const RadioGroup: Story = {
  render: () => ({
    components: { Radio },
    setup() {
      const selected = ref('option1')
      return { selected }
    },
    template: `
      <div style="max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
        <Radio label="Opção 1" subtitle="Primeira opção" :modelValue="selected === 'option1'" @update:modelValue="selected = 'option1'" />
        <Radio label="Opção 2" subtitle="Segunda opção" :modelValue="selected === 'option2'" @update:modelValue="selected = 'option2'" />
        <Radio label="Opção 3" subtitle="Terceira opção" :modelValue="selected === 'option3'" @update:modelValue="selected = 'option3'" />
      </div>
    `
  })
}
