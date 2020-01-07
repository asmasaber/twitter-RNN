import {takeLatest, takeEvery, all} from 'redux-saga/effects';

/* ------------- Types ------------- */
import {AuthTypes} from '../Actions/Auth';

/* ------------- Sagas ------------- */

import authSagas from './Auth';

export default function* root() {
  yield all([takeLatest(AuthTypes.GET_TOKEN, authSagas.getToken)]);
  yield all([takeLatest(AuthTypes.LOGIN, authSagas.login)]);
  yield all([takeLatest(AuthTypes.SIGNUP, authSagas.signup)]);
}
