const AppRoute = {
  ROOT: `/`,
  PROFILE: `/profile`,
};

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export {
  AppRoute,
  AuthorizationStatus,
  extend,
};  
