import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const setCurrentUserGb = (user) => {
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};