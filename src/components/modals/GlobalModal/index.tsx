// Vendor
import { globalResetAction } from 'ducks/GlobalModal';
import { getGlobalModal } from 'ducks/GlobalModal/selectors';
import { useTypedSelector } from 'ducks/hooks';
import { closeModal, openModal } from 'ducks/Modal/actions';
import { isModalActive } from 'ducks/Modal/selectors';
import React, { useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';

// Components
import Modal from '../Modal';
import { ModalOwnProps } from '../Modal/typings';

export const GLOBAL_MODAL = 'globalModal';

export const GlobalErroModal: React.FC = () => {
    const dispatch = useDispatch();

    const openGlobalModal = () => dispatch(openModal(GLOBAL_MODAL));
    const closeGlobalModal = () => dispatch(closeModal(GLOBAL_MODAL));
    const globalModalState = useTypedSelector(state => isModalActive(state, GLOBAL_MODAL));

    const { error, confirm, info } = useTypedSelector(getGlobalModal);

    useEffect(() => {
        if (error || confirm || info) {
            openGlobalModal();
        } else {
            closeGlobalModal();
        }
    }, [error, confirm, info, globalModalState]);

    const modalProps: ModalOwnProps = useMemo(() => {
        const defaultModalProps: ModalOwnProps = {
            modalName: GLOBAL_MODAL
        };

        if (error) {
            return {
                ...defaultModalProps,
                confirm: {
                    label: 'Ok',
                    onClick: () => { dispatch(globalResetAction()); }
                }
            };
        }

        if (confirm) {
            const confirmModalProps = {
                ...defaultModalProps,
                confirm: {
                    label: 'Confirm',
                    onClick: confirm.callback
                },
                preventCloseOnClosePrompt: confirm.preventCloseOnConfirm
            };

            if (confirm.withCancel) {
                confirmModalProps.cancel = {
                    label: 'Cancel',
                    onClick: () => { dispatch(globalResetAction()); }
                };
            }

            return confirmModalProps;
        }

        if (info) {
            return {
                ...defaultModalProps,
                confirm: {
                    label: 'Ok',
                    onClick: () => { dispatch(globalResetAction()); }
                }
            };
        }

        return defaultModalProps;
    }, [error, confirm, info]);

    const modalContent = useMemo(() => {
        if (confirm) {
            return <p>{ confirm.message }</p>;
        }

        if (error) {
            return (
                <React.Fragment>
                    <p>An error occured{ error.errorCode && ` (${error.errorCode})` }:</p>
                    <p>{ error.error }</p>
                </React.Fragment>
            );
        }

        if (info) {
            return <p>{ info.message }</p>;
        }

        return null;
    }, [error, confirm, info]);

    return (
        <Modal { ...modalProps } >
            { modalContent }
        </Modal>
    );
};
