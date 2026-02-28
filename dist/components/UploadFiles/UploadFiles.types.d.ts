export interface UploadFilesProps {
    label?: string;
    titulo: string;
    disabled?: boolean;
    fileCategory?: string;
    accept?: string[];
    sizeLimit?: number;
    wrongFileTypeMessage?: string;
    tooltiptext?: string;
}
export interface UploadFilesEmits {
    (e: 'input', file: {
        name: string;
        base64: string;
        type: string;
    } | null): void;
}
export interface UploadedFile {
    name: string;
    base64: string;
    type: string;
    size: number;
}
