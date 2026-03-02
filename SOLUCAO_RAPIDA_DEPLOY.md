# ⚡ Solução Rápida - Deploy com Erro 403

## 🎯 Problema
O deploy está falhando com erro 403 (sem permissão).

## ✅ Solução em 3 Passos

### 1️⃣ Configurar GitHub Pages

Acesse: https://github.com/fbarberato99/DesignSystemEmbracon/settings/pages

Na seção **Build and deployment**:
- **Source**: Selecione **"GitHub Actions"**

### 2️⃣ Configurar Permissões

Acesse: https://github.com/fbarberato99/DesignSystemEmbracon/settings/actions

Role até **Workflow permissions** e selecione:
- ✅ **Read and write permissions**
- ✅ **Allow GitHub Actions to create and approve pull requests**

Clique em **Save**

### 3️⃣ Re-executar o Deploy

Execute no terminal:

```bash
git commit --allow-empty -m "chore: trigger deploy"
git push
```

OU

Acesse: https://github.com/fbarberato99/DesignSystemEmbracon/actions
- Clique no workflow que falhou
- Clique em **"Re-run all jobs"**

---

## ⏱️ Aguarde 2-3 minutos

Após configurar, aguarde o workflow concluir.

## 🎉 Resultado

Seu Storybook estará em:
**https://fbarberato99.github.io/DesignSystemEmbracon/**

---

## ❓ Ainda com problemas?

Veja o guia completo: `CONFIGURAR_GITHUB_PAGES.md`
