import {put, call} from 'redux-saga/effects';

import AuthActions from '../Actions/Auth';

import storage from '../../Serives/localStorage';
import Api from '../../Serives/API';

export default {
  *getToken() {
    const token = yield call(storage.get, 'token');
    if (token) {
      yield put(AuthActions.getTokenSuccess(token));
    } else {
      yield put(AuthActions.getTokenFailure());
    }
  },
  *login({data}) {
    const res = yield call(Api.login, data);
    console.log('ressss', res);
    if (res.ok) {
      yield put(AuthActions.loginSuccess(res.data.token));
    } else {
      yield put(AuthActions.loginFailure(res.data.error));
    }
  },
};
