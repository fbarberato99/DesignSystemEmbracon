export interface PaginationProps {
    paginaAtual?: number;
    totalPaginas?: number;
}
export interface PaginationEmits {
    (e: 'update:paginaAtual', page: number): void;
    (e: 'change', page: number): void;
}
