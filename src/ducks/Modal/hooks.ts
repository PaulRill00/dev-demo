import { useTypedSelector } from 'ducks/hooks';
import { useDispatch } from 'react-redux';
import { closeModal, openModal } from './actions';
import { getModalPayload, isModalActive } from './selectors';

export const useModal = (modalName: string) => {
    const dispatch = useDispatch();

    const openNamedModal = () => dispatch(openModal(modalName));
    const closeNamedModal = () => dispatch(closeModal(modalName));
    const modalIsActive = useTypedSelector(state => isModalActive(state, modalName));
    const modalPayload = useTypedSelector(state => getModalPayload(state, modalName));

    return {
        openModal: openNamedModal,
        closeModal: closeNamedModal,
        modalIsActive: modalIsActive,
        modalPayload: modalPayload
    };
};
