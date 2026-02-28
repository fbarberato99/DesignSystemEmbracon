import type { Meta, StoryObj } from '@storybook/vue3'
import Breadcrumbs from './Breadcrumbs.vue'

const meta: Meta<typeof Breadcrumbs> = {
  title: 'Components/Breadcrumbs',
  component: Breadcrumbs,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Lista de itens do breadcrumb. Cada item deve conter "label" (obrigatório) e opcionalmente "to" para links.',
      table: {
        type: { 
          summary: 'Array<{ label: string, to?: string | object }>' 
        },
        defaultValue: { summary: '[]' }
      }
    }
  },
  parameters: {
    docs: {
      description: {
        component: `
## Estrutura do items

Cada item pode conter:

- **label** (obrigatório): Texto exibido no breadcrumb
- **to** (opcional): Rota interna (usa \`<router-link>\`)
  - Pode ser uma string: \`'/produtos'\`
  - Ou um objeto: \`{ name: 'produtos', params: { id: 1 } }\`

O último item não deve ter a propriedade \`to\`, pois representa a página atual.
        `
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof Breadcrumbs>

export const Default: Story = {
  render: (args) => ({
    components: { Breadcrumbs },
    setup() {
      return { args }
    },
    template: '<Breadcrumbs v-bind="args" />'
  }),
  args: {
    items: [
      { label: 'Home', to: '/' },
      { label: 'Produtos', to: '/produtos' },
      { label: 'Detalhes' }
    ]
  }
}
