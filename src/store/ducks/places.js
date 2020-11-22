import produce from 'immer';

export const Types = {
  GET_PLACES_REQUEST: '@places/GET_PLACES_REQUEST',
  GET_PLACES_SUCCESS: '@places/GET_PLACES_SUCCESS',
  GET_PLACES_ERROR: '@places/GET_PLACES_ERROR',
  GET_PLACES_BY_ID_REQUEST: '@places/GET_PLACES_BY_ID_REQUEST',
  GET_PLACES_BY_ID_SUCCESS: '@places/GET_PLACES_BY_ID_SUCCESS',
  GET_PLACES_BY_ID_ERROR: '@places/GET_PLACES_BY_ID_ERROR',
};

const INITIAL_STATE = {
  loading: false,
  succes: false,
  error: false,
  places: [],
  placeById: {},
};

export default function places(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case Types.GET_PLACES_REQUEST: {
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      }
      case Types.GET_PLACES_SUCCESS: {
        draft.loading = false;
        draft.success = true;
        draft.places = action.payload.places;
        break;
      }
      case Types.GET_PLACES_ERROR: {
        draft.loading = false;
        draft.error = true;
        break;
      }
      case Types.GET_PLACES_BY_ID_REQUEST: {
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      }
      case Types.GET_PLACES_BY_ID_SUCCESS: {
        draft.loading = false;
        draft.success = true;
        draft.placeById = action.payload.place;
        break;
      }
      case Types.GET_PLACES_BY_ID_ERROR: {
        draft.loading = false;
        draft.error = true;
        break;
      }
      default:
    }
  });
}

export const Creators = {
  getPlacesRequest: (params) => ({
    type: Types.GET_PLACES_REQUEST,
    payload: { params },
  }),
  getPlaceSuccess: (places) => ({
    type: Types.GET_PLACES_SUCCESS,
    payload: { places },
  }),
  getPlaceError: (error) => ({
    type: Types.GET_PLACES_ERROR,
    payload: { error },
  }),
  getPlacesByIdRequest: (id) => ({
    type: Types.GET_PLACES_BY_ID_REQUEST,
    payload: { id },
  }),
  getPlaceByIdSuccess: (place) => ({
    type: Types.GET_PLACES_BY_ID_SUCCESS,
    payload: { place },
  }),
  getPlaceByIdError: (error) => ({
    type: Types.GET_PLACES_BY_ID_ERROR,
    payload: { error },
  }),
};
