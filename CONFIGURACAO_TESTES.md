# Configuração de Testes do Storybook
## Design System Embracon

**Data:** 28 de fevereiro de 2026

---

## Resumo

Este documento detalha a configuração dos testes do Storybook usando Vitest e os problemas encontrados durante a implementação.

---

## Arquivos Criados

### 1. `vitest.config.ts`
Arquivo de configuração do Vitest com suporte ao Storybook:

```typescript
import { defineConfig } from 'vitest/config';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import vue from '@vitejs/plugin-vue';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = typeof __dirname !== 'undefined' 
  ? __dirname 
  : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [
    vue(),
    storybookTest({ 
      configDir: path.join(dirname, '.storybook'),
      storybookUrl: 'http://localhost:6006',
    }),
  ],
  test: {
    name: 'storybook',
    globals: true,
    browser: {
      enabled: true,
      headless: true,
      provider: playwright,
      instances: [
        { browser: 'chromium' }
      ],
    },
    setupFiles: ['.storybook/vitest.setup.ts'],
  },
  define: {
    'process.env': {},
  },
});
```

### 2. `.storybook/vitest.setup.ts`
Arquivo de setup para os testes:

```typescript
import * as a11yAddonAnnotations from "@storybook/addon-a11y/preview";
import { setProjectAnnotations } from '@storybook/vue3';
import * as projectAnnotations from './preview';

// This is an important step to apply the right configuration when testing your stories.
// More info at: https://storybook.js.org/docs/api/portable-stories/portable-stories-vitest#setprojectannotations
setProjectAnnotations([a11yAddonAnnotations, projectAnnotations]);
```

### 3. Scripts adicionados ao `package.json`

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

---

## Dependências Instaladas

- `jsdom` - Ambiente DOM para testes
- `@types/node` - Tipos TypeScript para Node.js
- `playwright` - Browser automation (já estava instalado)
- `@vitest/browser-playwright` - Provider do Playwright para Vitest (já estava instalado)

---

## Problema Atual

### Erro: Browser Provider Incompatibilidade

```
TypeError: The browser provider options do not return a "serverFactory" function. 
Are you using the latest "@vitest/browser-playwright" package?
```

### Causa
Há uma incompatibilidade entre:
- `@storybook/addon-vitest@10.2.13`
- `vitest@4.0.18`
- `@vitest/browser-playwright@4.0.18`

O `@storybook/addon-vitest` foi projetado para versões anteriores do Vitest e ainda não foi totalmente atualizado para o Vitest 4.

---

## Soluções Alternativas

### Opção 1: Aguardar Atualização do Storybook
Aguardar que o `@storybook/addon-vitest` seja atualizado para suportar completamente o Vitest 4.

### Opção 2: Downgrade do Vitest
Fazer downgrade para Vitest 3.x que é compatível com a versão atual do addon:

```bash
npm install --save-dev vitest@^3.2.0 @vitest/browser@^3.2.0 @vitest/browser-playwright@^3.2.0
```

### Opção 3: Testes Manuais no Storybook
Usar a interface do Storybook para testes manuais de acessibilidade:
1. Abrir o Storybook: `npm run storybook`
2. Acessar http://localhost:6006
3. Usar a aba "Accessibility" para verificar cada componente

### Opção 4: Usar Playwright Test Diretamente
Criar testes E2E com Playwright Test Runner ao invés de usar o addon do Storybook.

---

## Testes de Acessibilidade Disponíveis no Storybook

O Storybook já está configurado com o `@storybook/addon-a11y` que fornece:

- ✅ Verificação automática de acessibilidade em cada story
- ✅ Relatórios de violações WCAG
- ✅ Sugestões de correção
- ✅ Testes visuais de contraste
- ✅ Verificação de estrutura semântica

### Como Usar:
1. Abra o Storybook: `npm run storybook`
2. Navegue até qualquer componente
3. Clique na aba "Accessibility" no painel inferior
4. Veja as violações e avisos
5. Clique em cada item para ver detalhes e sugestões

---

## Próximos Passos Recomendados

### Curto Prazo:
1. **Usar testes manuais no Storybook** com o addon de acessibilidade
2. **Documentar os resultados** dos testes manuais
3. **Criar checklist** de acessibilidade para cada componente

### Médio Prazo:
1. **Monitorar atualizações** do `@storybook/addon-vitest`
2. **Considerar downgrade** do Vitest se testes automatizados forem críticos
3. **Implementar Playwright Test** para testes E2E de acessibilidade

### Longo Prazo:
1. **Integrar testes automatizados** quando o addon for atualizado
2. **Adicionar CI/CD** com testes de acessibilidade
3. **Criar relatórios automáticos** de conformidade WCAG

---

## Recursos Úteis

- [Vitest Browser Mode](https://vitest.dev/guide/browser/)
- [Storybook Test Addon](https://storybook.js.org/docs/writing-tests/test-addon)
- [Storybook Accessibility Addon](https://storybook.js.org/addons/@storybook/addon-a11y)
- [Playwright Test](https://playwright.dev/)
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Conclusão

A configuração básica dos testes foi criada, mas há uma incompatibilidade conhecida entre o Storybook addon e o Vitest 4. Enquanto isso não é resolvido, recomendo usar os testes manuais de acessibilidade disponíveis no Storybook, que já fornecem uma análise completa de conformidade WCAG.

---

**Documento preparado por:** Kiro AI Assistant  
**Data:** 28 de fevereiro de 2026
