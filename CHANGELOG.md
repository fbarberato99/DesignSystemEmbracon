# Changelog

Todas as mudanças notáveis neste projeto serão documentadas neste arquivo.

O formato é baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/),
e este projeto adere ao [Semantic Versioning](https://semver.org/lang/pt-BR/).

## [1.0.0] - 2024-01-XX

### Adicionado

#### Componentes
- `Accordion` - Componente de acordeão expansível
- `AttentionCard` - Card de atenção
- `Breadcrumbs` - Navegação breadcrumb
- `Button` - Botão base com variantes (Primary, Secondary, Tertiary, Link)
- `Checkbox` - Caixa de seleção
- `Chip` - Chip selecionável com opção de fechar
- `Drawer` - Painel lateral
- `Icon` - Componente de ícone com 50+ ícones do sistema
- `InformativeCard` - Card informativo
- `Input` - Campo de entrada com validação
- `Loading` - Indicador de carregamento
- `Pagination` - Componente de paginação
- `Radio` - Botão de rádio
- `SearchInput` - Campo de busca
- `Select` - Seletor dropdown
- `Skeleton` - Placeholder de carregamento
- `Tag` - Etiqueta de status
- `ToggleSwitch` - Interruptor on/off
- `Tooltip` - Dica de contexto
- `UploadFiles` - Upload de arquivos

#### Design Tokens
- **Cores**: Primárias, secundárias, feedback, tons de cinza (33 tokens)
- **Tipografia**: Font family, tamanhos, pesos, line-heights (17 variações)
- **Espaçamento**: Sistema de 8px (7 tokens: 8, 16, 24, 32, 40, 56, 72)
- **Border Radius**: 2 valores (5px e 16px)
- **Sombras**: 3 níveis (pequena, média, grande)
- **Transições**: 3 velocidades (rápida, normal, lenta)
- **Z-Index**: 7 camadas (dropdown, sticky, fixed, modal-backdrop, modal, popover, tooltip)

#### Funcionalidades
- Suporte completo a TypeScript
- Todos os componentes com tipos exportados
- Suporte a v-model em componentes de formulário
- Validação de formulários com regras customizáveis
- Acessibilidade (ARIA attributes) em todos os componentes
- Temas através de CSS variables
- Tree-shaking support
- Importação individual de componentes
- Plugin para instalação global

#### Documentação
- README.md completo com exemplos
- USAGE_EXAMPLES.md com exemplos detalhados de todos os componentes
- Documentação de tokens em Markdown
- Tokens em formato JSON para integração com ferramentas

### Características Técnicas
- Vue 3.4+ com Composition API
- TypeScript 5.3+
- Vite para build
- CSS Modules com variáveis CSS
- Formatos de distribuição: ES Module e UMD
- Tipos TypeScript incluídos
- Peer dependency: Vue 3.4+

[1.0.0]: https://github.com/embracon/design-system/releases/tag/v1.0.0
