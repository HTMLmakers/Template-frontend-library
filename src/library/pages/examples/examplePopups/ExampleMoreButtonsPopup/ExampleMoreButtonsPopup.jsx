import React, {useEffect} from "react";
import CustomPopup from "../../../../../common/components/ui-kit/popups/CustomPopup";
import {AttrType, DataAttrColorTheme, DataAttrSize} from "../../../../../common/services/consts/common";
import SectionPrimary from "../../../../../common/components/ui-kit/wraps/SectionPrimary/SectionPrimary";
import ButtonPrimary from "../../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";


const DefaultPopupBody = ({setDataPopup, close}) => {
  return (
    <SectionPrimary>
      Компонент контента тела попапа. <br/><br/><br/>
    </SectionPrimary>
  )
};

const ExampleMoreButtonsPopup = (props) => {
  const { isOpen, close, ...rest } = props;

  return (
    <CustomPopup isOpen={isOpen}
                 close={close}
                 heading={'Больше кнопок'}
                 renderBodyComponent={(setDataPopup) => (<DefaultPopupBody />)}
                 renderButtonsBeforeComponent={(dataPopup, setDataPopup) => (
                   <>
                     <ButtonPrimary size={DataAttrSize.L}
                                    colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                    text={"Сохраняем"}
                                    handleClick={() => console.log(dataPopup.one)}
                     />
                     <ButtonPrimary text="Удаляем"
                                    size={DataAttrSize.L}
                                    colorTheme={DataAttrColorTheme.RED_PRIMARY}
                                    handleClick={() => console.log(dataPopup.two)}
                     />
                   </>
                 )}
                 renderButtonsAfterComponent={(dataPopup, setDataPopup) => (
                   <>
                     <ButtonPrimary text="Удаляем"
                                    size={DataAttrSize.L}
                                    colorTheme={DataAttrColorTheme.RED_PRIMARY}
                                    handleClick={() => console.log(dataPopup.two)}
                     />
                     <ButtonPrimary text="Сбросить"
                                    size={DataAttrSize.L}
                                    colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                                    handleClick={() => console.log(dataPopup.two)}
                     />
                   </>
                 )}
                 {...rest}
    />
  )
};

export default ExampleMoreButtonsPopup;
