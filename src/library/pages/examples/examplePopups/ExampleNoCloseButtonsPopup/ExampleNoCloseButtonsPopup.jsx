import React from "react";

import CustomPopup from "../../../../../common/components/ui-kit/popups/CustomPopup";
import SectionPrimary from "../../../../../common/components/ui-kit/wraps/SectionPrimary/SectionPrimary";


const DefaultPopupBody = ({setDataPopup, close}) => {
  return (
    <SectionPrimary>
      Компонент контента тела попапа. <br/><br/><br/>
    </SectionPrimary>
  )
};

const ExampleNoCloseButtonsPopup = (props) => {
  const { isOpen, close, ...rest } = props;

  return (
    <CustomPopup isOpen={isOpen}
                 close={close}
                 isHideCloseButtons
                 heading={'Попап без кнопок закрытия'}
                 renderBodyComponent={(setDataPopup) => (<DefaultPopupBody />)}
                 {...rest}
    />
  )
};

export default ExampleNoCloseButtonsPopup;
