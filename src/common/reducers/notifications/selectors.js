import NameSpace from "../NameSpace";

const NAME_SPACE = NameSpace.NOTIFICATIONS;

export const getNotifications = (state) => {
  return state[NAME_SPACE].notifications;
}

export const getNotificationsPagination = (state) => {
  return state[NAME_SPACE].pagination;
}

export const getIsNotifyShow = (state) => {
  return state[NAME_SPACE].isNotifyShow;
}
