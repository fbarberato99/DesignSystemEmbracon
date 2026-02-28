import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Tokens/Spacing',
  tags: ['autodocs']
}

export default meta

export const AllSpacings: StoryObj = {
  render: () => ({
    setup() {
      const spacings = [
        { name: '4px', var: '--spacing-4', value: '4px' },
        { name: '8px', var: '--spacing-8', value: '8px' },
        { name: '12px', var: '--spacing-12', value: '12px' },
        { name: '16px', var: '--spacing-16', value: '16px' },
        { name: '20px', var: '--spacing-20', value: '20px' },
        { name: '24px', var: '--spacing-24', value: '24px' },
        { name: '32px', var: '--spacing-32', value: '32px' },
        { name: '40px', var: '--spacing-40', value: '40px' },
        { name: '48px', var: '--spacing-48', value: '48px' },
        { name: '56px', var: '--spacing-56', value: '56px' },
        { name: '64px', var: '--spacing-64', value: '64px' }
      ]
      return { spacings }
    },
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <div v-for="spacing in spacings" :key="spacing.var" style="display: flex; align-items: center; gap: 16px;">
          <div style="width: 100px; font-size: 14px; font-weight: 600;">{{ spacing.name }}</div>
          <div :style="{ 
            width: spacing.value, 
            height: '40px', 
            backgroundColor: '#E31E24',
            borderRadius: '4px'
          }"></div>
          <code style="font-size: 12px; color: #666;">{{ spacing.var }}</code>
        </div>
      </div>
    `
  })
}

export const Usage: StoryObj = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin-bottom: 16px;">Exemplo de uso - Padding</h3>
          <div style="background: #f5f5f5; padding: var(--spacing-24); border-radius: 8px;">
            <div style="background: white; padding: var(--spacing-16); border-radius: 4px;">
              Conteúdo com padding de 16px
            </div>
          </div>
          <code style="font-size: 12px; color: #666; display: block; margin-top: 8px;">
            padding: var(--spacing-16)
          </code>
        </div>
        
        <div>
          <h3 style="margin-bottom: 16px;">Exemplo de uso - Gap</h3>
          <div style="display: flex; gap: var(--spacing-16); background: #f5f5f5; padding: var(--spacing-24); border-radius: 8px;">
            <div style="background: white; padding: var(--spacing-16); border-radius: 4px; flex: 1;">Item 1</div>
            <div style="background: white; padding: var(--spacing-16); border-radius: 4px; flex: 1;">Item 2</div>
            <div style="background: white; padding: var(--spacing-16); border-radius: 4px; flex: 1;">Item 3</div>
          </div>
          <code style="font-size: 12px; color: #666; display: block; margin-top: 8px;">
            gap: var(--spacing-16)
          </code>
        </div>
      </div>
    `
  })
}
