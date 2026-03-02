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
      description: 'Obrigatório. Tipo do skeleton: \'circulo\', \'quadrado\', \'md-linha\', \'sm-linha\', \'lista\', \'paragrafo\'',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '-' }
      }
    },
    tamanho: {
      control: 'number',
      description: 'Tamanho em pixels para elementos circulares ou quadrados (quando largura/altura não especificadas)',
      table: {
        type: { summary: 'Number/String' },
        defaultValue: { summary: '63' }
      }
    },
    largura: {
      control: 'text',
      description: 'Largura customizada em pixels (para tipo \'quadrado\')',
      table: {
        type: { summary: 'Number/String' },
        defaultValue: { summary: 'null' }
      }
    },
    altura: {
      control: 'text',
      description: 'Altura customizada em pixels (para tipo \'quadrado\')',
      table: {
        type: { summary: 'Number/String' },
        defaultValue: { summary: 'null' }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Skeleton>

export const Default: Story = {
  render: (args) => ({
    components: { Skeleton },
    setup() {
      return { args }
    },
    template: '<Skeleton v-bind="args" />'
  }),
  args: {
    tipo: 'circulo',
    tamanho: 63
  }
}
