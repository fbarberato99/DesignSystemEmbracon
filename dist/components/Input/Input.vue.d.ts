import { InputProps } from './Input.types';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputProps>, {
    value: string;
    type: string;
    label: string;
    placeholder: string;
    caption: string;
    maxLength: undefined;
    disabled: boolean;
    size: string;
    customClass: string;
    tooltiptext: string;
    rules: () => never[];
    noNumbers: boolean;
    onlyNumbers: boolean;
    noSpecials: boolean;
    realTimeValidation: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    input: (value: string) => void;
    blur: (event: FocusEvent) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<InputProps>, {
    value: string;
    type: string;
    label: string;
    placeholder: string;
    caption: string;
    maxLength: undefined;
    disabled: boolean;
    size: string;
    customClass: string;
    tooltiptext: string;
    rules: () => never[];
    noNumbers: boolean;
    onlyNumbers: boolean;
    noSpecials: boolean;
    realTimeValidation: boolean;
}>>> & Readonly<{
    onInput?: ((value: string) => any) | undefined;
    onBlur?: ((event: FocusEvent) => any) | undefined;
}>, {
    disabled: boolean;
    type: string;
    caption: string;
    label: string;
    placeholder: string;
    size: import('./Input.types').InputSize;
    value: string | number;
    maxLength: string | number;
    customClass: string;
    tooltiptext: string;
    rules: import('./Input.types').ValidationRule[];
    noNumbers: boolean;
    onlyNumbers: boolean;
    noSpecials: boolean;
    realTimeValidation: boolean;
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
