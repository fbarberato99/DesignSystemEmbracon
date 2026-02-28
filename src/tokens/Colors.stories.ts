import type { Meta, StoryObj } from '@storybook/vue3'
import colorsData from './colors.json'

const meta: Meta = {
  title: 'Tokens/Colors',
  tags: ['autodocs']
}

export default meta

export const Primary: StoryObj = {
  render: () => ({
    setup() {
      const colors = [
        { name: 'Primary Red', var: '--colors-primary-red', value: colorsData.colors.primary.red },
        { name: 'Primary Red Dark', var: '--colors-primary-red-dark', value: colorsData.colors.primary['red-dark'] },
        { name: 'Primary Red Light', var: '--colors-primary-red-light', value: colorsData.colors.primary['red-light'] }
      ]
      return { colors }
    },
    template: `
      <div>
        <h3 style="margin-bottom: 16px;">Cores Primárias</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
          <div v-for="color in colors" :key="color.var" style="display: flex; flex-direction: column; gap: 8px;">
            <div :style="{ 
              backgroundColor: color.value, 
              height: '100px', 
              borderRadius: '8px',
              border: '1px solid #e0e0e0'
            }"></div>
            <div>
              <div style="font-weight: 600; font-size: 14px;">{{ color.name }}</div>
              <div style="font-size: 12px; color: #666;">{{ color.var }}</div>
              <div style="font-size: 12px; color: #999; font-family: monospace;">{{ color.value }}</div>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const Secondary: StoryObj = {
  render: () => ({
    setup() {
      const colors = [
        { name: 'White', var: '--colors-secondary-white', value: colorsData.colors.secondary.white },
        { name: 'Black', var: '--colors-secondary-black', value: colorsData.colors.secondary.black },
        { name: 'Gray Graphite', var: '--colors-secondary-gray-graphite', value: colorsData.colors.secondary['gray-graphite'] }
      ]
      return { colors }
    },
    template: `
      <div>
        <h3 style="margin-bottom: 16px;">Cores Secundárias</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
          <div v-for="color in colors" :key="color.var" style="display: flex; flex-direction: column; gap: 8px;">
            <div :style="{ 
              backgroundColor: color.value, 
              height: '100px', 
              borderRadius: '8px',
              border: '1px solid #e0e0e0'
            }"></div>
            <div>
              <div style="font-weight: 600; font-size: 14px;">{{ color.name }}</div>
              <div style="font-size: 12px; color: #666;">{{ color.var }}</div>
              <div style="font-size: 12px; color: #999; font-family: monospace;">{{ color.value }}</div>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const Gray: StoryObj = {
  render: () => ({
    setup() {
      const colors = [
        { name: 'Gray 10', var: '--colors-gray-10', value: colorsData.colors.gray['10'] },
        { name: 'Gray 20', var: '--colors-gray-20', value: colorsData.colors.gray['20'] },
        { name: 'Gray 30', var: '--colors-gray-30', value: colorsData.colors.gray['30'] },
        { name: 'Gray 40', var: '--colors-gray-40', value: colorsData.colors.gray['40'] },
        { name: 'Gray 50', var: '--colors-gray-50', value: colorsData.colors.gray['50'] },
        { name: 'Gray 60', var: '--colors-gray-60', value: colorsData.colors.gray['60'] },
        { name: 'Gray 70', var: '--colors-gray-70', value: colorsData.colors.gray['70'] },
        { name: 'Gray 80', var: '--colors-gray-80', value: colorsData.colors.gray['80'] },
        { name: 'Gray 90', var: '--colors-gray-90', value: colorsData.colors.gray['90'] },
        { name: 'Gray 100', var: '--colors-gray-100', value: colorsData.colors.gray['100'] }
      ]
      return { colors }
    },
    template: `
      <div>
        <h3 style="margin-bottom: 16px;">Escala de Cinza</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 16px;">
          <div v-for="color in colors" :key="color.var" style="display: flex; flex-direction: column; gap: 8px;">
            <div :style="{ 
              backgroundColor: color.value, 
              height: '80px', 
              borderRadius: '8px',
              border: '1px solid #e0e0e0'
            }"></div>
            <div>
              <div style="font-weight: 600; font-size: 14px;">{{ color.name }}</div>
              <div style="font-size: 11px; color: #666;">{{ color.var }}</div>
              <div style="font-size: 11px; color: #999; font-family: monospace;">{{ color.value }}</div>
            </div>
          </div>
        </div>
      </div>
    `
  })
}

export const Feedback: StoryObj = {
  render: () => ({
    setup() {
      const colors = [
        { name: 'Success', var: '--colors-feedback-success', value: colorsData.colors.feedback.success },
        { name: 'Error', var: '--colors-feedback-error', value: colorsData.colors.feedback.error },
        { name: 'Warning', var: '--colors-feedback-warning', value: colorsData.colors.feedback.warning },
        { name: 'Info', var: '--colors-feedback-info', value: colorsData.colors.feedback.info }
      ]
      return { colors }
    },
    template: `
      <div>
        <h3 style="margin-bottom: 16px;">Cores de Feedback</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
          <div v-for="color in colors" :key="color.var" style="display: flex; flex-direction: column; gap: 8px;">
            <div :style="{ 
              backgroundColor: color.value, 
              height: '100px', 
              borderRadius: '8px',
              border: '1px solid #e0e0e0'
            }"></div>
            <div>
              <div style="font-weight: 600; font-size: 14px;">{{ color.name }}</div>
              <div style="font-size: 12px; color: #666;">{{ color.var }}</div>
              <div style="font-size: 12px; color: #999; font-family: monospace;">{{ color.value }}</div>
            </div>
          </div>
        </div>
      </div>
    `
  })
}
