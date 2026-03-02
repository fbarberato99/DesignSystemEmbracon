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

export const Default: Story = {
  render: (args) => ({
    components: { Tag },
    setup() {
      return { args }
    },
    template: '<Tag v-bind="args" />'
  }),
  args: {
    variante: 'sucesso',
    texto: 'Aprovado'
  }
}
