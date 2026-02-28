export interface TooltipProps {
    titulo?: string;
    conteudo: string;
    botaoTxt?: string;
    icon?: string;
    posicao?: 'top' | 'bottom';
    largura?: string;
}
export interface TooltipEmits {
    (e: 'botao-click'): void;
}
