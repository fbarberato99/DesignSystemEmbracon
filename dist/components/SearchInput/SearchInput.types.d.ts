export interface SearchInputProps {
    value?: string;
    placeholder?: string;
}
export interface SearchInputEmits {
    (e: 'input', value: string): void;
}
