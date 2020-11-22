import React from 'react';
import { retry, put } from 'redux-saga/effects';
import qs from 'qs';
import { toast } from 'react-toastify';
import { Creators as UserActions } from '../ducks/users';
import { UsersAPI } from '../../services/api';
import { ErrorToast, SuccessToast } from '../../components/molecules/Toast';

export function* getUserById(action) {
  try {
    const { id } = action.payload;

    const response = yield retry(2, 2000, UsersAPI.get, `/users/${id}`);

    yield put(UserActions.getUserByIdSuccess(response.data));
  } catch (error) {
    yield put(UserActions.getUserByIdError(error));
    toast.error(
      <ErrorToast size="30">Não foi possível obter o usuário.</ErrorToast>
    );
  }
}
