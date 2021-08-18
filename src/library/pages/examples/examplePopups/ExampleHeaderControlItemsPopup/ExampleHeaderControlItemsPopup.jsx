import React, {useEffect} from "react";

import {DataAttrColorTheme, DataAttrSize} from "../../../../../common/services/consts/common";
import CustomPopup from "../../../../../common/components/ui-kit/popups/CustomPopup";
import SectionPrimary from "../../../../../common/components/ui-kit/wraps/SectionPrimary/SectionPrimary";
import ButtonPrimary from "../../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import Icon from "../../../../../common/components/ui-kit/icons/Icon/Icon";
import {ControlFixedPos} from "../../../../../common/components/common/ControlListAdaptive/ControlListAdaptive";

import {ReactComponent as IconLists24} from "../../../../../common/assets/img/icons/svg/24/icon-lists-24.svg";


const headerControlItems = [
  {
    id: 1,
    components: [<ButtonPrimary colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                placeBefore={<Icon size={DataAttrSize.M} icon={<IconLists24 />} />}/>],
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

const ExampleHeaderControlItemsPopup = (props) => {
  const { isOpen, close, ...rest } = props;

  return (
    <CustomPopup isOpen={isOpen}
                 close={close}
                 isHideClose
                 heading={'Попап с дополнительными контролами'}
                 headerControlItems={headerControlItems}
                 renderBodyComponent={(setDataPopup) => (<DefaultPopupBody />)}
                 {...rest}
    />
  )
};

export default ExampleHeaderControlItemsPopup;
