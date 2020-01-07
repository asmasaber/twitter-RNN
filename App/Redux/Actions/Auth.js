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

    signup: ['data'],
    signupSuccess: ['data'],
    signupFailure: ['error'],

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
    token: data,
  });

export const getTokenFailure = state => state.merge({loading: false});

export const login = state => state.merge({loading: true, error: null});

export const loginSuccess = (state, {data}) =>
  state.merge({
    loading: false,
    error: null,
    token: data,
  });

export const loginFailure = (state, {error}) =>
  state.merge({loading: false, error});

export const signup = state => state.merge({loading: true, error: null});

export const signupSuccess = (state, {data}) =>
  state.merge({
    loading: false,
    error: null,
    token: data,
  });

export const signupFailure = (state, {error}) =>
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

  [Types.SIGNUP]: signup,
  [Types.SIGNUP_SUCCESS]: signupSuccess,
  [Types.SIGNUP_FAILURE]: signupFailure,
});
