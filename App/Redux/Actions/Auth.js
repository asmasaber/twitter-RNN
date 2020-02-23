import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions(
  {
    getToken: null,
    getTokenFailure: null,

    setToken: ['token'],

    logout: null,

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

export const getTokenFailure = state => state.merge({loading: false});

export const setToken = (state, {token}) => state.merge({token, loading: true});

export const logout = state => state.merge({token: null});

export const reset = () => INITIAL_STATE;

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.GET_TOKEN]: getToken,
  [Types.GET_TOKEN_FAILURE]: getTokenFailure,

  [Types.SET_TOKEN]: setToken,

  [Types.LOGOUT]: logout,

  [Types.RESET]: reset,
});
