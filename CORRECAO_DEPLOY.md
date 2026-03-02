# 🔧 Correção do Deploy no GitHub Actions

## Problema Identificado

O build do Storybook estava falando no GitHub Actions com o erro:

```
Error: Process completed with exit code 1.
To run Storybook, you need Node.js version 20.13+ or 22.12+
You are currently running Node.js v18.20.5. Please upgrade your Node.js installation.
```

## Causa

O workflow estava configurado para usar Node.js versão 18, mas o Storybook v10.2.13 requer:
- Node.js 20.13+ ou
- Node.js 22.12+

## Solução Aplicada

Atualizado o arquivo `.github/workflows/deploy-storybook.yml`:

```yaml
# ANTES:
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '18'  # ❌ Versão antiga
    cache: 'npm'

# DEPOIS:
- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: '22'  # ✅ Versão compatível
    cache: 'npm'
```

## Status

✅ **Correção aplicada e enviada para o GitHub**

O próximo build do GitHub Actions usará Node.js 22 e o deploy deve funcionar corretamente.

## Verificar o Deploy

1. Acesse: https://github.com/fbarberato99/DesignSystemEmbracon/actions
2. Aguarde o workflow "Deploy Storybook to GitHub Pages" concluir
3. Quando aparecer ✅ verde, seu Storybook estará publicado em:
   - **https://fbarberato99.github.io/DesignSystemEmbracon/**

## Tempo Estimado

O build completo leva aproximadamente 2-3 minutos.

---

## 📝 Nota sobre Versões do Node.js

### Versões Compatíveis com Storybook 10.x:
- ✅ Node.js 20.13+
- ✅ Node.js 22.12+
- ❌ Node.js 18.x (não suportado)

### Verificar sua versão local:
```bash
node --version
```

Se você estiver usando Node.js 18 localmente, considere atualizar para Node.js 22 para evitar problemas futuros.

---

**Correção aplicada em:** 28 de fevereiro de 2026  
**Commit:** fix: atualiza versão do Node.js no workflow para 22
