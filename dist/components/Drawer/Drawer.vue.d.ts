declare function __VLS_template(): {
    default?(_: {}): any;
    footer?(_: {}): any;
};
declare const __VLS_component: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<boolean>;
    title: {
        type: import('vue').PropType<string>;
        default: string;
    };
    height: {
        type: import('vue').PropType<string>;
        default: string;
    };
    closeButton: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    icon: {
        type: import('vue').PropType<string>;
        default: string;
    };
    desktopAsModal: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    fixedFooter: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    pusher: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    buttonText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    contentText: {
        type: import('vue').PropType<string>;
        default: string;
    };
}>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    close: () => void;
    click: () => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    modelValue: import('vue').PropType<boolean>;
    title: {
        type: import('vue').PropType<string>;
        default: string;
    };
    height: {
        type: import('vue').PropType<string>;
        default: string;
    };
    closeButton: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    icon: {
        type: import('vue').PropType<string>;
        default: string;
    };
    desktopAsModal: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    fixedFooter: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    pusher: {
        type: import('vue').PropType<boolean>;
        default: boolean;
    };
    buttonText: {
        type: import('vue').PropType<string>;
        default: string;
    };
    contentText: {
        type: import('vue').PropType<string>;
        default: string;
    };
}>> & Readonly<{
    onClick?: (() => any) | undefined;
    onClose?: (() => any) | undefined;
}>, {
    title: string;
    height: string;
    closeButton: boolean;
    icon: string;
    desktopAsModal: boolean;
    fixedFooter: boolean;
    pusher: boolean;
    buttonText: string;
    contentText: string;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
