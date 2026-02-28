import type { Meta, StoryObj } from '@storybook/vue3'
import Icon from './Icon.vue'

const meta: Meta<typeof Icon> = {
  title: 'Components/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'text',
      description: 'Nome do ícone'
    },
    size: {
      control: 'number',
      description: 'Tamanho do ícone em pixels'
    },
    color: {
      control: 'color',
      description: 'Cor do ícone'
    }
  }
}

export default meta
type Story = StoryObj<typeof Icon>

export const Default: Story = {
  render: (args) => ({
    components: { Icon },
    setup() {
      return { args }
    },
    template: '<div style="display: inline-flex;"><Icon v-bind="args" /></div>'
  }),
  args: {
    name: 'home',
    size: 24
  }
}

export const Sistema: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
        <div v-for="icon in icons" :key="icon" style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <Icon :name="icon" :size="32" />
          <span style="font-size: 11px; text-align: center; word-break: break-word;">{{ icon }}</span>
        </div>
      </div>
    `,
    setup() {
      const icons = [
        '3-pontos', 'acessibilidade', 'acessos', 'adicionar', 'ajuda',
        'aplicativo', 'avancar', 'avatar', 'aviso', 'cadastro',
        'calendario', 'carrinho', 'chat', 'check', 'chevron-down',
        'chevron-up', 'clips', 'compartilhar', 'configuracoes', 'copiar',
        'deslike', 'documento', 'documento-escrito', 'download', 'editar',
        'email', 'enquadramento', 'enviar', 'excluir', 'favoritar',
        'fechar', 'filtrar', 'foto', 'gride', 'home',
        'imprimir', 'informacao', 'like', 'link', 'lista',
        'login', 'logout', 'manual', 'menu', 'mensagem',
        'notificacao', 'notificacao-alerta', 'pesquisar', 'proibido', 'qrcode',
        'relogio', 'restart', 'seguranca', 'senha', 'senha-off',
        'senha-on', 'seta-para-baixo', 'seta-para-cima', 'site', 'sol',
        'telefone', 'upload', 'voltar'
      ]
      return { icons }
    }
  })
}

export const Modalidades: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 16px;">
        <div v-for="icon in icons" :key="icon" style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <Icon :name="icon" :size="48" />
          <span style="font-size: 12px; text-align: center;">{{ icon }}</span>
        </div>
      </div>
    `,
    setup() {
      const icons = ['carros', 'imoveis', 'motos', 'pesados', 'servicos-modalidade']
      return { icons }
    }
  })
}

export const Servicos: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 16px;">
        <div v-for="icon in icons" :key="icon" style="display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 12px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <Icon :name="icon" :size="32" />
          <span style="font-size: 11px; text-align: center; word-break: break-word;">{{ icon }}</span>
        </div>
      </div>
    `,
    setup() {
      const icons = [
        'assembleia-servico', 'boleto-servico', 'canal-de-atendimento',
        'carreiras', 'cartao-servico', 'comissao', 'consorcio-servico',
        'contemplacao-servico', 'cota-servico', 'detalhes-da-cota',
        'devolucao', 'filiais', 'governanca', 'grupo', 'pagamento-servico',
        'parceiros', 'quem-somos', 'resultado-assembleia', 'simulacao'
      ]
      return { icons }
    }
  })
}

export const Sizes: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <div style="text-align: center;">
          <Icon name="home" :size="16" />
          <p style="margin-top: 8px; font-size: 12px;">16px</p>
        </div>
        <div style="text-align: center;">
          <Icon name="home" :size="24" />
          <p style="margin-top: 8px; font-size: 12px;">24px</p>
        </div>
        <div style="text-align: center;">
          <Icon name="home" :size="32" />
          <p style="margin-top: 8px; font-size: 12px;">32px</p>
        </div>
        <div style="text-align: center;">
          <Icon name="home" :size="48" />
          <p style="margin-top: 8px; font-size: 12px;">48px</p>
        </div>
        <div style="text-align: center;">
          <Icon name="home" :size="64" />
          <p style="margin-top: 8px; font-size: 12px;">64px</p>
        </div>
      </div>
    `
  })
}

export const Colors: Story = {
  render: () => ({
    components: { Icon },
    template: `
      <div style="display: flex; gap: 24px; align-items: center;">
        <Icon name="home" :size="32" color="#E31E24" />
        <Icon name="home" :size="32" color="#00A859" />
        <Icon name="home" :size="32" color="#0066CC" />
        <Icon name="home" :size="32" color="#666666" />
        <Icon name="home" :size="32" color="#000000" />
      </div>
    `
  })
}
