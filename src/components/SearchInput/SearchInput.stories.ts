import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import SearchInput from './SearchInput.vue'

const meta: Meta<typeof SearchInput> = {
  title: 'Components/SearchInput',
  component: SearchInput,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: 'text',
      description: 'Valor atual do campo de busca. Use v-model para binding bidirecional.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '""' }
      }
    },
    placeholder: {
      control: 'text',
      description: 'Texto exibido quando o campo está vazio, indicando o que o usuário deve buscar.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"Pesquisar"' }
      }
    },
    searchIcon: {
      control: 'text',
      description: 'Nome do ícone de pesquisa exibido à esquerda (ex: "pesquisar", "lupa"). Aceita nomes em kebab-case.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"pesquisar"' }
      }
    },
    clearIcon: {
      control: 'text',
      description: 'Nome do ícone do botão limpar exibido à direita quando há texto (ex: "fechar", "x"). Aceita nomes em kebab-case.',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '"fechar"' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Quando true, desabilita o campo impedindo digitação e interação. O componente fica com aparência esmaecida.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    onInput: {
      description: 'Evento disparado sempre que o usuário digita ou limpa o campo. Retorna o valor atual como string.',
      table: {
        type: { summary: '(value: string) => void' }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof SearchInput>

export const Default: Story = {
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<div style="max-width: 400px;"><SearchInput v-bind="args" v-model="value" /></div>'
  }),
  args: {
    placeholder: 'Buscar...'
  }
}

export const WithValue: Story = {
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const value = ref('Consórcio')
      return { args, value }
    },
    template: '<div style="max-width: 400px;"><SearchInput v-bind="args" v-model="value" /></div>'
  }),
  args: {
    placeholder: 'Buscar...'
  }
}

export const Disabled: Story = {
  render: (args) => ({
    components: { SearchInput },
    setup() {
      const value = ref('')
      return { args, value }
    },
    template: '<div style="max-width: 400px;"><SearchInput v-bind="args" v-model="value" /></div>'
  }),
  args: {
    placeholder: 'Busca desabilitada',
    disabled: true
  }
}

export const AllStates: Story = {
  render: () => ({
    components: { SearchInput },
    setup() {
      const value1 = ref('')
      const value2 = ref('Termo de busca')
      const value3 = ref('')
      return { value1, value2, value3 }
    },
    template: `
      <div style="max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
        <SearchInput v-model="value1" placeholder="Vazio" />
        <SearchInput v-model="value2" placeholder="Com valor" />
        <SearchInput v-model="value3" placeholder="Desabilitado" disabled />
      </div>
    `
  })
}
