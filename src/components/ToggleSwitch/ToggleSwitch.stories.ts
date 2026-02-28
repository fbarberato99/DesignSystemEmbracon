import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import ToggleSwitch from './ToggleSwitch.vue'

const meta: Meta<typeof ToggleSwitch> = {
  title: 'Components/ToggleSwitch',
  component: ToggleSwitch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['24px', '20px'],
      description: 'Tamanho do switch',
      mapping: {
        '24px': 'md',
        '20px': 'sm'
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
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
    template: '<div style="display: inline-flex;"><ToggleSwitch v-bind="args" v-model="active" /></div>'
  }),
  args: {
    size: 'md'
  }
}

export const Small: Story = {
  render: (args) => ({
    components: { ToggleSwitch },
    setup() {
      const active = ref(false)
      return { args, active }
    },
    template: '<div style="display: inline-flex;"><ToggleSwitch v-bind="args" v-model="active" /></div>'
  }),
  args: {
    size: 'sm'
  }
}

export const Active: Story = {
  render: (args) => ({
    components: { ToggleSwitch },
    setup() {
      const active = ref(true)
      return { args, active }
    },
    template: '<div style="display: inline-flex;"><ToggleSwitch v-bind="args" v-model="active" /></div>'
  }),
  args: {
    size: 'md'
  }
}

export const Disabled: Story = {
  render: (args) => ({
    components: { ToggleSwitch },
    setup() {
      const active = ref(false)
      return { args, active }
    },
    template: '<div style="display: inline-flex;"><ToggleSwitch v-bind="args" v-model="active" /></div>'
  }),
  args: {
    size: 'md',
    disabled: true
  }
}

export const AllStates: Story = {
  render: () => ({
    components: { ToggleSwitch },
    setup() {
      const active1 = ref(false)
      const active2 = ref(true)
      const active3 = ref(false)
      return { active1, active2, active3 }
    },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <ToggleSwitch v-model="active1" size="md" />
          <span style="font-size: 12px;">Desativado</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <ToggleSwitch v-model="active2" size="md" />
          <span style="font-size: 12px;">Ativado</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <ToggleSwitch v-model="active3" size="md" disabled />
          <span style="font-size: 12px;">Desabilitado</span>
        </div>
      </div>
    `
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { ToggleSwitch },
    setup() {
      const active1 = ref(true)
      const active2 = ref(true)
      return { active1, active2 }
    },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <ToggleSwitch v-model="active1" size="sm" />
          <span style="font-size: 12px;">Small (34x20px)</span>
        </div>
        <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
          <ToggleSwitch v-model="active2" size="md" />
          <span style="font-size: 12px;">Medium (41x24px)</span>
        </div>
      </div>
    `
  })
}
