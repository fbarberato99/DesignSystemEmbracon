import type { Meta, StoryObj } from '@storybook/vue3'
import UploadFiles from './UploadFiles.vue'

const meta: Meta<typeof UploadFiles> = {
  title: 'Components/UploadFiles',
  component: UploadFiles,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto exibido acima do campo de upload.',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '-' }
      }
    },
    titulo: {
      control: 'text',
      description: 'Nome/título do documento (usado nas mensagens e eventos).',
      table: {
        type: { summary: 'String' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o upload.',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    fileCategory: {
      control: 'text',
      description: 'Categoria de arquivo (usado na lógica de upload, ex: backend).',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '-' }
      }
    },
    accept: {
      control: 'object',
      description: 'Tipos MIME aceitos pelo upload.',
      table: {
        type: { summary: 'Array' },
        defaultValue: { summary: 'jpeg, png, pdf' }
      }
    },
    sizeLimit: {
      control: 'number',
      description: 'Tamanho máximo do arquivo em MB.',
      table: {
        type: { summary: 'Number' },
        defaultValue: { summary: '8' }
      }
    },
    wrongFileTypeMessage: {
      control: 'text',
      description: 'Mensagem customizada para tipo de arquivo inválido.',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '""' }
      }
    },
    fullWidth: {
      control: 'boolean',
      description: 'Define se o componente ocupa 100% da largura disponível.',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    tooltiptext: {
      control: 'boolean',
      description: 'Texto do tooltip exibido em \'?\'',
      table: {
        type: { summary: 'Boolean' },
        defaultValue: { summary: 'false' }
      }
    },
    tooltipPosicao: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posição do tooltip em relação ao ícone',
      table: {
        type: { summary: "'top' | 'bottom' | 'left' | 'right'" },
        defaultValue: { summary: 'top' }
      }
    },
    tooltipLargura: {
      control: 'text',
      description: 'Largura customizada do tooltip',
      table: {
        type: { summary: 'String' },
        defaultValue: { summary: '200px' }
      }
    }
  }
}

export default meta
type Story = StoryObj<typeof UploadFiles>

export const Default: Story = {
  render: (args) => ({
    components: { UploadFiles },
    setup() {
      const handleInput = (file: any) => {
        console.log('input event:', file)
      }
      return { args, handleInput }
    },
    template: '<UploadFiles v-bind="args" @input="handleInput" />'
  }),
  args: {
    titulo: 'Enviar documentos',
    accept: ['jpeg', 'png', 'pdf'],
    sizeLimit: 8
  }
}
