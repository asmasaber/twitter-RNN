import {takeEvery, all} from 'redux-saga/effects';

/* ------------- Types ------------- */
import {EntityTypes} from '../Actions/Entity';
import {AuthTypes} from '../Actions/Auth';

/* ------------- Sagas ------------- */
import entitySagas from './Entity';
import authSagas from './Auth';

export default function* root() {
  yield all([
    // Auth
    takeEvery(AuthTypes.GET_TOKEN, authSagas.getToken),
    takeEvery(AuthTypes.SET_TOKEN, authSagas.setToken),
    takeEvery(AuthTypes.LOGOUT, authSagas.logout),

    // Entity
    takeEvery(EntityTypes.GET, entitySagas.get),
    takeEvery(EntityTypes.POST, entitySagas.post),
    takeEvery(EntityTypes.PUT, entitySagas.put),
    takeEvery(EntityTypes.DELETE, entitySagas.delete),
  ]);
}
