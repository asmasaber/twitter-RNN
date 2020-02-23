import {put, call} from 'redux-saga/effects';

import AuthActions from '~/Redux/Actions/Auth';

import storage from '~/Services/localStorage';

import StartApp from '~/Navigation';

const AUTH_TOKEN_KEY = 'token';

export default {
  *getToken() {
    const token = yield call(storage.get, AUTH_TOKEN_KEY);
    if (token) {
      yield put(AuthActions.setToken(token));
    } else {
      yield put(AuthActions.getTokenFailure());
    }
  },

  *setToken({token}) {
    yield call(storage.set, AUTH_TOKEN_KEY, token);
  },

  *logout() {
    yield storage.remove(AUTH_TOKEN_KEY);
    StartApp();
  },
};
