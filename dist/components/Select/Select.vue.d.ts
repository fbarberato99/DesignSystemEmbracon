import { SelectProps } from './Select.types';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<SelectProps>, {
    placeholder: string;
    disabled: boolean;
    size: string;
    leftIcon: string;
    label: string;
    caption: string;
    error: boolean;
    errorMessage: string;
    options: () => never[];
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (value: string | number) => void;
    change: (value: string | number) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<SelectProps>, {
    placeholder: string;
    disabled: boolean;
    size: string;
    leftIcon: string;
    label: string;
    caption: string;
    error: boolean;
    errorMessage: string;
    options: () => never[];
}>>> & Readonly<{
    "onUpdate:modelValue"?: ((value: string | number) => any) | undefined;
    onChange?: ((value: string | number) => any) | undefined;
}>, {
    disabled: boolean;
    caption: string;
    label: string;
    placeholder: string;
    size: "lg" | "sm";
    errorMessage: string;
    options: import('./Select.types').SelectOption[];
    leftIcon: string;
    error: boolean;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
