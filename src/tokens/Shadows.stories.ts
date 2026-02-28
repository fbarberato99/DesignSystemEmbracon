import type { Meta, StoryObj } from '@storybook/vue3'

const meta: Meta = {
  title: 'Tokens/Shadows',
  tags: ['autodocs']
}

export default meta

export const AllShadows: StoryObj = {
  render: () => ({
    setup() {
      const shadows = [
        { name: 'None', var: '--shadow-none', description: 'Sem sombra' },
        { name: 'Small', var: '--shadow-sm', description: 'Sombra sutil para elementos próximos' },
        { name: 'Medium', var: '--shadow-md', description: 'Sombra padrão para cards' },
        { name: 'Large', var: '--shadow-lg', description: 'Sombra para elementos elevados' },
        { name: 'Extra Large', var: '--shadow-xl', description: 'Sombra para modais e overlays' }
      ]
      return { shadows }
    },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 32px; padding: 32px;">
        <div v-for="shadow in shadows" :key="shadow.var" style="display: flex; flex-direction: column; gap: 12px;">
          <div :style="{ 
            width: '100%',
            height: '120px', 
            backgroundColor: 'white',
            borderRadius: '8px',
            boxShadow: \`var(\${shadow.var})\`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            textAlign: 'center'
          }">
            {{ shadow.name }}
          </div>
          <div>
            <div style="font-weight: 600; font-size: 14px;">{{ shadow.name }}</div>
            <div style="font-size: 12px; color: #666;">{{ shadow.var }}</div>
            <div style="font-size: 11px; color: #999; margin-top: 4px;">{{ shadow.description }}</div>
          </div>
        </div>
      </div>
    `
  })
}

export const Usage: StoryObj = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 32px; padding: 32px;">
        <div>
          <h4 style="margin-bottom: 16px;">Botões com hover</h4>
          <button style="
            padding: 12px 24px; 
            background: #E31E24; 
            color: white; 
            border: none; 
            border-radius: 8px; 
            cursor: pointer;
            box-shadow: var(--shadow-sm);
            transition: box-shadow 0.3s;
          " onmouseover="this.style.boxShadow='var(--shadow-md)'" onmouseout="this.style.boxShadow='var(--shadow-sm)'">
            Hover para ver sombra
          </button>
        </div>
        
        <div>
          <h4 style="margin-bottom: 16px;">Cards com diferentes elevações</h4>
          <div style="display: flex; gap: 24px;">
            <div style="padding: 24px; background: white; border-radius: 8px; box-shadow: var(--shadow-sm); flex: 1;">
              Card com shadow-sm
            </div>
            <div style="padding: 24px; background: white; border-radius: 8px; box-shadow: var(--shadow-md); flex: 1;">
              Card com shadow-md
            </div>
            <div style="padding: 24px; background: white; border-radius: 8px; box-shadow: var(--shadow-lg); flex: 1;">
              Card com shadow-lg
            </div>
          </div>
        </div>
      </div>
    `
  })
}
