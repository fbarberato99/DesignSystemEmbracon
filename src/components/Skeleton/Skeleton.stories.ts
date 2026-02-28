import type { Meta, StoryObj } from '@storybook/vue3'
import Skeleton from './Skeleton.vue'

const meta: Meta<typeof Skeleton> = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    tipo: {
      control: 'select',
      options: ['circulo', 'quadrado', 'md-linha', 'sm-linha', 'paragrafo', 'lista'],
      description: 'Tipo do skeleton'
    },
    tamanho: {
      control: 'number',
      description: 'Tamanho (para círculo e quadrado)'
    }
  }
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Circulo: Story = {
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args }
    },
    template: '<div style="display: inline-flex;"><Skeleton v-bind="args" /></div>'
  }),
  args: {
    tipo: 'circulo',
    tamanho: 63
  }
}

export const Quadrado: Story = {
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args }
    },
    template: '<div style="display: inline-flex;"><Skeleton v-bind="args" /></div>'
  }),
  args: {
    tipo: 'quadrado',
    tamanho: 63
  }
}

export const LinhaMedia: Story = {
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args }
    },
    template: '<div style="max-width: 600px;"><Skeleton v-bind="args" /></div>'
  }),
  args: {
    tipo: 'md-linha'
  }
}

export const LinhaPequena: Story = {
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args }
    },
    template: '<div style="max-width: 600px;"><Skeleton v-bind="args" /></div>'
  }),
  args: {
    tipo: 'sm-linha'
  }
}

export const Paragrafo: Story = {
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args }
    },
    template: '<div style="max-width: 600px;"><Skeleton v-bind="args" /></div>'
  }),
  args: {
    tipo: 'paragrafo'
  }
}

export const Lista: Story = {
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args }
    },
    template: '<div style="max-width: 600px;"><Skeleton v-bind="args" /></div>'
  }),
  args: {
    tipo: 'lista'
  }
}

export const AllTypes: Story = {
  render: () => ({
    components: { Skeleton },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin-bottom: 8px;">Círculo</h4>
          <Skeleton tipo="circulo" :tamanho="63" />
        </div>
        <div>
          <h4 style="margin-bottom: 8px;">Quadrado</h4>
          <Skeleton tipo="quadrado" :tamanho="63" />
        </div>
        <div>
          <h4 style="margin-bottom: 8px;">Linha Média</h4>
          <Skeleton tipo="md-linha" />
        </div>
        <div>
          <h4 style="margin-bottom: 8px;">Linha Pequena</h4>
          <Skeleton tipo="sm-linha" />
        </div>
        <div>
          <h4 style="margin-bottom: 8px;">Parágrafo</h4>
          <Skeleton tipo="paragrafo" />
        </div>
        <div>
          <h4 style="margin-bottom: 8px;">Lista</h4>
          <Skeleton tipo="lista" />
        </div>
      </div>
    `
  })
}
