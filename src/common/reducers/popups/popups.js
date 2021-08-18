import {extendObject} from "../../services/utils/utils";

const initialState = {
  isConfirmationPopup: false,
  confirmationPopupTitle: ``,
  confirmationPopupText: ``,
  confirmationPopupIconSrcComponent: null,
  confirmationPopupMessageType: null,
  confirmationPopupSuccess: (data) => ``, //popupSuccess(action)
  isInformationPopup: false,
  informationPopupTitle: ``,
  informationPopupText: ``,
  informationPopupIconSrcComponent: null,
  informationPopupMessageType: null,
};

const ActionType = {
  SET_CONFIRMATION_POPUP: `SET_CONFIRMATION_POPUP`,
  SET_INFORMATION_POPUP: `SET_INFORMATION_POPUP`,
};

const ActionCreator = {
  setConfirmationPopup: (data) => ({
    type: ActionType.SET_CONFIRMATION_POPUP,
    payload: data,
  }),
  setInformationPopup: (data) => ({
    type: ActionType.SET_INFORMATION_POPUP,
    payload: data,
  }),
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.SET_CONFIRMATION_POPUP:
      return extendObject(state, action.payload)
    case ActionType.SET_INFORMATION_POPUP:
      return extendObject(state, action.payload)

    default: return state;
  }
};

export {reducer, ActionType, ActionCreator as PopupsActionCreator};