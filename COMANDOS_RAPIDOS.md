# ⚡ Comandos Rápidos

## 🎨 Desenvolvimento

```bash
# Storybook (Recomendado)
npm run storybook

# Demo Page
npm run dev

# Build da biblioteca
npm run build
```

## 🚀 Deploy do Storybook

```bash
# GitHub Pages (Manual)
npm run build-storybook
npm run deploy-storybook

# Chromatic
npm run chromatic

# Vercel
npm run build-storybook
vercel --prod storybook-static
```

## 🧪 Testes

```bash
# Rodar testes
npm run test

# Interface de testes
npm run test:ui

# Cobertura
npm run test:coverage
```

## 📦 Build

```bash
# Build da biblioteca
npm run build

# Build do Storybook
npm run build-storybook

# Verificar tipos TypeScript
npm run type-check
```

## 🔧 Manutenção

```bash
# Instalar dependências
npm install

# Limpar e reinstalar
rm -rf node_modules package-lock.json
npm install

# Atualizar dependências
npm update
```

## 📝 Git

```bash
# Commit e push
git add .
git commit -m "feat: sua mensagem"
git push origin main

# Deploy automático acontece via GitHub Actions
```

## 🌐 URLs Locais

- **Storybook**: http://localhost:6006
- **Demo**: http://localhost:5173

## 📚 Documentação

- `PUBLICAR_STORYBOOK.md` - Guia completo de publicação
- `DEPLOY_RAPIDO.md` - Guia rápido de deploy
- `RELATORIO_ACESSIBILIDADE.md` - Análise de acessibilidade
- `RESUMO_FINAL.md` - Resumo completo do projeto
