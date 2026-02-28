# 📁 Estrutura do Projeto - Embracon Design System

Este documento explica de forma simples o que é cada pasta e arquivo do projeto.

---

## 🎯 O que é este projeto?

Este é o **Design System da Embracon** - uma biblioteca de componentes visuais prontos para usar em sites e aplicativos. Pense nele como uma "caixa de ferramentas" com botões, formulários, ícones e outros elementos visuais que seguem o padrão visual da Embracon.

---

## 📂 Estrutura Principal

### **src/** - Código Fonte (O coração do projeto)
Aqui fica todo o código dos componentes e estilos.

#### **src/components/** - Componentes Visuais
Cada pasta aqui é um componente diferente que pode ser usado nos sites:
- `Button/` - Botões (Primary, Secondary, Tertiary, Link)
- `Input/` - Campos de texto para formulários
- `Checkbox/` - Caixinhas de seleção
- `Icon/` - Ícones organizados por categorias
- `Loading/` - Animação de carregamento
- `Pagination/` - Navegação entre páginas
- E mais 15 outros componentes...

#### **src/styles/** - Estilos Visuais (CSS)
Arquivos que definem cores, tamanhos, sombras, etc:
- `colors.css` - Todas as cores da Embracon
- `typography.css` - Fontes e tamanhos de texto
- `spacing.css` - Espaçamentos entre elementos
- `shadows.css` - Sombras dos elementos
- `border-radius.css` - Cantos arredondados
- `transitions.css` - Animações suaves
- `z-index.css` - Camadas de sobreposição

#### **src/tokens/** - Definições de Design (JSON)
Arquivos com valores exatos usados no design:
- `colors.json` - Códigos das cores (#FF0000, etc)
- `typography.json` - Tamanhos de fonte (16px, 18px, etc)
- `spacing.json` - Valores de espaçamento (8px, 16px, etc)
- `border-radius.json` - Valores de arredondamento

#### **src/index.ts** - Ponto de Entrada
Arquivo principal que exporta todos os componentes para serem usados em outros projetos.

---

### **dist/** - Versão Compilada (Pronta para usar)
Pasta gerada automaticamente com o código otimizado e pronto para ser instalado em outros projetos. **Não mexer manualmente!**

---

### **node_modules/** - Dependências
Pasta com todas as bibliotecas externas que o projeto precisa para funcionar. **Não mexer!**

---

## 📄 Arquivos de Configuração (Raiz do projeto)

### **package.json** - Informações do Projeto
Define o nome, versão, dependências e comandos do projeto.
- Nome: `@embracon/design-system`
- Versão atual: `1.0.0`
- Comandos disponíveis: `npm run build`, `npm run dev`

### **README.md** - Documentação Principal
Instruções de como instalar e usar a biblioteca.

### **CHANGELOG.md** - Histórico de Mudanças
Registro de todas as versões e o que foi alterado em cada uma.

### **vite.config.ts** - Configuração de Build
Define como o projeto é compilado e empacotado.

### **tsconfig.json** - Configuração TypeScript
Define regras de como o código TypeScript é processado.

### **.npmignore** - Arquivos Ignorados
Lista de arquivos que NÃO devem ser incluídos quando a biblioteca é publicada no npm.

---

## 🎨 Componentes Disponíveis (20+ componentes)

1. **Accordion** - Seções expansíveis
2. **AttentionCard** - Cartões de atenção/alerta
3. **Breadcrumbs** - Navegação de caminho
4. **Button** - Botões (4 variações)
5. **Checkbox** - Caixas de seleção
6. **Chip** - Etiquetas selecionáveis
7. **Drawer** - Painel lateral
8. **Icon** - Ícones (100+ ícones organizados)
9. **InformativeCard** - Cartões informativos
10. **Input** - Campos de entrada de texto
11. **Loading** - Indicador de carregamento
12. **Pagination** - Paginação
13. **Radio** - Botões de opção
14. **SearchInput** - Campo de busca
15. **Select** - Menu suspenso
16. **Skeleton** - Placeholder de carregamento
17. **Tag** - Etiquetas de status
18. **ToggleSwitch** - Interruptor liga/desliga
19. **Tooltip** - Dicas flutuantes
20. **UploadFiles** - Upload de arquivos

---

## 🎯 Como Usar Este Projeto

### Para Desenvolvedores:
1. **Instalar dependências**: `npm install`
2. **Compilar biblioteca**: `npm run build`
3. **Publicar no npm**: `npm publish`

### Para Usar em Outros Projetos:
```bash
npm install @embracon/design-system
```

```javascript
import { PrimaryButton, Input, Icon } from '@embracon/design-system'
import '@embracon/design-system/dist/style.css'
```

---

## 📊 Resumo Simples

**O que tem aqui:**
- ✅ 20+ componentes visuais prontos
- ✅ 100+ ícones organizados por categoria
- ✅ Sistema de cores e estilos padronizados
- ✅ Tudo em Vue 3 + TypeScript

**Para que serve:**
- Criar sites e aplicativos com visual consistente da Embracon
- Economizar tempo não precisando criar botões, formulários, etc do zero
- Garantir que todos os projetos sigam o mesmo padrão visual

**Quem usa:**
- Time de desenvolvimento da Embracon
- Projetos internos que precisam dos componentes visuais
