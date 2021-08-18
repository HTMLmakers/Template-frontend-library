import React from "react";

import CustomPopup from "../../../../../common/components/ui-kit/popups/CustomPopup";
import SectionPrimary from "../../../../../common/components/ui-kit/wraps/SectionPrimary/SectionPrimary";
import ButtonPrimary from "../../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import {DataAttrColorTheme, DataAttrSize} from "../../../../../common/services/consts/common";
import Icon from "../../../../../common/components/ui-kit/icons/Icon/Icon";
import ElementsWrap from "../../../../../common/components/ui-kit/wraps/ElementsWrap/ElementsWrap";
import {ControlFixedPos} from "../../../../../common/components/common/ControlListAdaptive/ControlListAdaptive";

import {ReactComponent as IconLists24} from "../../../../../common/assets/img/icons/svg/24/icon-lists-24.svg";
import {ReactComponent as IconPlus24} from "../../../../../common/assets/img/icons/svg/24/icon-plus-24.svg";


const headerControlItems = [
  {
    id: 1,
    components: [<ButtonPrimary size={DataAttrSize.M}
                                colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                placeBefore={<Icon size={DataAttrSize.M} icon={<IconLists24 />} />}/>],
    fixed: ControlFixedPos.START,
    isDisabled: false,
  },
  {
    id: 1,
    components: [<ButtonPrimary size={DataAttrSize.M}
                                colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}/>],
    fixed: ControlFixedPos.START,
    isDisabled: false,
  },
];

const DefaultPopupBody = ({setDataPopup, close}) => {
  return (
    <SectionPrimary>
      Компонент контента тела попапа. <br/><br/><br/>
    </SectionPrimary>
  )
};

const ExampleExtendedHeaderPopup = (props) => {
  const { isOpen, close, ...rest } = props;

  return (
    <CustomPopup isOpen={isOpen}
                 close={close}
                 heading={"Папап с расширенным header"}
                 headerDescText={"Дополнительный или пояснительный текст в header попапа"}
                 headerPlaceAfter={
                   <ElementsWrap>
                     <ButtonPrimary text="Button" size={DataAttrSize.M} colorTheme={DataAttrColorTheme.VELVET_PRIMARY}/>
                     <ButtonPrimary text="Button" size={DataAttrSize.M} colorTheme={DataAttrColorTheme.VELVET_PRIMARY} placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />} />
                   </ElementsWrap>
                 }
                 headerControlItems={headerControlItems}
                 renderBodyComponent={(setDataPopup) => (<DefaultPopupBody />)}
                 {...rest}
    />
  )
};

export default ExampleExtendedHeaderPopup;
