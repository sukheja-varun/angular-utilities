export interface ToastI {
    type: ToastType,
    title: string,
    message: string
}

export enum ToastType {
    SUCCESS,
    ERROR,
    INFO,
    WARNING
} 