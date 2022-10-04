// Typings
import type { AppState } from 'ducks';
import type { ModalProps, ModalStateProps } from './typings';

// Redux
import { closeModal, openModal } from 'ducks/Modal/actions';
import { isModalActive } from 'ducks/Modal/selectors';

export const mapStateToProps = (state: AppState, ownProps: ModalProps): ModalStateProps => ({
    isActive: isModalActive(state, ownProps.modalName)
});

export const mapDispatchToProps = {
    closeModalConnect: closeModal,
    openModalConnect: openModal
};
