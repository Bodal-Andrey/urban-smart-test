import { extend } from './const';

const initialState = {
    login: '',
};

const ActionType = {
    LOGIN: `LOGIN`,
};

const ActionCreator = {
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
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionType.LOGIN:
            return extend(state, { login: action.payload });
        default:
            return state;
    }
};

export { initialState, ActionType, ActionCreator, Operation, reducer };
