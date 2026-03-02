# Script PowerShell para configurar novo repositório GitHub
# Uso: .\setup-novo-repositorio.ps1 "https://github.com/SEU_USUARIO/SEU_REPO.git"

param(
    [Parameter(Mandatory=$true)]
    [string]$RepoUrl
)

Write-Host "🔄 Configurando novo repositório GitHub..." -ForegroundColor Cyan
Write-Host ""

Write-Host "📋 Passos que serão executados:" -ForegroundColor Yellow
Write-Host "1. Remover repositório remoto antigo"
Write-Host "2. Adicionar novo repositório: $RepoUrl"
Write-Host "3. Enviar código para o novo repositório"
Write-Host ""

$confirmation = Read-Host "Continuar? (s/n)"
if ($confirmation -ne 's' -and $confirmation -ne 'S') {
    Write-Host "❌ Operação cancelada" -ForegroundColor Red
    exit
}

Write-Host ""
Write-Host "🗑️  Removendo repositório antigo..." -ForegroundColor Yellow
try {
    git remote remove origin 2>$null
} catch {
    Write-Host "   (Nenhum repositório remoto encontrado)" -ForegroundColor Gray
}

Write-Host ""
Write-Host "➕ Adicionando novo repositório..." -ForegroundColor Yellow
git remote add origin $RepoUrl

Write-Host ""
Write-Host "✅ Verificando configuração..." -ForegroundColor Green
git remote -v

Write-Host ""
Write-Host "📤 Enviando código para o novo repositório..." -ForegroundColor Yellow
git push -u origin main

Write-Host ""
Write-Host "🎉 Concluído!" -ForegroundColor Green
Write-Host ""
Write-Host "📋 Próximos passos:" -ForegroundColor Cyan
Write-Host "1. Configure GitHub Pages: Settings > Pages > Source: GitHub Actions"
Write-Host "2. Configure Permissões: Settings > Actions > Workflow permissions: Read and write"
Write-Host "3. Aguarde o deploy (2-3 minutos)"
Write-Host ""
Write-Host "📚 Documentação: CRIAR_NOVO_REPOSITORIO.md" -ForegroundColor Gray
