import {extendObject} from "../../services/utils/utils";
import {OtherSiteRoute, ServerURL} from "../../services/consts/common";

const initialState = {
  isLoaderShowing: false,
  openSidebarDropClassNames: [],
  slidePageGoBackPath: null,
  user: {},
  userStatistic: {},
  urlParameters: {},
};

const ActionType = {
  SHOW_LOADER: `SHOW_LOADER`,
  SET_OPEN_SIDEBAR_DROP_CLASS_NAMES: `SET_OPEN_SIDEBAR_DROP_CLASS_NAMES`,
  SET_SLIDE_PAGE_GO_BACK_PATH: `SET_SLIDE_PAGE_GO_BACK_PATH`,
  SET_URL_PARAMETERS: `SET_URL_PARAMETERS`,
  SET_USER: `SET_USER`,
  SET_USER_STATISTIC: `SET_USER_STATISTIC`,
};

const ActionCreator = {
  showLoader: (status) => ({
    type: ActionType.SHOW_LOADER,
    payload: status,
  }),
  setOpenSidebarDropClassNames: (classNames) => ({
    type: ActionType.SET_OPEN_SIDEBAR_DROP_CLASS_NAMES,
    payload: classNames,
  }),
  setSlidePageGoBackPath: (pathName) => ({
    type: ActionType.SET_SLIDE_PAGE_GO_BACK_PATH,
    payload: pathName,
  }),
  setUrlParameters: (parameters) => ({
    type: ActionType.SET_URL_PARAMETERS,
    payload: parameters,
  }),
  setUser: (user) => ({
    type: ActionType.SET_USER,
    payload: user,
  }),
  setUserStatistic: (userStatistic) => ({
    type: ActionType.SET_USER_STATISTIC,
    payload: userStatistic,
  }),
};

const Operation = {
  requestCallBack: (phone) => (dispatch, getState, api) => {
    return api.post(ServerURL.REQUEST_CALL_BACK, {phone})
  },
  fetchUser: () => (dispatch, getState, api) => {
  return api.get(ServerURL.USER)
    .then((response) => {
      const {data: user} = response.data;
      dispatch(ActionCreator.setUser(user));
    })
  },
  fetchUserStatistic: () => (dispatch, getState, api) => {
    return api.get(ServerURL.USER_STATISTIC)
      .then((response) => {
        const {data: userStatistic} = response.data;
        dispatch(ActionCreator.setUserStatistic(userStatistic));
      })
  },
  logout: () => (dispatch, getState, api) => {
    localStorage.removeItem(`token`);
    window.location = OtherSiteRoute.OLD_SITE
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SHOW_LOADER:
      return extendObject(state, {
        isLoaderShowing: action.payload,
      })
    case ActionType.SET_OPEN_SIDEBAR_DROP_CLASS_NAMES:
      return extendObject(state, {
        openSidebarDropClassNames: action.payload,
      })
    case ActionType.SET_SLIDE_PAGE_GO_BACK_PATH:
      return extendObject(state, {
        slidePageGoBackPath: action.payload,
      })
    case ActionType.SET_URL_PARAMETERS:
      return extendObject(state, {
        urlParameters: action.payload,
      })
    case ActionType.SET_USER:
      return extendObject(state, {
        user: action.payload,
      });
    case ActionType.SET_USER_STATISTIC:
      return extendObject(state, {
        userStatistic : action.payload,
      });

    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator as AppActionCreator, Operation as AppOperation};
