import type { Meta, StoryObj } from '@storybook/vue3'
import Loading from './Loading.vue'

const meta: Meta<typeof Loading> = {
  title: 'Components/Loading',
  component: Loading,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'number',
      description: 'Tamanho do loading em pixels'
    }
  }
}

export default meta
type Story = StoryObj<typeof Loading>

export const Small: Story = {
  render: (args) => ({
    components: { Loading },
    setup() {
      return { args }
    },
    template: '<div style="display: flex; justify-content: center; padding: 20px;"><Loading v-bind="args" /></div>'
  }),
  args: {
    size: 24
  }
}

export const Medium: Story = {
  render: (args) => ({
    components: { Loading },
    setup() {
      return { args }
    },
    template: '<div style="display: flex; justify-content: center; padding: 20px;"><Loading v-bind="args" /></div>'
  }),
  args: {
    size: 32
  }
}

export const Large: Story = {
  render: (args) => ({
    components: { Loading },
    setup() {
      return { args }
    },
    template: '<div style="display: flex; justify-content: center; padding: 20px;"><Loading v-bind="args" /></div>'
  }),
  args: {
    size: 48
  }
}

export const ExtraLarge: Story = {
  render: (args) => ({
    components: { Loading },
    setup() {
      return { args }
    },
    template: '<div style="display: flex; justify-content: center; padding: 20px;"><Loading v-bind="args" /></div>'
  }),
  args: {
    size: 64
  }
}

export const AllSizes: Story = {
  render: () => ({
    components: { Loading },
    template: `
      <div style="display: flex; gap: 32px; align-items: center;">
        <div style="text-align: center;">
          <Loading :size="24" />
          <p style="margin-top: 8px; font-size: 12px;">24px</p>
        </div>
        <div style="text-align: center;">
          <Loading :size="32" />
          <p style="margin-top: 8px; font-size: 12px;">32px</p>
        </div>
        <div style="text-align: center;">
          <Loading :size="48" />
          <p style="margin-top: 8px; font-size: 12px;">48px</p>
        </div>
        <div style="text-align: center;">
          <Loading :size="64" />
          <p style="margin-top: 8px; font-size: 12px;">64px</p>
        </div>
      </div>
    `
  })
}
