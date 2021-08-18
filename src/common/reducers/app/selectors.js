import NameSpace from "../NameSpace";

const NAME_SPACE = NameSpace.APP;

export const getLoaderStatus = (state) => {
  return state[NAME_SPACE].isLoaderShowing;
}

export const getOpenSidebarDropClassNames = (state) => {
  return state[NAME_SPACE].openSidebarDropClassNames;
}

export const getSlidePageGoBackPath = (state) => {
  return state[NAME_SPACE].slidePageGoBackPath;
}

export const getUtmFromUrl = (state) => {
  return state[NAME_SPACE].urlParameters.utm;
}

export const getAddressFromUrl = (state) => {
  return state[NAME_SPACE].urlParameters.address;
}

export const getVKFromUrl = (state) => {
  return state[NAME_SPACE].urlParameters.VK;
}

export const getEmployeeInviteFromUrl = (state) => {
  return state[NAME_SPACE].urlParameters.employeeInvite;
}

export const getUser = (state) => {
  return state[NAME_SPACE].user;
};

export const getUserStatistic = (state) => {
  return state[NAME_SPACE].userStatistic;
};
