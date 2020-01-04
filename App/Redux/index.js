import {combineReducers} from 'redux';

import configureStore from './CreateStore';
import rootSaga from './Sagas';
import Actions from './Actions';

export default () => {
  const rootReducer = combineReducers(Actions);

  return configureStore(rootReducer, rootSaga);
};
