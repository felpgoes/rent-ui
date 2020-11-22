import produce from 'immer';

export const Types = {
  SIGN_IN_REQUEST: '@user/SIGN_IN_REQUEST',
  SIGN_IN_SUCCESS: '@user/SIGN_IN_SUCCESS',
  SIGN_IN_ERROR: '@user/SIGN_IN_ERROR',
  SIGN_UP_REQUEST: '@user/SIGN_UP_REQUEST',
  SIGN_UP_SUCCESS: '@user/SIGN_UP_SUCCESS',
  SIGN_UP_ERROR: '@user/SIGN_UP_ERROR',
  SIGN_OUT: '@user/SIGN_OUT',
  POST_LOGIN_REQUEST: '@user/POST_LOGIN_REQUEST',
  POST_LOGIN_SUCCESS: '@user/POST_LOGIN_SUCCESS',
  POST_LOGIN_ERROR: '@user/POST_LOGIN_ERROR',
};

const INITIAL_STATE = {
  loggedIn: false,
  user: {},
  token: {},
  signUp: {
    loading: false,
    success: false,
    isError: false,
  },
  signIn: {
    loading: false,
    success: false,
    isError: false,
  },
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.SIGN_IN_REQUEST: {
        draft.loggedIn = false;
        draft.signIn.loading = true;
        draft.signIn.isSuccess = false;
        draft.signIn.isError = false;
        break;
      }
      case Types.SIGN_IN_SUCCESS: {
        draft.loggedIn = true;
        draft.signIn.loading = false;
        draft.signIn.isSuccess = true;
        draft.user = action.payload.user;
        draft.token = action.payload.token;
        break;
      }
      case Types.SIGN_IN_ERROR: {
        draft.loggedIn = false;
        draft.signIn.loading = false;
        draft.signIn.isError = true;
        break;
      }
      case Types.SIGN_UP_REQUEST: {
        draft.signUp.loading = true;
        draft.signUp.isSuccess = false;
        draft.signUp.isError = false;
        break;
      }
      case Types.SIGN_UP_SUCCESS: {
        draft.signUp.loading = false;
        draft.signUp.isSuccess = true;
        break;
      }
      case Types.SIGN_UP_ERROR: {
        draft.signUp.loading = false;
        draft.signUp.isError = true;
        break;
      }
      case Types.SIGN_OUT: {
        draft.loggedIn = false;
        draft.signIn.loading = false;
        draft.user = {};
        draft.token = {};
        break;
      }
      case Types.POST_LOGIN_REQUEST: {
        draft.postLogin.loading = true;
        draft.postLogin.success = false;
        draft.postLogin.error = null;
        draft.postLogin.isError = null;
        draft.postLogin.unsuccessResponse = null;
        break;
      }
      case Types.POST_LOGIN_SUCCESS: {
        draft.usuario = action.payload.usuario;
        draft.token = action.payload.token;
        draft.accessToken = action.payload.token.accessToken;
        draft.accessTokenExpiration = action.payload.token.expiration;
        draft.refreshToken = action.payload.token.refreshToken;
        if (action.payload.changePassword == 'false') draft.loggedIn = true;
        else draft.loggedIn = false;
        draft.postLogin.loading = false;
        draft.postLogin.success = action.payload.isSuccess;
        draft.postLogin.isError = false;
        break;
      }
      case Types.POST_LOGIN_ERROR: {
        draft.postLogin.loading = false;
        draft.postLogin.isError = true;
        draft.postLogin.error = action.payload.error;
        draft.postLogin.unsuccessResponse = action.payload.unsuccessResponse;
        break;
      }
      default:
    }
  });
}

export const Creators = {
  signInRequest: (params) => ({
    type: Types.SIGN_IN_REQUEST,
    payload: { params },
  }),
  signInSuccess: (token, user) => ({
    type: Types.SIGN_IN_SUCCESS,
    payload: { token, user },
  }),
  signInError: (error) => ({
    type: Types.SIGN_IN_ERROR,
    payload: { error },
  }),
  signUpRequest: (params) => ({
    type: Types.SIGN_UP_REQUEST,
    payload: { params },
  }),
  signUpSuccess: (token, usuario) => ({
    type: Types.SIGN_UP_SUCCESS,
    payload: { token, usuario },
  }),
  signUpError: (error) => ({
    type: Types.SIGN_UP_ERROR,
    payload: { error },
  }),
  signOut: () => ({
    type: Types.SIGN_OUT,
  }),
  postLoginRequest: (usuarioParams) => ({
    type: Types.POST_LOGIN_REQUEST,
    payload: { usuarioParams },
  }),
  postLoginSuccess: (token, usuario, isSuccess, changePassword) => ({
    type: Types.POST_LOGIN_SUCCESS,
    payload: { token, usuario, isSuccess, changePassword },
  }),
  postLoginError: (unsuccessResponse, error) => ({
    type: Types.POST_LOGIN_ERROR,
    payload: { unsuccessResponse, error },
  }),
};
