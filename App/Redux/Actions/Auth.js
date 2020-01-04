import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions(
  {
    getToken: null,
    getTokenSuccess: ['data'],
    getTokenFailure: ['error'],

    login: ['data'],
    loginSuccess: ['data'],
    loginFailure: ['error'],

    reset: null,
  },
  {
    prefix: 'Auth/',
  },
);

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  token: null,
  loading: true,
  profile: null,
  error: null,
});

/* ------------- Reducers ------------- */

export const getToken = state => state.merge({loading: true});

export const getTokenSuccess = (state, {data}) =>
  state.merge({
    loading: false,
    error: null,
    token: data,
  });

export const getTokenFailure = state =>
  state.merge({loading: false, error: true});

export const login = state => state.merge({loading: true});

export const loginSuccess = (state, {data}) =>
  state.merge({
    loading: false,
    error: null,
    token: data,
  });

export const loginFailure = (state, {error}) =>
  state.merge({loading: false, error});

export const reset = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TOKEN]: getToken,
  [Types.GET_TOKEN_SUCCESS]: getTokenSuccess,
  [Types.GET_TOKEN_FAILURE]: getTokenFailure,

  [Types.LOGIN]: login,
  [Types.LOGIN_SUCCESS]: loginSuccess,
  [Types.LOGIN_FAILURE]: loginFailure,
});
