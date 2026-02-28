export interface ToggleSwitchProps {
    size?: 'md' | 'sm';
    disabled?: boolean;
    modelValue?: boolean;
}
export interface ToggleSwitchEmits {
    (e: 'update:modelValue', value: boolean): void;
    (e: 'toggle', value: boolean): void;
}
