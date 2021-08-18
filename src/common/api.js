import axios from "axios";

import {AppActionCreator} from "./reducers/app/app";
import {addMessage, createMessage} from "./components/common/Message/Message";
import {MessageType} from "./services/consts/common";

export const ServerError = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  NOT_ALLOWED: 405,
  INTERNAL_SERVER: 500,
}

export const BASE_SERVER_URL = process.env.REACT_APP_URL;
const DISABLE_LOADER = `disableLoader`;

let dispatch;

export const disableLoader = () => {
  return {[DISABLE_LOADER]: true};
};

export const setDispatch = (dispatchFunc) => {
  if (!dispatch) {
    dispatch = dispatchFunc;
  }
};

export const createAPI = (onUnauthorized) => {
  let requestsInWorkCount = 0;

  const api = axios.create({
    baseURL: BASE_SERVER_URL,
    timeout: 60000,
    withCredentials: true,
  });

  const onSuccess = (response) => {
    if (--requestsInWorkCount === 0) {
      dispatch(AppActionCreator.showLoader(false));
    }
    return response;
  }

  const onFail = (err) => {
    const {response} = err;
    let errorText = ``;
    dispatch(AppActionCreator.showLoader(false));
    if (!response) {
      addMessage(createMessage(MessageType.ERROR,`Ошибка`, err.message))
      return;
    }

    switch (response?.status) {
      case ServerError.UNAUTHORIZED:
        onUnauthorized();
        // Бросаем ошибку, потому что нам важно прервать цепочку промисов после истечения токена.
        throw err;
      case ServerError.NOT_FOUND:
        errorText = `(Код ошибки: 404) Используется не существующий метод. Попробуйте очистить кеш или позвоните нам`;
        break;
      case ServerError.NOT_ALLOWED:
        errorText = `(Код ошибки: 405) Используется устаревший метод. Попробуйте очистить кеш или позвоните нам`;
        break;
      case ServerError.INTERNAL_SERVER:
        errorText = `(Код ошибки: 500) Произошла непредвиденная ошибка в работе сервера. Позвоните нам или попробуйте позднее`;
        break;
    }
    if (errorText) {
      addMessage(createMessage(MessageType.ERROR,`Ошибка`, errorText))
    }

    return Promise.reject(err);
  };

  const onSent = (config) => {
    // Для отключения лоадера для конкретного запроса последним параметром
    // в методе запроса вызвать функцию disableLoader()
    // api.post(ServerURL.url, data, disableLoader())
    requestsInWorkCount++
    if (!config[DISABLE_LOADER]) {
      dispatch(AppActionCreator.showLoader(true));
    }

    return config;
  };

  const onReject = (err) => {
    requestsInWorkCount = 0;
    dispatch(AppActionCreator.showLoader(false));
    return Promise.reject(err);
  };

  api.interceptors.request.use(onSent, onReject);
  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export const setAPIAuthHeaders = (api, token) => {
  try {
    if (token) {
      api.defaults.headers.common.Authorization = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common.Authorization;
    }
  } catch (err) {
    console.log(err.name);
    console.log(err.message);
  }

}
