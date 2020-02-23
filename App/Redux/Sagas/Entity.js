import {put, call} from 'redux-saga/effects';
import EntityActions from '~/Redux/Actions/Entity';
import AuthActions from '~/Redux/Actions/Auth';
import Api from '~/Services/API';

export default {
  *get({id, data}) {
    if (id === 'Feeds') {
      const res = yield call(Api.feeds.get, data);
      if (res.ok) {
        yield put(EntityActions.getSucceeded(id, res.data.items));
      } else {
        yield put(EntityActions.getFailed(id, res.data.error));
      }
    }

    if (id === 'Profile') {
      const res = yield call(Api.profile.get, data);
      if (res.ok) {
        yield put(EntityActions.getSucceeded(id, res.data));
      } else {
        yield put(EntityActions.getFailed(id, res.data.error));
      }
    }
  },
  *post({id, data}) {
    if (id === 'Login') {
      const res = yield call(Api.login, data);
      if (res.ok) {
        yield put(EntityActions.postSucceeded(id, res.data.token));
        yield put(AuthActions.setToken(res.data.token));
      } else {
        yield put(EntityActions.postFailed(id, res.data.error));
      }
    }

    if (id === 'Signup') {
      const res = yield call(Api.signup, {...data});
      if (res.ok) {
        yield put(EntityActions.postSucceeded(id, res.data));
      } else {
        yield put(EntityActions.postFailed(id, res.data.error));
      }
    }

    if (id === 'Profile') {
      const res = yield call(Api.profile.post, {...data});
      if (res.ok) {
        yield put(EntityActions.postSucceeded(id, res.data));
      } else {
        yield put(EntityActions.postFailed(id, res.data.error));
      }
    }
  },
  *put({id, data}) {},
  *delete({id, data}) {},
};
