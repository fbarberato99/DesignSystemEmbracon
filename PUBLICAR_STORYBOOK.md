# Guia de Publicação do Storybook
## Design System Embracon

**Data:** 28 de fevereiro de 2026

---

## Opções de Publicação

### 🌟 Opção 1: Chromatic (Recomendado)

Chromatic é o serviço oficial do Storybook, oferecendo hospedagem gratuita e testes visuais.

#### Vantagens:
- ✅ Hospedagem gratuita para projetos open source
- ✅ Testes visuais automáticos
- ✅ Revisão de UI
- ✅ Integração com CI/CD
- ✅ Controle de versão de design
- ✅ Colaboração em equipe

#### Passos:

1. **Criar conta no Chromatic**
   - Acesse: https://www.chromatic.com/
   - Faça login com GitHub/GitLab/Bitbucket
   - Crie um novo projeto

2. **Obter o Project Token**
   - Após criar o projeto, copie o token fornecido
   - Exemplo: `chpt_abc123def456`

3. **Instalar Chromatic**
   ```bash
   npm install --save-dev chromatic
   ```

4. **Publicar o Storybook**
   ```bash
   npx chromatic --project-token=SEU_TOKEN_AQUI
   ```

5. **Adicionar script ao package.json**
   ```json
   {
     "scripts": {
       "chromatic": "chromatic --exit-zero-on-changes"
     }
   }
   ```

6. **Publicar**
   ```bash
   npm run chromatic
   ```

#### Configuração Avançada:

Criar arquivo `chromatic.config.json`:
```json
{
  "projectToken": "SEU_TOKEN_AQUI",
  "buildScriptName": "build-storybook",
  "exitZeroOnChanges": true,
  "exitOnceUploaded": true
}
```

---

### 🚀 Opção 2: GitHub Pages (Gratuito)

Hospede seu Storybook gratuitamente no GitHub Pages.

#### Passos:

1. **Build do Storybook**
   ```bash
   npm run build-storybook
   ```
   Isso cria a pasta `storybook-static/`

2. **Instalar gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Adicionar scripts ao package.json**
   ```json
   {
     "scripts": {
       "build-storybook": "storybook build",
       "deploy-storybook": "gh-pages -d storybook-static"
     }
   }
   ```

4. **Publicar**
   ```bash
   npm run build-storybook
   npm run deploy-storybook
   ```

5. **Configurar GitHub Pages**
   - Vá em Settings > Pages no seu repositório
   - Selecione branch `gh-pages`
   - Seu Storybook estará em: `https://seu-usuario.github.io/seu-repo/`

#### Automatizar com GitHub Actions:

Criar `.github/workflows/deploy-storybook.yml`:
```yaml
name: Deploy Storybook

on:
  push:
    branches:
      - main

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm ci
        
      - name: Build Storybook
        run: npm run build-storybook
        
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./storybook-static
```

---

### ☁️ Opção 3: Vercel (Gratuito)

Hospedagem rápida e fácil com Vercel.

#### Passos:

1. **Criar conta no Vercel**
   - Acesse: https://vercel.com/
   - Faça login com GitHub

2. **Instalar Vercel CLI**
   ```bash
   npm install -g vercel
   ```

3. **Build do Storybook**
   ```bash
   npm run build-storybook
   ```

4. **Deploy**
   ```bash
   vercel --prod storybook-static
   ```

#### Ou via Interface Web:

1. Acesse https://vercel.com/new
2. Importe seu repositório
3. Configure:
   - Build Command: `npm run build-storybook`
   - Output Directory: `storybook-static`
4. Deploy!

---

### 🌐 Opção 4: Netlify (Gratuito)

Similar ao Vercel, com interface amigável.

#### Passos:

1. **Criar conta no Netlify**
   - Acesse: https://www.netlify.com/
   - Faça login com GitHub

2. **Via Interface Web:**
   - Clique em "Add new site"
   - Importe seu repositório
   - Configure:
     - Build command: `npm run build-storybook`
     - Publish directory: `storybook-static`
   - Deploy!

3. **Via CLI:**
   ```bash
   npm install -g netlify-cli
   npm run build-storybook
   netlify deploy --prod --dir=storybook-static
   ```

---

### 📦 Opção 5: Servidor Próprio

Hospede em seu próprio servidor.

#### Passos:

1. **Build do Storybook**
   ```bash
   npm run build-storybook
   ```

2. **Copiar pasta storybook-static para servidor**
   ```bash
   scp -r storybook-static/* usuario@servidor:/var/www/html/storybook/
   ```

3. **Configurar Nginx** (exemplo):
   ```nginx
   server {
       listen 80;
       server_name storybook.seudominio.com;
       
       root /var/www/html/storybook;
       index index.html;
       
       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```

---

## Comparação das Opções

| Opção | Custo | Facilidade | Testes Visuais | CI/CD | Recomendado Para |
|-------|-------|------------|----------------|-------|------------------|
| **Chromatic** | Grátis* | ⭐⭐⭐⭐⭐ | ✅ | ✅ | Equipes, projetos profissionais |
| **GitHub Pages** | Grátis | ⭐⭐⭐⭐ | ❌ | ✅ | Projetos open source |
| **Vercel** | Grátis | ⭐⭐⭐⭐⭐ | ❌ | ✅ | Deploy rápido |
| **Netlify** | Grátis | ⭐⭐⭐⭐⭐ | ❌ | ✅ | Deploy rápido |
| **Servidor Próprio** | Pago | ⭐⭐ | ❌ | Manual | Controle total |

*Chromatic: 5.000 snapshots/mês grátis

---

## Recomendação para o Projeto

### Para Desenvolvimento e Testes:
**Chromatic** - Melhor opção para:
- Testes visuais automáticos
- Revisão de mudanças de UI
- Colaboração em equipe
- Histórico de versões

### Para Documentação Pública:
**GitHub Pages** - Melhor opção para:
- Documentação open source
- Sem custos
- Fácil manutenção
- Integração com GitHub

---

## Configuração Recomendada (Ambos)

Use Chromatic para desenvolvimento e GitHub Pages para documentação pública:

### package.json
```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build",
    "deploy-storybook": "gh-pages -d storybook-static",
    "chromatic": "chromatic --exit-zero-on-changes"
  }
}
```

### Workflow Sugerido:
1. Desenvolva localmente: `npm run storybook`
2. Teste mudanças: `npm run chromatic`
3. Publique documentação: `npm run build-storybook && npm run deploy-storybook`

---

## Próximos Passos

1. **Escolha a opção de publicação**
2. **Configure o ambiente escolhido**
3. **Faça o primeiro deploy**
4. **Configure CI/CD** (opcional mas recomendado)
5. **Compartilhe o link** com a equipe

---

## Links Úteis

- [Chromatic Docs](https://www.chromatic.com/docs/)
- [Storybook Deploy Docs](https://storybook.js.org/docs/sharing/publish-storybook)
- [GitHub Pages](https://pages.github.com/)
- [Vercel Docs](https://vercel.com/docs)
- [Netlify Docs](https://docs.netlify.com/)

---

**Documento preparado por:** Kiro AI Assistant  
**Data:** 28 de fevereiro de 2026
