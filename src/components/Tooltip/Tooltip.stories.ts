import type { Meta, StoryObj } from '@storybook/vue3'
import Tooltip from './Tooltip.vue'
import PrimaryButton from '../Button/PrimaryButton.vue'

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    conteudo: {
      control: 'text',
      description: 'Conteúdo do tooltip'
    },
    posicao: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posição do tooltip'
    }
  }
}

export default meta
type Story = StoryObj<typeof Tooltip>

export const Top: Story = {
  render: (args) => ({
    components: { Tooltip, PrimaryButton },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 100px; display: flex; justify-content: center;">
        <Tooltip v-bind="args">
          <template #icon>
            <PrimaryButton size="40px">Hover aqui</PrimaryButton>
          </template>
        </Tooltip>
      </div>
    `
  }),
  args: {
    conteudo: 'Dica útil no topo',
    posicao: 'top'
  }
}

export const Bottom: Story = {
  render: (args) => ({
    components: { Tooltip, PrimaryButton },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 100px; display: flex; justify-content: center;">
        <Tooltip v-bind="args">
          <template #icon>
            <PrimaryButton size="40px">Hover aqui</PrimaryButton>
          </template>
        </Tooltip>
      </div>
    `
  }),
  args: {
    conteudo: 'Dica útil embaixo',
    posicao: 'bottom'
  }
}

export const Left: Story = {
  render: (args) => ({
    components: { Tooltip, PrimaryButton },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 100px; display: flex; justify-content: center;">
        <Tooltip v-bind="args">
          <template #icon>
            <PrimaryButton size="40px">Hover aqui</PrimaryButton>
          </template>
        </Tooltip>
      </div>
    `
  }),
  args: {
    conteudo: 'Dica à esquerda',
    posicao: 'left'
  }
}

export const Right: Story = {
  render: (args) => ({
    components: { Tooltip, PrimaryButton },
    setup() {
      return { args }
    },
    template: `
      <div style="padding: 100px; display: flex; justify-content: center;">
        <Tooltip v-bind="args">
          <template #icon>
            <PrimaryButton size="40px">Hover aqui</PrimaryButton>
          </template>
        </Tooltip>
      </div>
    `
  }),
  args: {
    conteudo: 'Dica à direita',
    posicao: 'right'
  }
}
