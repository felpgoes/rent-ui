import produce from 'immer';

export const Types = {
  GET_USER_BY_ID_REQUEST: '@USER_BY_ID/GET_USER_BY_ID_REQUEST',
  GET_USER_BY_ID_SUCCESS: '@USER_BY_ID/GET_USER_BY_ID_SUCCESS',
  GET_USER_BY_ID_ERROR: '@USER_BY_ID/GET_USER_BY_ID_ERROR',
};

const INITIAL_STATE = {
  loading: false,
  succes: false,
  error: false,
  userById: {},
};

export default function users(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.GET_USER_BY_ID_REQUEST: {
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      }
      case Types.GET_USER_BY_ID_SUCCESS: {
        draft.loading = false;
        draft.success = true;
        draft.userById = action.payload.user;
        break;
      }
      case Types.GET_USER_BY_ID_ERROR: {
        draft.loading = false;
        draft.error = true;
        break;
      }

      default:
    }
  });
}

export const Creators = {
  getUserByIdRequest: (id) => ({
    type: Types.GET_USER_BY_ID_REQUEST,
    payload: { id },
  }),
  getUserByIdSuccess: (user) => ({
    type: Types.GET_USER_BY_ID_SUCCESS,
    payload: { user },
  }),
  getUserByIdError: (error) => ({
    type: Types.GET_USER_BY_ID_ERROR,
    payload: { error },
  }),
};
