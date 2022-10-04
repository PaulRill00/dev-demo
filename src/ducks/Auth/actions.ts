import { Dispatch } from 'redux';
import { authSetUserAction } from '.';

export const fetchAuthUser = () => {
    return async (dispatch: Dispatch) => {
        dispatch(authSetUserAction(null));
        return true;
    };
};
