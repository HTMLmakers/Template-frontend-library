import Routes from "./Routes";
import React, {useState} from "react";

import './styles/styles.scss';
import '../common/styles/styles.scss';
import Message from "../common/components/common/Message/Message";
import ConfirmationPopup from "../common/components/ui-kit/popups/ConfirmationPopup/ConfirmationPopup";
import BlockUiPopup from "../common/components/ui-kit/popups/BlockUiPopup/BlockUiPopup";
import InformationPopup from "../common/components/ui-kit/popups/InformationPopup/InformationPopup";
import {MessageType} from "../common/services/consts/common";
import CustomPopup from "../common/components/ui-kit/popups/CustomPopup";


export const ContextPopups = React.createContext(``);

function App() {

  const [popupsState, setPopupsState] = useState({
    isBlockUi: false,
    isConfirmationPopup: false,
    confirmationPopupTitle: ``,
    confirmationPopupText: ``,
    confirmationPopupIconSrcComponent: null,
    confirmationPopupMessageType: null,
    confirmationPopupSuccess: (data) => ``, //defaultPopupSuccess(action)
    isInformationPopup: false,
    informationPopupTitle: ``,
    informationPopupText: ``,
    informationPopupIconSrcComponent: null,
    informationPopupMessageType: null,
  });

  return (
    <>
      <BlockUiPopup isOpen={popupsState.isBlockUi}/>

      <ContextPopups.Provider value={[popupsState, setPopupsState]}>
        <Routes/>
      </ContextPopups.Provider >

      <Message/>

      <ConfirmationPopup isOpen={popupsState.isConfirmationPopup}
                         width={640}
                         heading={popupsState.confirmationPopupTitle}
                         iconSrcComponent={popupsState.confirmationPopupIconSrcComponent}
                         text={popupsState.confirmationPopupText}
                         messageType={popupsState.confirmationPopupMessageType}
                         success={popupsState.confirmationPopupSuccess}
                         close={() => setPopupsState({...popupsState, isConfirmationPopup: false})}
      />

      <InformationPopup isOpen={popupsState.isInformationPopup}
                        width={640}
                        heading={popupsState.informationPopupTitle}
                        iconSrcComponent={popupsState.informationPopupIconSrcComponent}
                        text={popupsState.informationPopupText}
                        messageType={popupsState.informationPopupMessageType}
                        close={() => setPopupsState({...popupsState, isInformationPopup: false})}
      />
    </>
  );
}

export default App;
