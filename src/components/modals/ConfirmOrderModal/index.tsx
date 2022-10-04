// Vendor
import { useUserContext } from '@dmgincs/utils';
import NotLoggedInModal from 'components/organisms/Modals/NotLoggedInModal';
import { useTypedSelector } from 'ducks/hooks';
import { useModal } from 'ducks/Modal/hooks';
import { repshopSetPurchasingStateAction } from 'ducks/RepShop';
import { getPurchasingState } from 'ducks/RepShop/selectors';
import { usePurchasedItems } from 'queries/RepShop/usePurchasedItems';
import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Input } from 'semantic-ui-react';
import { ShopItem } from 'typings/Repshop';

// Components
import Modal from '../Modal';
import { ModalOwnProps } from '../Modal/typings';

export const CONFIRM_ORDER_MODAL = 'confirmOrderModal';

export const ConfirmOrderModal: React.FC = () => {
    const dispatch = useDispatch();
    const { user } = useUserContext();
    const { purchaseItem } = usePurchasedItems();

    const {
        closeModal,
        modalIsActive
    } = useModal(CONFIRM_ORDER_MODAL);

    const { pendingItem: pendingOrderItem } = useTypedSelector(getPurchasingState);
    const [metaData, setMetaData] = React.useState<{ [key: string]: string }>({});

    const cancelOrder = () => {
        dispatch(repshopSetPurchasingStateAction({
            pendingItem: null
        }));
        closeModal();
    };

    const handlePurchaseItem = (item: ShopItem, meta?: object) => purchaseItem(item, meta).finally(cancelOrder);

    const onModalInputChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const data = {
            ...metaData,
            [target.id]: target.value
        };

        Object.keys(data).forEach((key: string) => {
            if (data[key] === '') delete data[key];
        });

        setMetaData(data);
    };

    const modalProps: ModalOwnProps = useMemo(() => {
        if (!pendingOrderItem) return { modalName: CONFIRM_ORDER_MODAL };

        return {
            modalName: CONFIRM_ORDER_MODAL,
            preventCloseOnConfirm: true,
            confirm: {
                label: 'Purchase',
                onClick: () => handlePurchaseItem(pendingOrderItem, metaData)
            },
            cancel: {
                label: 'Cancel',
                onClick: cancelOrder
            }
        };
    }, [pendingOrderItem, metaData]);

    const isNameChange = pendingOrderItem?.title === 'Name Change';

    const confirmationMessage = (
        <React.Fragment>
            <p>
                Are you sure you want to purchase <b>{ pendingOrderItem?.title }</b>{ ' ' }
                for <b>{ pendingOrderItem?.price } REP</b>?
            </p>
            <p>Warning: This purchase is not refundable</p>
        </React.Fragment>
    );

    const nameChangeInput = isNameChange && (
        <Input
            inverted
            id="name"
            type="text"
            placeholder="Your new name"
            onChange={ onModalInputChange }
        />
    );

    const modalContent = (
        <React.Fragment>
            { confirmationMessage }
            { nameChangeInput }
        </React.Fragment>
    );

    if (!modalIsActive) return null;

    if (!user) {
        return (
            <NotLoggedInModal
                message={ 'In order to buy an item, you must log in.' }
                open={ pendingOrderItem !== undefined }
                setOpen={ cancelOrder }
            />
        );
    }

    return (
        <Modal { ...modalProps } >
            { modalContent }
        </Modal>
    );
};
