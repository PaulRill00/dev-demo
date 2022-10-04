import { getAuthCookieValue, useUserContext } from '@dmgincs/utils';
import { authSetUserAction } from 'ducks/Auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

export const ReduxAuthUserSync = () => {
    const { user } = useUserContext();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!user) {
            dispatch(authSetUserAction(null));
            return;
        }

        const cookie = getAuthCookieValue();

        dispatch(authSetUserAction(!user ? null : {
            ...user,
            authToken: cookie
        }));

    }, [user]);

    return null;
};
