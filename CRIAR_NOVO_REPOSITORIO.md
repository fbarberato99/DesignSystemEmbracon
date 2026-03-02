# 🔄 Apagar Repositório Antigo e Criar Novo

## Parte 1: Apagar o Repositório Antigo

### Passo 1: Acessar o Repositório
1. Acesse: https://github.com/fbarberato99/DesignSystemEmbracon

### Passo 2: Ir para Settings
1. Clique em **Settings** (última aba no menu superior)

### Passo 3: Apagar o Repositório
1. Role até o final da página
2. Na seção **"Danger Zone"** (zona de perigo)
3. Clique em **"Delete this repository"**
4. Digite o nome do repositório para confirmar: `fbarberato99/DesignSystemEmbracon`
5. Clique em **"I understand the consequences, delete this repository"**

✅ Repositório apagado!

---

## Parte 2: Criar Novo Repositório

### Passo 1: Criar no GitHub
1. Acesse: https://github.com/new
2. Preencha:
   - **Repository name**: `design-system-embracon` (ou outro nome)
   - **Description**: "Design System Embracon - Biblioteca de componentes Vue 3"
   - **Visibility**: Public (recomendado para GitHub Pages gratuito)
   - ⚠️ **NÃO marque** "Initialize this repository with a README"
3. Clique em **"Create repository"**

### Passo 2: Copiar a URL do Novo Repositório
Após criar, você verá uma URL como:
```
https://github.com/fbarberato99/design-system-embracon.git
```

**Copie esta URL!**

---

## Parte 3: Conectar o Projeto Local ao Novo Repositório

### Passo 1: Remover o Repositório Antigo
Execute no terminal:

```bash
git remote remove origin
```

### Passo 2: Adicionar o Novo Repositório
Substitua pela URL que você copiou:

```bash
git remote add origin https://github.com/fbarberato99/design-system-embracon.git
```

### Passo 3: Verificar
```bash
git remote -v
```

Deve mostrar o novo repositório.

### Passo 4: Enviar para o Novo Repositório
```bash
git push -u origin main
```

Se pedir autenticação, use seu Personal Access Token.

---

## Parte 4: Configurar GitHub Pages no Novo Repositório

### Passo 1: Habilitar GitHub Pages
1. Acesse: https://github.com/fbarberato99/design-system-embracon/settings/pages
2. Em **"Source"**, selecione: **"GitHub Actions"**

### Passo 2: Configurar Permissões
1. Acesse: https://github.com/fbarberato99/design-system-embracon/settings/actions
2. Em **"Workflow permissions"**, selecione:
   - ✅ **"Read and write permissions"**
   - ✅ **"Allow GitHub Actions to create and approve pull requests"**
3. Clique em **"Save"**

### Passo 3: Aguardar o Deploy
1. Acesse: https://github.com/fbarberato99/design-system-embracon/actions
2. O workflow será executado automaticamente
3. Aguarde 2-3 minutos

---

## 🎉 Resultado Final

Seu Storybook estará publicado em:
**https://fbarberato99.github.io/design-system-embracon/**

---

## 📋 Comandos Resumidos

```bash
# 1. Remover repositório antigo
git remote remove origin

# 2. Adicionar novo repositório (substitua pela sua URL)
git remote add origin https://github.com/fbarberato99/design-system-embracon.git

# 3. Enviar código
git push -u origin main

# 4. Verificar
git remote -v
```

---

## ⚠️ Importante

- O nome do repositório pode ser diferente (você escolhe)
- A URL do Storybook será: `https://SEU_USUARIO.github.io/NOME_DO_REPOSITORIO/`
- Lembre-se de configurar as permissões do GitHub Actions!

---

## 🔧 Troubleshooting

### Erro: "remote origin already exists"
```bash
git remote remove origin
# Depois adicione novamente
```

### Erro: "Authentication failed"
Use Personal Access Token ao invés de senha:
1. GitHub > Settings > Developer settings > Personal access tokens
2. Generate new token (classic)
3. Marque: `repo`
4. Use o token como senha

---

✅ **Pronto! Seu projeto estará em um repositório novo e limpo!**
