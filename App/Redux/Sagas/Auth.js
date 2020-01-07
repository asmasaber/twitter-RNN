import {put, call} from 'redux-saga/effects';

import AuthActions from '~/Redux/Actions/Auth';

import storage from '~/Services/localStorage';
import Api from '~/Services/API';

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
    if (res.ok) {
      yield put(AuthActions.loginSuccess(res.data.token));
    } else {
      yield put(AuthActions.loginFailure(res.data.error));
    }
  },
  *signup({data}) {
    const res = yield call(Api.signup, data);
    if (res.ok) {
      yield put(AuthActions.signupSuccess(res.data.token));
    } else {
      yield put(AuthActions.signupFailure(res.data.error));
    }
  },
};
