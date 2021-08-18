import React from "react";

import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import PageNav from "../../../../common/components/common/nav/PageNav/PageNav";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import {ReactComponent as IconDashboard24} from "../../../../common/assets/img/icons/svg/24/icon-dashboard-24.svg";


const navItems = [
  {id: 1, name: `Link 1`, to: `/ui-kit`, mark: null, isDisabled: true},
  {id: 2, name: `Link 2`, to: `/simple-components`, mark: 2, isDisabled: false},
  {id: 3, name: `Link 3`, to: `/complex-components`, mark: 3, isDisabled: false},
  {id: 4, name: `Link 4`, to: `/layout`, mark: 4, isDisabled: false},
  {id: 5, name: `Link 5`, to: `/ui-kit`, mark: 5, isDisabled: false},
];

const navControlItems = [
  <ButtonPrimary colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconDashboard24 />} />}
  />,
  <ButtonPrimary colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconDashboard24 />} />}
  />,
];

const PageNavPartial = () => {
  return (
    <section className="components-library__element page-nav-library">
      <h3 className="components-library__heading h3">
        PageNav
      </h3>

      <table className="components-library__type">


        {/* Size L
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name"></td>
            <td>

              <PageNav size={DataAttrSize.L}
                       placeNav={navItems}
                       placeNavAddControl={navControlItems}
              />

            </td>
          </tr>
        </tbody>

        {/* Size M
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th><small>M</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name"></td>
            <td>

              <PageNav size={DataAttrSize.M}
                       placeNav={navItems}
                       placeNavAddControl={navControlItems}
              />

            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default PageNavPartial;
