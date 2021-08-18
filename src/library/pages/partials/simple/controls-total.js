import React from "react";
import ControlTotal from "../../../../common/components/common/ControlTotal/ControlTotal";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import {ReactComponent as IconPlus24} from "../../../../common/assets/img/icons/svg/24/icon-plus-24.svg";

const ArrayElements = [
  <ButtonPrimary size={DataAttrSize.L}
                 colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
  />,

  <ButtonPrimary size={DataAttrSize.L}
                 colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
  />,

  <ButtonPrimary size={DataAttrSize.L}
                 colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
  />,
]


const ControlsTotal = () => {
  return (
    <section className="components-library__element help-library">
      <h3 className="components-library__heading h3">
        Control Total
      </h3>

      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}

        {/*L*/}
        <thead>
        <tr>
          <th className="name"></th>
          <th colSpan="1"><small>Color theme: default</small></th>
        </tr>
        <tr>
          <th className="name"></th>
          <th><small>L</small></th>
        </tr>
        </thead>
        <tbody className="bg-darker">
        <tr>
          <td className="name"></td>
          <td>

            <ControlTotal placeControls={ArrayElements}
                          text="Найдено"
                          value="33"
                          link="отменить поиск"
            />

          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
};

export default ControlsTotal;
