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

const ExampleNoClosePopup = (props) => {
  const { isOpen, close, ...rest } = props;

  return (
    <CustomPopup isOpen={isOpen}
                 close={close}
                 isHideClose
                 heading={'Попап без кнопоки закрытия в header'}
                 renderBodyComponent={(setDataPopup) => (<DefaultPopupBody />)}
                 {...rest}
    />
  )
};

export default ExampleNoClosePopup;
