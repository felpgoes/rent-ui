import React from 'react';
import { retry, put } from 'redux-saga/effects';
import qs from 'qs';
import { toast } from 'react-toastify';
import { Creators as PlaceActions } from '../ducks/places';
import { PlacesAPI } from '../../services/api';
import { ErrorToast, SuccessToast } from '../../components/molecules/Toast';

export function* getPlaces(action) {
  try {
    const { params } = action.payload;

    const placesParams = {
      page: params.page,
    };

    const paramsRequest = qs.stringify(placesParams, {
      addQueryPrefix: true,
      skipNulls: true,
    });
    const response = yield retry(
      2,
      2000,
      PlacesAPI.get,
      `/place/list${paramsRequest}`
    );

    yield put(PlaceActions.getPlaceSuccess(response.data));
  } catch (error) {
    yield put(PlaceActions.getPlaceError(error));
    toast.error(
      <ErrorToast size="30">Não foi possível obter os espaços.</ErrorToast>
    );
  }
}

export function* getPlaceById(action) {
  try {
    const { id } = action.payload;

    const response = yield retry(2, 2000, PlacesAPI.get, `/place/${id}`);

    yield put(PlaceActions.getPlaceByIdSuccess(response.data));
  } catch (error) {
    yield put(PlaceActions.getPlaceByIdError(error));
    toast.error(
      <ErrorToast size="30">Não foi possível obter o espaço.</ErrorToast>
    );
  }
}
