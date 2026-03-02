#!/bin/bash

# Script para configurar novo repositório GitHub
# Uso: ./setup-novo-repositorio.sh https://github.com/SEU_USUARIO/SEU_REPO.git

echo "🔄 Configurando novo repositório GitHub..."
echo ""

# Verificar se a URL foi fornecida
if [ -z "$1" ]; then
    echo "❌ Erro: URL do repositório não fornecida"
    echo ""
    echo "Uso: ./setup-novo-repositorio.sh https://github.com/SEU_USUARIO/SEU_REPO.git"
    echo ""
    echo "Exemplo:"
    echo "./setup-novo-repositorio.sh https://github.com/fbarberato99/design-system-embracon.git"
    exit 1
fi

REPO_URL=$1

echo "📋 Passos que serão executados:"
echo "1. Remover repositório remoto antigo"
echo "2. Adicionar novo repositório: $REPO_URL"
echo "3. Enviar código para o novo repositório"
echo ""
read -p "Continuar? (s/n) " -n 1 -r
echo ""

if [[ ! $REPLY =~ ^[Ss]$ ]]; then
    echo "❌ Operação cancelada"
    exit 1
fi

echo ""
echo "🗑️  Removendo repositório antigo..."
git remote remove origin 2>/dev/null || echo "   (Nenhum repositório remoto encontrado)"

echo ""
echo "➕ Adicionando novo repositório..."
git remote add origin "$REPO_URL"

echo ""
echo "✅ Verificando configuração..."
git remote -v

echo ""
echo "📤 Enviando código para o novo repositório..."
git push -u origin main

echo ""
echo "🎉 Concluído!"
echo ""
echo "📋 Próximos passos:"
echo "1. Configure GitHub Pages: Settings > Pages > Source: GitHub Actions"
echo "2. Configure Permissões: Settings > Actions > Workflow permissions: Read and write"
echo "3. Aguarde o deploy (2-3 minutos)"
echo ""
echo "📚 Documentação: CRIAR_NOVO_REPOSITORIO.md"
