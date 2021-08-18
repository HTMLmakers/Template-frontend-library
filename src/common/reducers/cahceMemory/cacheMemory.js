import {ReplaceParameterInUrl, extendObject} from "../../services/utils/utils";
import {ServerURL} from "../../services/consts/common";
import {disableLoader} from "../../api";


const initialState = {
  key: null,
  value: null,
};

const ActionType = {
  SET_CACHE: `SET_CACHE`,
};

const ActionCreator = {
  setCache: (key, value) => ({
    type: ActionType.SET_CACHE,
    payload: {key, value},
  }),
};

const Operation = {
  createCache: (key, data) => (dispatch, getState, api) => {
    return api.post(ReplaceParameterInUrl.id(ServerURL.CACHING, key), {key, data}, disableLoader())
      .then((response) => {
        const { data: success } = response.data;
        return success;
      })
  },
  fetchCache: (key) => (dispatch, getState, api) => {
    return api.get(ReplaceParameterInUrl.id(ServerURL.CACHING, key), disableLoader())
      .then((response) => {
        const { data: cache } = response.data;
        dispatch(ActionCreator.setCache(key, cache))
        return cache;
      })
  },
  deleteCache: (key) => (dispatch, getState, api) => {
    return api.delete(ReplaceParameterInUrl.id(ServerURL.CACHING, key), disableLoader())
      .then((response) => {
        const { data: cache } = response.data;
        dispatch(ActionCreator.setCache(null, null))
        return cache;
      })
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CACHE:
      return extendObject(state, {
        key: action.payload.key,
        value: action.payload.value,
      })

    default: return state;
  }
};

export {reducer, ActionType, ActionCreator as CacheActionCreator, Operation as CacheOperation};