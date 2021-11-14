import { extend, AuthorizationStatus } from './const';

const initialState = {
    authorizationStatus: AuthorizationStatus.NO_AUTH,
    loadStatus: false,
    login: '',
};

const ActionType = {
    AUTH_STATUS_CHANGE: `AUTH_STATUS_CHANGE`,
    CHANGE_LOAD_STATUS: `CHANGE_LOAD_STATUS`,
    LOGIN: `LOGIN`,
};

const ActionCreator = {
    authStatusChange: (authStatus) => {
        return {
            type: ActionType.AUTH_STATUS_CHANGE,
            payload: authStatus,
        };
    },
    changeLoadStatus: (loadStatus) => ({
        type: ActionType.CHANGE_LOAD_STATUS,
        payload: loadStatus
    }),
    getLogin: (data) => {
        return {
            type: ActionType.LOGIN,
            payload: data
        };
    },
};

const Operation = {
    userLogin: (data) => (dispatch, getState) => {
        dispatch(ActionCreator.getLogin(data));
        dispatch(ActionCreator.authStatusChange(AuthorizationStatus.AUTH));
        dispatch(ActionCreator.changeLoadStatus(true));
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.AUTH_STATUS_CHANGE:
            return extend(state, { authorizationStatus: action.payload });
        case ActionType.CHANGE_LOAD_STATUS:
            return extend(state, { loadStatus: action.payload });
        case ActionType.LOGIN:
            return extend(state, { login: action.payload });
        default:
            return state;
    }
};

export {
    initialState,
    ActionType,
    ActionCreator,
    Operation,
    reducer
};
