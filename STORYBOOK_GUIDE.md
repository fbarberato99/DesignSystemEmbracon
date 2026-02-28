# 📚 Guia do Storybook - Embracon Design System

## O que é o Storybook?

O Storybook é uma ferramenta que permite visualizar, testar e documentar todos os componentes do Design System de forma isolada e interativa.

---

## 🚀 Como Iniciar o Storybook

### Comando para rodar localmente:
```bash
npm run storybook
```

O Storybook abrirá automaticamente no navegador em: **http://localhost:6006**

---

## 📖 Estrutura das Stories

Cada componente tem um arquivo `.stories.ts` que documenta suas variações e propriedades.

### Exemplo de estrutura:
```
src/components/
├── Button/
│   ├── Button.vue
│   ├── Button.types.ts
│   └── Button.stories.ts  ← Documentação do Storybook
```

---

## 🎨 Stories Criadas

### 1. **Button** (`src/components/Button/Button.stories.ts`)
Documenta os 4 tipos de botões:
- Primary Button
- Secondary Button  
- Tertiary Button
- Link Button

**Controles disponíveis:**
- `size`: Tamanho do botão (36px, 40px, 44px, 48px)
- `disabled`: Estado desabilitado
- `iconLeft`: Ícone à esquerda
- `iconRight`: Ícone à direita

### 2. **Input** (`src/components/Input/Input.stories.ts`)
Documenta o componente de entrada de texto:
- Input padrão
- Input com erro e validação

**Controles disponíveis:**
- `label`: Texto do label
- `placeholder`: Texto placeholder
- `type`: Tipo do input (text, password, email, number)
- `disabled`: Estado desabilitado

### 3. **Icon** (`src/components/Icon/Icon.stories.ts`)
Documenta todos os ícones organizados por categoria:
- **Sistema**: 63 ícones de interface
- **Modalidades**: 5 ícones (carros, imóveis, motos, pesados, serviços)
- **Serviços**: 19 ícones de serviços Embracon

**Controles disponíveis:**
- `name`: Nome do ícone
- `size`: Tamanho em pixels
- `color`: Cor do ícone

---

## ✨ Recursos do Storybook

### 1. **Controles Interativos**
Você pode modificar as propriedades dos componentes em tempo real usando os controles na aba "Controls".

### 2. **Documentação Automática**
Cada story gera documentação automática com:
- Descrição do componente
- Lista de propriedades (props)
- Exemplos de uso
- Código fonte

### 3. **Testes de Acessibilidade**
O addon `@storybook/addon-a11y` verifica automaticamente problemas de acessibilidade em cada componente.

### 4. **Visualização Responsiva**
Teste os componentes em diferentes tamanhos de tela usando a barra de ferramentas.

---

## 📝 Como Criar Novas Stories

### Passo 1: Criar arquivo `.stories.ts`
Crie um arquivo ao lado do componente:

```typescript
import type { Meta, StoryObj } from '@storybook/vue3'
import MeuComponente from './MeuComponente.vue'

const meta: Meta<typeof MeuComponente> = {
  title: 'Components/MeuComponente',
  component: MeuComponente,
  tags: ['autodocs'],
  argTypes: {
    // Defina os controles aqui
  }
}

export default meta
type Story = StoryObj<typeof MeuComponente>

export const Default: Story = {
  args: {
    // Valores padrão
  }
}
```

### Passo 2: Adicionar variações
Crie múltiplas stories para diferentes estados:

```typescript
export const ComErro: Story = {
  args: {
    error: true,
    errorMessage: 'Campo obrigatório'
  }
}

export const Desabilitado: Story = {
  args: {
    disabled: true
  }
}
```

---

## 🏗️ Build do Storybook

Para gerar uma versão estática do Storybook (para deploy):

```bash
npm run build-storybook
```

Isso criará uma pasta `storybook-static/` com todos os arquivos HTML prontos para publicação.

---

## 🎯 Próximos Passos

### Melhorias sugeridas:
- [ ] Adicionar temas (claro/escuro)
- [ ] Criar exemplos de composição de componentes
- [ ] Adicionar testes visuais automatizados
- [ ] Documentar padrões de uso e boas práticas
- [ ] Criar templates de páginas comuns
- [ ] Adicionar animações e transições nos exemplos

---

## 🔗 Links Úteis

- [Documentação oficial do Storybook](https://storybook.js.org/docs)
- [Storybook para Vue 3](https://storybook.js.org/docs/vue/get-started/introduction)
- [Addon de Acessibilidade](https://storybook.js.org/addons/@storybook/addon-a11y)

---

## 📊 Status Atual

✅ Storybook instalado e configurado  
✅ Estilos globais importados  
✅ **TODOS os 20 componentes documentados**  
✅ **TODOS os tokens documentados** (Cores, Tipografia, Espaçamento, Sombras, Border Radius)  
✅ **100+ ícones organizados** (Sistema, Modalidades, Serviços)  
✅ Addon de acessibilidade ativo  
✅ Página de introdução criada  
✅ **Design System 100% documentado no Storybook!**

## 📋 Componentes Documentados

### Formulários (7)
- ✅ Input
- ✅ Select
- ✅ Checkbox
- ✅ Radio
- ✅ ToggleSwitch
- ✅ SearchInput
- ✅ UploadFiles

### Botões (4)
- ✅ PrimaryButton
- ✅ SecondaryButton
- ✅ TertiaryButton
- ✅ LinkButton

### Navegação (3)
- ✅ Breadcrumbs
- ✅ Pagination
- ✅ Drawer

### Feedback (5)
- ✅ Tag
- ✅ Chip
- ✅ Loading
- ✅ Skeleton
- ✅ Tooltip

### Cards (3)
- ✅ InformativeCard
- ✅ AttentionCard
- ✅ Accordion

### Mídia (1)
- ✅ Icon (100+ ícones)

## 🎨 Tokens Documentados

- ✅ Colors (Primárias, Secundárias, Feedback, Escala de Cinza)
- ✅ Typography (Headings, SubHeadings, Text, Font Weights)
- ✅ Spacing (11 valores de 4px a 64px)
- ✅ Shadows (5 níveis de elevação)
- ✅ Border Radius (6 valores)

## 📦 Total de Stories Criadas

- **23 arquivos .stories.ts** (20 componentes + 3 variações de Button)
- **5 arquivos de tokens** (Colors, Typography, Spacing, Shadows, Border Radius)
- **1 página de introdução** (Introduction.mdx)
- **Total: 29 documentações completas**
