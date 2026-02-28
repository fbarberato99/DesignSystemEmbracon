# Embracon Design System

Biblioteca de componentes Vue 3 com TypeScript para o Design System da Embracon.

## 🎨 Visualizar Componentes

Para visualizar todos os componentes em ação:

```bash
npm install
npm run dev
```

Acesse `http://localhost:5173` para ver a página de demonstração completa.

Veja [DEMO.md](./DEMO.md) para mais detalhes sobre a visualização.

## 📦 Instalação

```bash
npm install @embracon/design-system
```

ou

```bash
yarn add @embracon/design-system
```

## 🚀 Uso

### Instalação Global (Recomendado)

Registre todos os componentes globalmente no seu projeto:

```typescript
import { createApp } from 'vue'
import EmbraconDesignSystem from '@embracon/design-system'
import '@embracon/design-system/style.css'
import App from './App.vue'

const app = createApp(App)
app.use(EmbraconDesignSystem)
app.mount('#app')
```

Agora você pode usar os componentes em qualquer lugar:

```vue
<template>
  <div>
    <PrimaryButton size="48px">Clique aqui</PrimaryButton>
    <Input label="Nome" placeholder="Digite seu nome" />
  </div>
</template>
```

### Importação Individual

Importe apenas os componentes que você precisa:

```vue
<script setup lang="ts">
import { PrimaryButton, Input } from '@embracon/design-system'
import '@embracon/design-system/style.css'
</script>

<template>
  <div>
    <PrimaryButton size="48px">Clique aqui</PrimaryButton>
    <Input label="Nome" placeholder="Digite seu nome" />
  </div>
</template>
```

## 📚 Componentes Disponíveis

### Botões
- `Button` - Botão base com variantes
- `PrimaryButton` - Botão primário
- `SecondaryButton` - Botão secundário
- `TertiaryButton` - Botão terciário
- `LinkButton` - Botão estilo link

### Formulários
- `Input` - Campo de entrada de texto
- `SearchInput` - Campo de busca
- `Checkbox` - Caixa de seleção
- `Radio` - Botão de rádio
- `Select` - Seletor dropdown
- `ToggleSwitch` - Interruptor on/off
- `UploadFiles` - Upload de arquivos

### Navegação
- `Breadcrumbs` - Navegação breadcrumb
- `Pagination` - Paginação

### Feedback
- `Tag` - Etiqueta de status
- `Chip` - Chip selecionável
- `Tooltip` - Dica de contexto
- `Loading` - Indicador de carregamento
- `Skeleton` - Placeholder de carregamento

### Layout
- `Accordion` - Acordeão expansível
- `Drawer` - Painel lateral
- `AttentionCard` - Card de atenção
- `InformativeCard` - Card informativo

### Ícones
- `Icon` - Componente de ícone com 50+ ícones

## 🎨 Design Tokens

O Design System inclui tokens de design para:

- **Cores**: Primárias, secundárias, feedback, tons de cinza
- **Tipografia**: Font family, tamanhos, pesos, line-heights
- **Espaçamento**: Sistema de 8px (8, 16, 24, 32, 40, 56, 72)
- **Border Radius**: Pequeno (5px) e grande (16px)
- **Sombras**: Pequena, média e grande
- **Transições**: Rápida, normal e lenta
- **Z-Index**: Camadas de sobreposição

### Usando Tokens CSS

Todos os tokens estão disponíveis como variáveis CSS:

```css
.my-component {
  /* Cores */
  color: var(--colors-primary-red);
  background: var(--colors-secondary-white);
  
  /* Tipografia */
  font-family: var(--typography-font-family);
  font-size: var(--typography-text-body-size);
  
  /* Espaçamento */
  padding: var(--spacing-16);
  margin: var(--spacing-24);
  
  /* Border Radius */
  border-radius: var(--border-radius-sm);
  
  /* Sombras */
  box-shadow: var(--shadow-md);
  
  /* Transições */
  transition: all var(--transition-normal);
}
```

## 📖 Exemplos de Uso

### Botões

```vue
<template>
  <!-- Botão Primário -->
  <PrimaryButton size="48px" @click="handleClick">
    Confirmar
  </PrimaryButton>
  
  <!-- Botão Secundário -->
  <SecondaryButton size="44px" :disabled="isLoading">
    Cancelar
  </SecondaryButton>
  
  <!-- Botão com ícones -->
  <PrimaryButton size="48px">
    <template #icon-left>
      <Icon name="check" />
    </template>
    Salvar
  </PrimaryButton>
</template>
```

### Input com Validação

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Input } from '@embracon/design-system'
import type { ValidationRule } from '@embracon/design-system'

const email = ref('')

const emailRule: ValidationRule = (value) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(value) || 'Email inválido'
}

const requiredRule: ValidationRule = (value) => {
  return !!value || 'Campo obrigatório'
}
</script>

<template>
  <Input
    v-model="email"
    type="email"
    label="Email"
    placeholder="seu@email.com"
    :rules="[requiredRule, emailRule]"
    :real-time-validation="true"
  />
</template>
```

### Accordion

```vue
<template>
  <Accordion
    titulo="Título do Accordion"
    conteudo="Conteúdo que será expandido ao clicar"
    @toggle="handleToggle"
  />
  
  <!-- Com conteúdo customizado -->
  <Accordion titulo="Conteúdo Customizado">
    <p>Você pode colocar qualquer HTML aqui</p>
    <ul>
      <li>Item 1</li>
      <li>Item 2</li>
    </ul>
  </Accordion>
</template>
```

### Select

```vue
<script setup lang="ts">
import { ref } from 'vue'
import type { SelectOption } from '@embracon/design-system'

const selectedValue = ref('')

const options: SelectOption[] = [
  { value: '1', label: 'Opção 1' },
  { value: '2', label: 'Opção 2' },
  { value: '3', label: 'Opção 3' },
]
</script>

<template>
  <Select
    v-model="selectedValue"
    label="Selecione uma opção"
    :options="options"
    placeholder="Escolha..."
  />
</template>
```

## 🎯 TypeScript

Todos os componentes incluem tipos TypeScript completos:

```typescript
import type {
  ButtonProps,
  InputProps,
  SelectOption,
  ValidationRule,
  IconName,
} from '@embracon/design-system'
```

## 🔧 Requisitos

- Vue 3.4.0 ou superior
- Node.js 16 ou superior

## 📄 Licença

MIT

## 🤝 Contribuindo

Contribuições são bem-vindas! Por favor, abra uma issue ou pull request.

## 📞 Suporte

Para dúvidas ou problemas, abra uma issue no repositório.
