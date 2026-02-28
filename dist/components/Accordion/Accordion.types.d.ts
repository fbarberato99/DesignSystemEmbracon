/**
 * Embracon Design System - Accordion Types
 */
export interface AccordionProps {
    /**
     * Título do accordion
     * @default ""
     */
    titulo?: string;
    /**
     * Conteúdo do accordion (ignorado se slot default existir)
     * @default ""
     */
    conteudo?: string;
    /**
     * Ícone exibido ao lado do título
     * @default "icon–ic_informacao"
     */
    icone?: string;
    /**
     * Cor da seta (chevron)
     * @default "#000"
     */
    arrowColor?: string;
    /**
     * Estado desabilitado
     * @default false
     */
    disabled?: boolean;
}
export interface AccordionEmits {
    (e: 'toggle', isOpen: boolean): void;
}
