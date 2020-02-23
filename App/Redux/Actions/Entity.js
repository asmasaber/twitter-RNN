import {createReducer, createActions} from 'reduxsauce';
import Immutable from 'seamless-immutable';
import _get from 'lodash/get';

/* ------------- Types and Action Creators ------------- */

const {Types, Creators} = createActions(
  {
    register: ['id'],

    get: ['id', 'data'],
    getLatest: ['id', 'data'],
    getSucceeded: ['id', 'data'],
    getFailed: ['id', 'errors'],

    post: ['id', 'data'],
    postSucceeded: ['id', 'data'],
    postFailed: ['id', 'errors'],

    put: ['id', 'data'],
    putSucceeded: ['id', 'data'],
    putFailed: ['id', 'errors'],

    delete: ['id', 'data'],
    deleteSucceeded: ['id', 'data'],
    deleteFailed: ['id', 'errors'],

    reset: ['id'],
    resetProp: ['id', 'prop'],
    resetResponseProps: ['id'],
  },
  {
    prefix: 'Entity/',
  },
);

export const EntityTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */

export const INITIAL_STATE_SINGLE = Immutable({
  received: false,
  posted: false,
  updated: false,
  deleted: false,
  loading: false,
  errors: null,
  // Store responses
  responseFromGet: null,
  responseFromPost: null,
  responseFromPut: null,
  responseFromDelete: null,
});

export const INITIAL_STATE = Immutable({
  byId: {},
});

/* ------------- Reducers ------------- */

const updateState = (state, id, updates) =>
  state.merge({
    byId: {
      ...state.byId,
      [id]: {
        ..._get(state, `byId.${id}`),
        ...updates,
      },
    },
  });

export const register = (state, {id}) =>
  updateState(state, id, INITIAL_STATE_SINGLE);

export const get = (state, {id}) =>
  updateState(state, id, {
    loading: true,
    errors: null,
    responseFromGet: null,
  });

export const getSucceeded = (state, {id, data}) =>
  updateState(state, id, {
    loading: false,
    errors: null,
    received: true,
    responseFromGet: data || INITIAL_STATE_SINGLE.responseFromGet,
  });

export const getFailed = (state, {id, errors}) =>
  updateState(state, id, {
    loading: false,
    received: true,
    errors,
  });

export const post = (state, {id}) =>
  updateState(state, id, {
    loading: true,
    errors: null,
    responseFromPost: null,
  });

export const postSucceeded = (state, {id, data}) =>
  updateState(state, id, {
    loading: false,
    errors: null,
    posted: true,
    responseFromPost: data || INITIAL_STATE_SINGLE.responseFromPost,
  });

export const postFailed = (state, {id, errors}) =>
  updateState(state, id, {
    loading: false,
    posted: true,
    errors,
  });

export const put = (state, {id}) =>
  updateState(state, id, {
    loading: true,
    errors: null,
    responseFromPut: null,
  });

export const putSucceeded = (state, {id, data}) =>
  updateState(state, id, {
    loading: false,
    errors: null,
    updated: true,
    responseFromPut: data || INITIAL_STATE_SINGLE.responseFromPut,
  });

export const putFailed = (state, {id, errors}) =>
  updateState(state, id, {
    loading: false,
    updated: true,
    errors,
  });

export const deleted = (state, {id}) =>
  updateState(state, id, {
    loading: true,
    errors: null,
    responseFromDelete: null,
  });

export const deleteSucceeded = (state, {id, data}) =>
  updateState(state, id, {
    loading: false,
    errors: null,
    deleted: true,
    responseFromDelete: data || INITIAL_STATE_SINGLE.responseFromDelete,
  });

export const deleteFailed = (state, {id, errors}) =>
  updateState(state, id, {
    loading: false,
    deleted: true,
    errors,
  });

export const reset = (state, {id}) => updateState(state, id, null);

export const resetProp = (state, {id, prop}) =>
  updateState(state, id, {
    [prop]: INITIAL_STATE_SINGLE[prop],
  });

export const resetResponseProps = (state, {id}) =>
  updateState(state, id, {
    posted: INITIAL_STATE_SINGLE.posted,
    updated: INITIAL_STATE_SINGLE.updated,
    received: INITIAL_STATE_SINGLE.received,
    deleted: INITIAL_STATE_SINGLE.deleted,
    errors: INITIAL_STATE_SINGLE.errors,
    responseFromGet: INITIAL_STATE_SINGLE.responseFromGet,
    responseFromPost: INITIAL_STATE_SINGLE.responseFromPost,
    responseFromPut: INITIAL_STATE_SINGLE.responseFromPut,
    responseFromDelete: INITIAL_STATE_SINGLE.responseFromDelete,
  });

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REGISTER]: register,

  [Types.GET]: get,
  [Types.GET_LATEST]: get,
  [Types.GET_SUCCEEDED]: getSucceeded,
  [Types.GET_FAILED]: getFailed,

  [Types.POST]: post,
  [Types.POST_SUCCEEDED]: postSucceeded,
  [Types.POST_FAILED]: postFailed,

  [Types.PUT]: put,
  [Types.PUT_SUCCEEDED]: putSucceeded,
  [Types.PUT_FAILED]: putFailed,

  [Types.DELETE]: deleted,
  [Types.DELETE_SUCCEEDED]: deleteSucceeded,
  [Types.DELETE_FAILED]: deleteFailed,

  [Types.RESET]: reset,
  [Types.RESET_PROP]: resetProp,
  [Types.RESET_RESPONSE_PROPS]: resetResponseProps,
});
