import { call, put } from 'redux-saga/effects';
import api from '../../../services/api';

import { loadSuccess, loadFailure } from './actions';
import { IUser } from './types';

export function* getAll() {
  try {
    const response = ((yield call(api.get, '/users/all') as unknown) as IUser[]);
    yield put(loadSuccess(response));
  } catch (err) {
    yield put(loadFailure());
  }
}
