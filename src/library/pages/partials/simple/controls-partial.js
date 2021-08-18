import React from "react";

import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import ContextMenu from "../../../../common/components/common/controls/ContextMenu/ContextMenu";
import LinkSecondary from "../../../../common/components/ui-kit/links/LinkSecondary/LinkSecondary";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import ButtonClose from "../../../../common/components/common/controls/ButtonClose/ButtonClose";
import ButtonBurger from "../../../../common/components/common/controls/ButtonBurger/ButtonBurger";

import {ReactComponent as IconTrash24} from "../../../../common/assets/img/icons/svg/24/icon-trash-24.svg";

const dropdownContent = [
  {
    lists: [
      {id: 1, content: <LinkSecondary text="Link secondary" placeBefore={<Icon icon={<IconTrash24 />} />} href="http://lk.reestrdoma.ru/reestrdoma/" />, disabled: false},
      {id: 2, content: <LinkSecondary text="Link secondary" placeBefore={<Icon icon={<IconTrash24 />} />} customTagName="button" handleClick={() => console.log('действие по клику на кнопку')} />, disabled: false},
      {id: 3, content: <LinkSecondary text="Link secondary" placeBefore={<Icon icon={<IconTrash24 />} />} href="http://lk.reestrdoma.ru/reestrdoma/" />, disabled: false},
      {id: 4, content: <LinkSecondary text="Link secondary" placeBefore={<Icon icon={<IconTrash24 />} />} href="http://lk.reestrdoma.ru/reestrdoma/" />, disabled: false},
      {id: 5, content: <LinkSecondary text="Link secondary" placeBefore={<Icon icon={<IconTrash24 />} />} href="http://lk.reestrdoma.ru/reestrdoma/" />, disabled: false},
    ]
  },
];


const ControlsPartial = () => {
  return (
    <section className="components-library__element controls-library">
      <h3 className="components-library__heading h3">
        Controls
      </h3>

      {/* ==========================================================================
         ContextMenu
         ========================================================================== */}

      <table className="components-library__type">

        {/* Color theme: white
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">ContextMenu</th>
            <th colSpan="3"><small>Color theme: white</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <ContextMenu dropDownContent={dropdownContent}
                           size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.WHITE}
              />

            </td>

            {/*M*/}
            <td>

              <ContextMenu dropDownContent={dropdownContent}
                           size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.WHITE}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Color theme: gray-quaternary
            ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: gray-quaternary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <ContextMenu dropDownContent={dropdownContent}
                           size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
              />

            </td>

            {/*M*/}
            <td>

              <ContextMenu dropDownContent={dropdownContent}
                           size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         ButtonClose
         ========================================================================== */}

      <table className="components-library__type">

        {/* Color theme: white
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">ButtonClose</th>
            <th colSpan="3"><small>Color theme: white (default)</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <ButtonClose size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.WHITE}
              />

            </td>

            {/*M*/}
            <td>

              <ButtonClose size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.WHITE}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Color theme: blue-senary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: blue-senary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <ButtonClose size={DataAttrSize.L}
                           colorTheme={DataAttrColorTheme.BLUE_SENARY}
              />

            </td>

            {/*M*/}
            <td>

              <ButtonClose size={DataAttrSize.M}
                           colorTheme={DataAttrColorTheme.BLUE_SENARY}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         ButtonBurger
         ========================================================================== */}

      <table className="components-library__type">

        {/* Color theme: white (default)
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">ButtonBurger</th>
            <th colSpan="3"><small>Color theme: white (default)</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <ButtonBurger size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.WHITE}
              />

            </td>

            {/*M*/}
            <td>

              <ButtonBurger size={DataAttrSize.M}
                            colorTheme={DataAttrColorTheme.WHITE}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Color theme: blue-dark-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: blue-dark-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <ButtonBurger size={DataAttrSize.L}
                            colorTheme={DataAttrColorTheme.BLUE_DARK_PRIMARY}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default ControlsPartial;
