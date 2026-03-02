# 🚀 Deploy Rápido do Storybook

## Opção 1: GitHub Pages (Mais Simples)

### Passo 1: Configure o GitHub Pages no seu repositório
1. Vá em **Settings** > **Pages**
2. Em **Source**, selecione **GitHub Actions**

### Passo 2: Faça commit e push
```bash
git add .
git commit -m "feat: adiciona configuração de deploy do Storybook"
git push origin main
```

### Passo 3: Aguarde o deploy
- O GitHub Actions vai rodar automaticamente
- Acesse **Actions** no seu repositório para ver o progresso
- Quando concluir, seu Storybook estará em: `https://seu-usuario.github.io/seu-repo/`

---

## Opção 2: Deploy Manual com gh-pages

```bash
# Build do Storybook
npm run build-storybook

# Deploy para GitHub Pages
npm run deploy-storybook
```

Seu Storybook estará disponível em: `https://seu-usuario.github.io/seu-repo/`

---

## Opção 3: Chromatic (Recomendado para Equipes)

### Passo 1: Crie uma conta
1. Acesse https://www.chromatic.com/
2. Faça login com GitHub
3. Crie um novo projeto
4. Copie o Project Token

### Passo 2: Deploy
```bash
npx chromatic --project-token=SEU_TOKEN_AQUI
```

### Passo 3: Salve o token (opcional)
Adicione ao `.env`:
```
CHROMATIC_PROJECT_TOKEN=seu_token_aqui
```

E use:
```bash
npm run chromatic
```

---

## Opção 4: Vercel (Deploy em 1 minuto)

### Via CLI:
```bash
# Instalar Vercel CLI
npm install -g vercel

# Build
npm run build-storybook

# Deploy
vercel --prod storybook-static
```

### Via Interface Web:
1. Acesse https://vercel.com/new
2. Importe seu repositório
3. Configure:
   - **Build Command**: `npm run build-storybook`
   - **Output Directory**: `storybook-static`
4. Clique em **Deploy**

---

## Verificar Build Local

Antes de fazer deploy, teste localmente:

```bash
# Build
npm run build-storybook

# Servir localmente (instale serve se necessário)
npx serve storybook-static
```

Acesse: http://localhost:3000

---

## Troubleshooting

### Erro: "gh-pages not found"
```bash
npm install --save-dev gh-pages
```

### Erro: "Permission denied"
Configure as permissões do GitHub Actions:
1. Settings > Actions > General
2. Workflow permissions > Read and write permissions

### Build falha
```bash
# Limpe o cache
rm -rf node_modules package-lock.json
npm install
npm run build-storybook
```

---

## URLs Úteis

- **Documentação Completa**: Ver `PUBLICAR_STORYBOOK.md`
- **GitHub Pages**: https://pages.github.com/
- **Chromatic**: https://www.chromatic.com/
- **Vercel**: https://vercel.com/

---

✅ **Seu Storybook está pronto para ser publicado!**
