// Vendor
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Modal as SModal, StrictModalProps } from 'semantic-ui-react';
import classNames from 'classnames';
import { DiButton } from 'loadables';

// Typings
import type { ModalOwnProps, ModalOwnState, ModalProps } from './typings';

// Other
import { mapStateToProps, mapDispatchToProps } from './connect';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Modal: React.FC<any> = ({
    modalName,
    isActive,
    children,
    className,
    confirm,
    cancel,
    trigger,
    modalSize,
    alignContent,
    alignButtons,
    preventCloseOnConfirm: preventCloseOnClosePrompt,
    onOpen,
    onClose,
    closeModalConnect
}: ModalProps & ModalOwnState) => {
    const closeModal = () => closeModalConnect(modalName);
    const [buttonsLoading, setButtonsLoading] = useState(false);

    const closeHandler = () => {
        closeModal();

        if (typeof onClose === 'function') {
            onClose();
        }
    };

    const onConfirm = async (): Promise<void> => {
        if (!confirm) return;

        if (confirm.onClick) {
            setButtonsLoading(true);
            await confirm.onClick();
            setButtonsLoading(false);
        }

        if (!confirm.onClick || preventCloseOnClosePrompt === false) {
            closeHandler();
        }
    };

    const onCancel = async (): Promise<void> => {
        if (!cancel) return;

        if (cancel.onClick) {
            setButtonsLoading(true);
            await cancel.onClick();
            setButtonsLoading(false);
        }

        if (!cancel.onClick || !preventCloseOnClosePrompt) {
            closeHandler();
        }
    };

    const classList = classNames(
        `modal-align-content-${alignContent ?? 'center'}`,
        `modal-align-buttons-${alignButtons ?? 'right'}`,
        className
    );

    const modalProps: StrictModalProps = {
        className: classList,
        size: modalSize ?? 'small'
    };

    return (
        <SModal
            onClose={ closeHandler }
            onOpen={ onOpen }
            open={ isActive }
            trigger={ trigger }
            closeOnDimmerClick={ false }
            basic
            dimmer={ 'blurring' }
            { ...modalProps }
        >
            <SModal.Content>{ children }</SModal.Content>
            <SModal.Actions>
                { cancel && (
                    <DiButton
                        action={ onCancel }
                        id="cancel-modal"
                        disabled={ cancel.blocked || buttonsLoading }
                        loading={ buttonsLoading }
                    >
                        { cancel.label }
                    </DiButton>
                ) }
                { confirm && (
                    <DiButton
                        action={ onConfirm }
                        id="confirm-modal"
                        disabled={ confirm.blocked || buttonsLoading }
                        loading={ buttonsLoading }
                    >
                        { confirm.label }
                    </DiButton>
                ) }
            </SModal.Actions>
        </SModal>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal) as unknown as React.FC<ModalOwnProps>;
