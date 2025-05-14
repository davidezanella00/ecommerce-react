import { createAction } from '../../utils/reducer/reducer.utils';
import { USER_ACTION_TYPES } from './user.types';

export const checkUserSession = () => {
    return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
};

export const signOutStart = () => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
};

export const signOutSuccess = () => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
};

export const signOutFailed = (error) => {
    return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);
};

export const signUpStart = (email, password, displayName) => {
    return createAction(USER_ACTION_TYPES.SIGN_UP_START, { email, password, displayName });
};

export const googleSignInStart = () => {
    return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
};

export const emailSignInStart = (email, password) => {
    return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });
};

export const signInSuccess = (user) => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
};

export const signInFailed = (error) => {
    return createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);
};