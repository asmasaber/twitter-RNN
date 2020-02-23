import {combineReducers} from 'redux';
import {reducer as auth} from './Auth';
import {reducer as entity} from './Entity';

export default combineReducers({
  auth,
  entity,
});
