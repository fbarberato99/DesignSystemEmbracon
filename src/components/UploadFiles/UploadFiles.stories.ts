import type { Meta, StoryObj } from '@storybook/vue3'
import UploadFiles from './UploadFiles.vue'

const meta: Meta<typeof UploadFiles> = {
  title: 'Components/UploadFiles',
  component: UploadFiles,
  tags: ['autodocs'],
  argTypes: {
    titulo: {
      control: 'text',
      description: 'Título do componente'
    },
    sizeLimit: {
      control: 'number',
      description: 'Tamanho máximo em MB'
    }
  }
}

export default meta
type Story = StoryObj<typeof UploadFiles>

export const Default: Story = {
  render: (args) => ({
    components: { UploadFiles },
    setup() {
      return { args }
    },
    template: '<UploadFiles v-bind="args" />'
  }),
  args: {
    titulo: 'Enviar documentos',
    accept: ['pdf', 'jpeg', 'png'],
    sizeLimit: 5
  }
}

export const ImagesOnly: Story = {
  render: (args) => ({
    components: { UploadFiles },
    setup() {
      return { args }
    },
    template: '<UploadFiles v-bind="args" />'
  }),
  args: {
    titulo: 'Enviar imagens',
    accept: ['jpeg', 'png', 'jpg'],
    sizeLimit: 10
  }
}

export const PDFOnly: Story = {
  render: (args) => ({
    components: { UploadFiles },
    setup() {
      return { args }
    },
    template: '<UploadFiles v-bind="args" />'
  }),
  args: {
    titulo: 'Enviar PDF',
    accept: ['pdf'],
    sizeLimit: 20
  }
}

export const AllStates: Story = {
  render: () => ({
    components: { UploadFiles },
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px; align-items: flex-start;">
        <div>
          <h4 style="margin-bottom: 12px; font-size: 14px;">Estado Neutro</h4>
          <UploadFiles titulo="Enviar documento" :accept="['pdf', 'jpeg', 'png']" :sizeLimit="5" />
        </div>
        <div>
          <h4 style="margin-bottom: 12px; font-size: 14px;">Apenas Imagens</h4>
          <UploadFiles titulo="Enviar foto" :accept="['jpeg', 'png']" :sizeLimit="10" />
        </div>
        <div>
          <h4 style="margin-bottom: 12px; font-size: 14px;">Apenas PDF</h4>
          <UploadFiles titulo="Enviar contrato" :accept="['pdf']" :sizeLimit="20" />
        </div>
      </div>
    `
  })
}
