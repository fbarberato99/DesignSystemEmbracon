import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Tokens/Border Radius',
  tags: ['autodocs']
}

export default meta

export const AllRadius: StoryObj = {
  render: () => ({
    setup() {
      const radiuses = [
        { name: 'None', var: '--border-radius-none', value: '0' },
        { name: 'Small', var: '--border-radius-sm', value: '4px' },
        { name: 'Medium', var: '--border-radius-md', value: '8px' },
        { name: 'Large', var: '--border-radius-lg', value: '12px' },
        { name: 'Extra Large', var: '--border-radius-xl', value: '16px' },
        { name: 'Full', var: '--border-radius-full', value: '9999px' }
      ]
      return { radiuses }
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 24px;">
        <div v-for="radius in radiuses" :key="radius.var" style="display: flex; flex-direction: column; gap: 12px;">
          <div :style="{ 
            width: '100%',
            height: '100px', 
            backgroundColor: '#E31E24',
            borderRadius: radius.value
          }"></div>
          <div>
            <div style="font-weight: 600; font-size: 14px;">{{ radius.name }}</div>
            <div style="font-size: 12px; color: #666;">{{ radius.var }}</div>
            <div style="font-size: 12px; color: #999;">{{ radius.value }}</div>
          </div>
        </div>
      </div>
    `
  })
}

export const Usage: StoryObj = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin-bottom: 12px;">Botões</h4>
          <div style="display: flex; gap: 16px;">
            <button style="padding: 12px 24px; background: #E31E24; color: white; border: none; border-radius: var(--border-radius-sm); cursor: pointer;">
              Small (4px)
            </button>
            <button style="padding: 12px 24px; background: #E31E24; color: white; border: none; border-radius: var(--border-radius-md); cursor: pointer;">
              Medium (8px)
            </button>
            <button style="padding: 12px 24px; background: #E31E24; color: white; border: none; border-radius: var(--border-radius-full); cursor: pointer;">
              Full (pill)
            </button>
          </div>
        </div>
        
        <div>
          <h4 style="margin-bottom: 12px;">Cards</h4>
          <div style="display: flex; gap: 16px;">
            <div style="padding: 24px; background: #f5f5f5; border-radius: var(--border-radius-md); flex: 1;">
              Card com border-radius-md
            </div>
            <div style="padding: 24px; background: #f5f5f5; border-radius: var(--border-radius-lg); flex: 1;">
              Card com border-radius-lg
            </div>
          </div>
        </div>
      </div>
    `
  })
}
