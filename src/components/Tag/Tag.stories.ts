import type { Meta, StoryObj } from '@storybook/vue3'
import Tag from './Tag.vue'

const meta: Meta<typeof Tag> = {
  title: 'Components/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    variante: {
      control: 'select',
      options: ['sucesso', 'erro', 'atencao', 'info'],
      description: 'Variante visual da tag'
    },
    texto: {
      control: 'text',
      description: 'Texto da tag'
    },
    leftIcon: {
      control: 'text',
      description: 'Nome do ícone à esquerda (ex: check, aviso, informacao)'
    },
    rightIcon: {
      control: 'text',
      description: 'Nome do ícone à direita (ex: check, aviso, informacao)'
    }
  }
}

export default meta
type Story = StoryObj<typeof Tag>

export const Sucesso: Story = {
  render: (args) => ({
    components: { Tag },
    setup() {
      return { args }
    },
    template: '<div style="display: inline-flex;"><Tag v-bind="args" /></div>'
  }),
  args: {
    variante: 'sucesso',
    texto: 'Aprovado'
  }
}

export const Erro: Story = {
  render: (args) => ({
    components: { Tag },
    setup() {
      return { args }
    },
    template: '<div style="display: inline-flex;"><Tag v-bind="args" /></div>'
  }),
  args: {
    variante: 'erro',
    texto: 'Rejeitado'
  }
}

export const Atencao: Story = {
  render: (args) => ({
    components: { Tag },
    setup() {
      return { args }
    },
    template: '<div style="display: inline-flex;"><Tag v-bind="args" /></div>'
  }),
  args: {
    variante: 'atencao',
    texto: 'Pendente'
  }
}

export const Info: Story = {
  render: (args) => ({
    components: { Tag },
    setup() {
      return { args }
    },
    template: '<div style="display: inline-flex;"><Tag v-bind="args" /></div>'
  }),
  args: {
    variante: 'info',
    texto: 'Informação'
  }
}

export const AllVariants: Story = {
  render: () => ({
    components: { Tag },
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Tag variante="sucesso" texto="Sucesso" />
        <Tag variante="erro" texto="Erro" />
        <Tag variante="atencao" texto="Atenção" />
        <Tag variante="info" texto="Info" />
      </div>
    `
  })
}
