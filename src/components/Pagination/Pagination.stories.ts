import type { Meta, StoryObj } from '@storybook/vue3'
import { ref } from 'vue'
import Pagination from './Pagination.vue'

const meta: Meta<typeof Pagination> = {
  title: 'Components/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    totalPages: {
      control: 'number',
      description: 'Total de páginas'
    }
  }
}

export default meta
type Story = StoryObj<typeof Pagination>

export const Default: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(1)
      return { args, currentPage }
    },
    template: '<div style="display: flex; justify-content: center;"><Pagination v-bind="args" v-model="currentPage" /></div>'
  }),
  args: {
    totalPages: 10
  }
}

export const ManyPages: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(1)
      return { args, currentPage }
    },
    template: '<div style="display: flex; justify-content: center;"><Pagination v-bind="args" v-model="currentPage" /></div>'
  }),
  args: {
    totalPages: 50
  }
}

export const FewPages: Story = {
  render: (args) => ({
    components: { Pagination },
    setup() {
      const currentPage = ref(1)
      return { args, currentPage }
    },
    template: '<div style="display: flex; justify-content: center;"><Pagination v-bind="args" v-model="currentPage" /></div>'
  }),
  args: {
    totalPages: 3
  }
}
