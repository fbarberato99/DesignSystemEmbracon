# ⚡ Guia Rápido: Novo Repositório

## 🎯 Objetivo
Apagar o repositório antigo e criar um novo do zero.

---

## 📝 Passo a Passo

### 1️⃣ Apagar Repositório Antigo (GitHub)

1. Acesse: https://github.com/fbarberato99/DesignSystemEmbracon/settings
2. Role até o final
3. Clique em **"Delete this repository"**
4. Digite: `fbarberato99/DesignSystemEmbracon`
5. Confirme

### 2️⃣ Criar Novo Repositório (GitHub)

1. Acesse: https://github.com/new
2. Nome: `design-system-embracon` (ou outro)
3. Visibilidade: **Public**
4. ⚠️ NÃO marque "Initialize with README"
5. Clique em **"Create repository"**
6. **Copie a URL** que aparece (exemplo: `https://github.com/fbarberato99/design-system-embracon.git`)

### 3️⃣ Conectar Projeto Local (Terminal)

#### Opção A: Usar Script Automatizado (Recomendado)

```powershell
.\setup-novo-repositorio.ps1 "https://github.com/fbarberato99/design-system-embracon.git"
```

#### Opção B: Comandos Manuais

```bash
# Remover repositório antigo
git remote remove origin

# Adicionar novo repositório (substitua pela sua URL)
git remote add origin https://github.com/fbarberato99/design-system-embracon.git

# Enviar código
git push -u origin main
```

### 4️⃣ Configurar GitHub Pages

1. Acesse: https://github.com/fbarberato99/design-system-embracon/settings/pages
2. **Source**: Selecione **"GitHub Actions"**

### 5️⃣ Configurar Permissões

1. Acesse: https://github.com/fbarberato99/design-system-embracon/settings/actions
2. **Workflow permissions**: Selecione **"Read and write permissions"**
3. Marque: ✅ **"Allow GitHub Actions to create and approve pull requests"**
4. Clique em **"Save"**

---

## ✅ Pronto!

Aguarde 2-3 minutos e seu Storybook estará em:
**https://fbarberato99.github.io/design-system-embracon/**

---

## 📚 Documentação Completa

- `CRIAR_NOVO_REPOSITORIO.md` - Guia detalhado
- `setup-novo-repositorio.ps1` - Script automatizado (Windows)
- `setup-novo-repositorio.sh` - Script automatizado (Linux/Mac)

---

## 🆘 Precisa de Ajuda?

Veja o guia completo: `CRIAR_NOVO_REPOSITORIO.md`
