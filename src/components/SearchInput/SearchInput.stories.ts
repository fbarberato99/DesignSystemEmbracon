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
      description: 'Texto digitado, acessível via v-model ou evento \'input\'',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '-' }
      }
    },
    placeholder: {
      control: 'text',
      description: 'Nomeia o placeholder da barra',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'Pesquisar' }
      }
    },
    searchIcon: {
      control: 'text',
      description: 'Nome do ícone de pesquisa exibido à esquerda',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: 'pesquisar' }
      }
    },
    clearIcon: {
      table: {
        disable: true
      }
    },
    disabled: {
      table: {
        disable: true
      }
    },
    // Eventos
    input: {
      description: 'Emitido ao digitar',
      table: {
        category: 'Eventos',
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
    template: '<SearchInput v-bind="args" v-model="value" />'
  }),
  args: {
    placeholder: 'Pesquisar'
  }
}
