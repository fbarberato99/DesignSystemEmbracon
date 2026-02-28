import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Drawer from './Drawer.vue'
import PrimaryButton from '../Button/PrimaryButton.vue'

const meta: Meta<typeof Drawer> = {
  title: 'Components/Drawer',
  component: Drawer,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do drawer'
    },
    contentText: {
      control: 'text',
      description: 'Texto do conteúdo'
    },
    buttonText: {
      control: 'text',
      description: 'Texto do botão'
    },
    closeButton: {
      control: 'boolean',
      description: 'Mostrar botão de fechar'
    }
  }
}

export default meta
type Story = StoryObj<typeof Drawer>

export const Default: Story = {
  render: (args) => ({
    components: { Drawer, PrimaryButton },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <div>
        <PrimaryButton size="48px" @click="isOpen = true">Abrir Drawer</PrimaryButton>
        <Drawer v-bind="args" v-model="isOpen" />
      </div>
    `
  }),
  args: {
    title: 'Título do Drawer',
    contentText: 'Conteúdo do drawer com informações importantes.',
    buttonText: 'Confirmar',
    closeButton: true
  }
}

export const WithoutCloseButton: Story = {
  render: (args) => ({
    components: { Drawer, PrimaryButton },
    setup() {
      const isOpen = ref(false)
      return { args, isOpen }
    },
    template: `
      <div>
        <PrimaryButton size="48px" @click="isOpen = true">Abrir Drawer</PrimaryButton>
        <Drawer v-bind="args" v-model="isOpen" />
      </div>
    `
  }),
  args: {
    title: 'Drawer sem botão fechar',
    contentText: 'Este drawer só pode ser fechado pelo botão de ação.',
    buttonText: 'Fechar',
    closeButton: false
  }
}
