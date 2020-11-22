import { all, takeLatest } from 'redux-saga/effects';

import { signIn, signUp } from './auth';
import { Types as AuthTypes } from '../ducks/auth';

import { getPlaces, getPlaceById } from './places';
import { Types as PlacesTypes } from '../ducks/places';

import { getUserById } from './users';
import { Types as UserTypes } from '../ducks/users';

export default function* rootSaga() {
  yield all([
    // Auth
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),

    // Places
    takeLatest(PlacesTypes.GET_PLACES_REQUEST, getPlaces),
    takeLatest(PlacesTypes.GET_PLACES_BY_ID_REQUEST, getPlaceById),

    // Users
    takeLatest(UserTypes.GET_USER_BY_ID_REQUEST, getUserById),
  ]);
}
