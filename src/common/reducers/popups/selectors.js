import NameSpace from "../NameSpace";

const NAME_SPACE = NameSpace.POPUPS;

export const getConfirmationPopupProps = (state) => {
  return ({
    isOpen: state[NAME_SPACE].isConfirmationPopup,
    heading: state[NAME_SPACE].confirmationPopupTitle,
    iconSrcComponent: state[NAME_SPACE].confirmationPopupIconSrcComponent,
    text: state[NAME_SPACE].confirmationPopupText,
    messageType: state[NAME_SPACE].confirmationPopupMessageType,
    success: state[NAME_SPACE].confirmationPopupSuccess,
  })
};

export const getInformationPopupProps = (state) => {
  return ({
    isOpen: state[NAME_SPACE].isInformationPopup,
    heading: state[NAME_SPACE].informationPopupTitle,
    iconSrcComponent: state[NAME_SPACE].informationPopupIconSrcComponent,
    text: state[NAME_SPACE].informationPopupText,
    messageType: state[NAME_SPACE].informationPopupMessageType,
  })
};
