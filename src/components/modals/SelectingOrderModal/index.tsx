// Vendor
import { useTypedSelector } from 'ducks/hooks';
import { useModal } from 'ducks/Modal/hooks';
import { repshopSetSelectingStateAction } from 'ducks/RepShop';
import { getSelectingState } from 'ducks/RepShop/selectors';
import { usePurchasedItems } from 'queries/RepShop/usePurchasedItems';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { ShopItem } from 'typings/Repshop';

// Components
import Modal from '../Modal';
import { ModalOwnProps } from '../Modal/typings';

export const SELECT_ORDER_MODAL = 'selectOrderModal';

export const SelectOrderModal: React.FC = () => {
    const dispatch = useDispatch();

    const {
        closeModal,
        modalIsActive
    } = useModal(SELECT_ORDER_MODAL);

    const { selectItem: pendingSelectItem } = useTypedSelector(getSelectingState);
    const { selectItem } = usePurchasedItems();

    const cancelSelect = () => {
        dispatch(repshopSetSelectingStateAction({
            selectItem: null
        }));
        closeModal();
    };

    const handlePurchaseItem = (item: ShopItem) => selectItem(item).finally(cancelSelect);

    const modalProps: ModalOwnProps = useMemo(() => {
        if (!pendingSelectItem) return { modalName: SELECT_ORDER_MODAL };

        return {
            modalName: SELECT_ORDER_MODAL,
            preventCloseOnConfirm: true,
            confirm: {
                label: 'Select',
                onClick: () => { handlePurchaseItem(pendingSelectItem); }
            },
            cancel: {
                label: 'Cancel',
                onClick: cancelSelect
            }
        };
    }, [pendingSelectItem]);

    const modalContent = (
        <p>Are you sure you want to select <b>{ pendingSelectItem?.title }</b>?</p>
    );

    if (!modalIsActive) return null;

    return (
        <Modal { ...modalProps } >
            { modalContent }
        </Modal>
    );
};
