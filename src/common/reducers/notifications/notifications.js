import {extendObject, getUniqueArrayObjects, ReplaceParameterInUrl} from "../../services/utils/utils";
import {ServerURL} from "../../services/consts/common";
import {getNotifications} from "./selectors";


const initialState = {
  notifications: [],
  pagination: {},
};

const ActionType = {
  SET_NOTIFICATIONS: `SET_NOTIFICATIONS`,
  UPDATE_NOTIFICATIONS: `UPDATE_NOTIFICATIONS`,
};

const ActionCreator = {
  setNotifications: (notifications, pagination) => ({
    type: ActionType.SET_NOTIFICATIONS,
    payload: {notifications, pagination}
  }),
  updateNotifications: (notifications) => ({
    type: ActionType.UPDATE_NOTIFICATIONS,
    payload: notifications
  }),
};

const Operation = {
  fetchNotifications: (page = 1, perPage = 15) => (dispatch, getState, api) => {
    return api.get(ReplaceParameterInUrl.pagination(ServerURL.NOTIFICATIONS, page, perPage)).then((response) => {
      const {data: notifications, links: pagination} = response.data;
      const notify = getNotifications(getState());

      dispatch(ActionCreator.setNotifications([...notify, ...getUniqueArrayObjects(notifications, notify, `id`)], pagination));
    })
  },
  updateNotifications: (notificationsIds) => (dispatch, getState, api) => {
    return api.put(ServerURL.UPDATE_NOTIFICATIONS, {notificationsIds}).then((response) => {
      const {data: notifications} = response.data;
      dispatch(ActionCreator.updateNotifications(notifications))
    })
  },
  updateNotify: (notifyId) => (dispatch, getState, api) => {
    return api.put(ReplaceParameterInUrl.id(ServerURL.UPDATE_NOTIFY, notifyId), {isRead: true}).then((response) => {
      const {data: notify} = response.data;

      const currentNotifications = getNotifications(getState());
      const oldNotifyIndex = currentNotifications.findIndex((it) => it.id === notify.id);
      const updatedNotifications = [...currentNotifications.slice(0, oldNotifyIndex), notify, ...currentNotifications.slice(oldNotifyIndex + 1)];

      dispatch(ActionCreator.updateNotifications(updatedNotifications))
    })
  },
  deleteNotifications: (notificationsIds) => (dispatch, getState, api) => {
    return api.post(ServerURL.UPDATE_NOTIFICATIONS, {notificationsIds}).then((response) => {
      dispatch(ActionCreator.setNotifications([], {}))
    })
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_NOTIFICATIONS:
      return extendObject(state, {
        notifications: action.payload.notifications,
        pagination: action.payload.pagination
      });
    case ActionType.UPDATE_NOTIFICATIONS:
      return extendObject(state, {
        notifications: action.payload
      });

    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator, Operation}