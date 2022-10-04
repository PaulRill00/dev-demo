import { ReactNode } from 'react';
import type { mapDispatchToProps } from './connect';

export type ModalSize = 'tiny' | 'small' | 'large' | 'fullscreen';
export type ModalAlign = 'left' | 'center' | 'right';

export type ModalButtonProps = {
    readonly label?: string;
    readonly onClick?: () => Promise<void>|void;
    readonly blocked?: boolean;
};

export type ModalOwnProps = {
    readonly modalName: string;
    readonly isActive?: boolean;
    readonly children?: ReactNode;
    readonly confirm?: ModalButtonProps;
    readonly cancel?: ModalButtonProps;
    readonly className?: string;
    readonly trigger?: ReactNode;
    readonly modalSize?: ModalSize;
    readonly alignContent?: ModalAlign;
    readonly alignButtons?: ModalAlign;
    readonly preventCloseOnConfirm?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly onOpen?: () => any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    readonly onClose?: () => any;
};

export interface ModalOwnState {
    isOpen: boolean;
}

export interface ModalStateProps {
    isActive: boolean;
}

export type ModalDispatchProps = typeof mapDispatchToProps;

export type ModalProps = ModalOwnProps & ModalStateProps & ModalDispatchProps;
