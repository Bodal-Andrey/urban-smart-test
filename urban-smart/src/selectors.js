const getLogin = (state) => {
    return state.login;
};

const getAuthStatus = (state) => {
    return state.authorizationStatus;
};

const getLoadStatus = (state) => {
    return state.loadStatus;
};

export {
    getLogin,
    getAuthStatus,
    getLoadStatus,
};
