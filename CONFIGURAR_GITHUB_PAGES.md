# 🔧 Configurar GitHub Pages - Passo a Passo

## Erro Atual

```
Error: Error: Failed to create deployment (status: 403) with build version 1ec37c5498b1cd8b21af1d8b7439f0b8d8891925.
Request ID FHBR:2BKBR0:aD24B021:C2M4F70:690A5B1B
Ensure GitHub Pages has been enabled: https://github.com/repositories/design-system-embracon/settings/pages
```

## Causa

O GitHub Actions não tem permissão para fazer deploy no GitHub Pages porque:
1. O GitHub Pages não está habilitado no repositório, OU
2. As permissões do workflow não estão configuradas corretamente

## ✅ Solução: Configurar GitHub Pages

### Passo 1: Acessar Configurações do Repositório

1. Acesse seu repositório: https://github.com/fbarberato99/DesignSystemEmbracon
2. Clique em **Settings** (Configurações)
3. No menu lateral esquerdo, clique em **Pages**

### Passo 2: Configurar Source (Fonte)

Na seção **Build and deployment**:

1. Em **Source**, selecione: **GitHub Actions**
   - ⚠️ NÃO selecione "Deploy from a branch"
   - ✅ Selecione "GitHub Actions"

2. Clique em **Save** (se houver botão)

### Passo 3: Configurar Permissões do Workflow

1. Ainda em **Settings**, vá em **Actions** > **General**
2. Role até **Workflow permissions**
3. Selecione: **Read and write permissions**
4. Marque: ✅ **Allow GitHub Actions to create and approve pull requests**
5. Clique em **Save**

### Passo 4: Re-executar o Workflow

Agora você tem duas opções:

#### Opção A: Fazer um novo commit (qualquer mudança)
```bash
# Fazer uma pequena mudança
git commit --allow-empty -m "chore: trigger deploy"
git push
```

#### Opção B: Re-executar manualmente
1. Vá em **Actions**: https://github.com/fbarberato99/DesignSystemEmbracon/actions
2. Clique no workflow que falhou
3. Clique em **Re-run all jobs**

---

## 📋 Checklist de Configuração

- [ ] Settings > Pages > Source = "GitHub Actions"
- [ ] Settings > Actions > General > Workflow permissions = "Read and write permissions"
- [ ] Settings > Actions > General > "Allow GitHub Actions to create and approve pull requests" = ✅
- [ ] Re-executar o workflow

---

## 🎯 Resultado Esperado

Após configurar corretamente:

1. O workflow será executado com sucesso ✅
2. Seu Storybook será publicado em:
   - **https://fbarberato99.github.io/DesignSystemEmbracon/**

---

## 🔍 Verificar Status

### Durante o Deploy:
- Acesse: https://github.com/fbarberato99/DesignSystemEmbracon/actions
- Aguarde o workflow concluir (2-3 minutos)

### Após o Deploy:
- Acesse: https://fbarberato99.github.io/DesignSystemEmbracon/
- Você verá seu Storybook publicado! 🎉

---

## ⚠️ Troubleshooting

### Se ainda der erro 403:

1. **Verifique se o repositório é público ou privado**
   - GitHub Pages gratuito funciona apenas em repositórios públicos
   - Se for privado, você precisa do GitHub Pro

2. **Verifique as permissões do token**
   - Settings > Actions > General
   - Workflow permissions deve estar em "Read and write permissions"

3. **Aguarde alguns minutos**
   - Às vezes o GitHub leva alguns minutos para propagar as configurações

### Se o site não carregar:

1. **Aguarde 1-2 minutos** após o deploy concluir
2. **Limpe o cache do navegador** (Ctrl + Shift + R)
3. **Verifique a URL**: https://fbarberato99.github.io/DesignSystemEmbracon/

---

## 📚 Documentação Oficial

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [GitHub Actions Permissions](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token)

---

✅ **Após seguir estes passos, seu Storybook será publicado com sucesso!**
