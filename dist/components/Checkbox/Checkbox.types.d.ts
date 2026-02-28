export interface CheckboxProps {
    label?: string;
    subtitle?: string;
    value?: boolean;
    modelValue?: boolean;
    disabled?: boolean;
}
export interface CheckboxEmits {
    (e: 'input', value: boolean): void;
    (e: 'update:modelValue', value: boolean): void;
}
