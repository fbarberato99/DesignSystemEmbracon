# 📦 Guia: Colocar Projeto no GitHub

## Passo 1: Criar Repositório no GitHub

1. Acesse https://github.com/
2. Faça login na sua conta
3. Clique no botão **"+"** no canto superior direito
4. Selecione **"New repository"**
5. Preencha:
   - **Repository name**: `design-system-embracon` (ou o nome que preferir)
   - **Description**: "Design System Embracon - Biblioteca de componentes Vue 3"
   - **Visibility**: Public ou Private (sua escolha)
   - ⚠️ **NÃO marque** "Initialize this repository with a README"
6. Clique em **"Create repository"**

---

## Passo 2: Configurar Git Local

Abra o terminal na pasta do projeto e execute:

```bash
# Verificar se já tem git inicializado
git status
```

Se aparecer "fatal: not a git repository", execute:

```bash
# Inicializar git
git init

# Configurar seu nome e email (se ainda não configurou)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"
```

---

## Passo 3: Adicionar Arquivos ao Git

```bash
# Adicionar todos os arquivos
git add .

# Criar o primeiro commit
git commit -m "feat: initial commit - Design System Embracon"
```

---

## Passo 4: Conectar ao GitHub

Substitua `SEU_USUARIO` e `SEU_REPOSITORIO` pelos seus dados:

```bash
# Adicionar o repositório remoto
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git

# Renomear branch para main (se necessário)
git branch -M main

# Enviar para o GitHub
git push -u origin main
```

### Exemplo:
```bash
git remote add origin https://github.com/joaosilva/design-system-embracon.git
git branch -M main
git push -u origin main
```

---

## Passo 5: Autenticação

Quando pedir credenciais, você tem duas opções:

### Opção A: Personal Access Token (Recomendado)

1. Vá em GitHub > Settings > Developer settings > Personal access tokens > Tokens (classic)
2. Clique em "Generate new token (classic)"
3. Dê um nome: "Design System Token"
4. Marque: `repo` (acesso completo aos repositórios)
5. Clique em "Generate token"
6. **COPIE O TOKEN** (você não verá novamente!)
7. Use o token como senha quando o Git pedir

### Opção B: GitHub CLI

```bash
# Instalar GitHub CLI
winget install GitHub.cli

# Fazer login
gh auth login

# Seguir as instruções na tela
```

---

## Passo 6: Verificar Upload

1. Acesse seu repositório no GitHub
2. Você deve ver todos os arquivos
3. O README.md será exibido na página principal

---

## 🚀 Passo 7: Ativar GitHub Pages (Opcional)

Para publicar o Storybook automaticamente:

1. Vá em **Settings** > **Pages**
2. Em **Source**, selecione **"GitHub Actions"**
3. Pronto! No próximo push, o Storybook será publicado automaticamente

---

## 📝 Comandos Úteis para o Dia a Dia

### Fazer alterações e enviar:
```bash
# Ver o que mudou
git status

# Adicionar arquivos modificados
git add .

# Criar commit
git commit -m "feat: adiciona novo componente"

# Enviar para GitHub
git push
```

### Ver histórico:
```bash
git log --oneline
```

### Criar nova branch:
```bash
git checkout -b feature/novo-componente
git push -u origin feature/novo-componente
```

### Voltar para main:
```bash
git checkout main
```

---

## 🔧 Resolver Problemas Comuns

### Erro: "remote origin already exists"
```bash
git remote remove origin
git remote add origin https://github.com/SEU_USUARIO/SEU_REPOSITORIO.git
```

### Erro: "failed to push some refs"
```bash
# Puxar mudanças primeiro
git pull origin main --rebase

# Depois enviar
git push
```

### Erro: "Authentication failed"
- Use Personal Access Token ao invés de senha
- Ou use GitHub CLI: `gh auth login`

---

## 📋 Checklist Final

- [ ] Repositório criado no GitHub
- [ ] Git inicializado localmente
- [ ] Arquivos commitados
- [ ] Conectado ao repositório remoto
- [ ] Push realizado com sucesso
- [ ] Arquivos visíveis no GitHub
- [ ] GitHub Pages configurado (opcional)

---

## 🎯 Próximos Passos

Após o projeto estar no GitHub:

1. **Configurar GitHub Pages** para publicar o Storybook
2. **Adicionar colaboradores** (Settings > Collaborators)
3. **Criar issues** para tarefas futuras
4. **Configurar branch protection** (Settings > Branches)
5. **Adicionar badges** ao README (build status, etc)

---

## 📚 Recursos Úteis

- [GitHub Docs](https://docs.github.com/)
- [Git Cheat Sheet](https://education.github.com/git-cheat-sheet-education.pdf)
- [GitHub CLI](https://cli.github.com/)

---

✅ **Seu projeto estará no GitHub e pronto para colaboração!**
