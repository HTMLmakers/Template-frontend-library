import React from "react";

import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import Header from "../../../../common/components/layout/Header/Header";
import ButtonTab from "../../../../common/components/ui-kit/buttons/ButtonTab/ButtonTab";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import LinkSecondary from "../../../../common/components/ui-kit/links/LinkSecondary/LinkSecondary";

import {ReactComponent as IconDashboard24} from "../../../../common/assets/img/icons/svg/24/icon-dashboard-24.svg";
import {ReactComponent as IconLists24} from "../../../../common/assets/img/icons/svg/24/icon-lists-24.svg";
import {ReactComponent as IconArchive24} from "../../../../common/assets/img/icons/svg/24/icon-archive-24.svg";
import {ReactComponent as IconTrash24} from "../../../../common/assets/img/icons/svg/24/icon-trash-24.svg";
import LinkPrimary from "../../../../common/components/ui-kit/links/LinkPrimary/LinkPrimary";
import {ControlFixedPos} from "../../../../common/components/common/ControlListAdaptive/ControlListAdaptive";

/*Массив ссылок навигации */
const navItems = [
  {id: 1, name: `Link 1`, to: `/ui-kit`, mark: null, isDisabled: true},
  {id: 2, name: `Link 2`, to: `/simple-components`, mark: 2, isDisabled: false},
  {id: 3, name: `Link 3`, to: `/complex-components`, mark: 3, isDisabled: false},
  {id: 4, name: `Link 4`, to: `/layout-components`, mark: 4, isDisabled: false},
  {id: 5, name: `Link 5`, to: `/ui-kit`, mark: 5, isDisabled: false},
];

/*Массив дополнительных контролов */
const navControlItems = [
  <ButtonPrimary colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconDashboard24 />} />}
  />,
  <ButtonPrimary colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconDashboard24 />} />}
  />,
];


/*Массив контролов */
const ControlItemArray = [
  <ButtonPrimary colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconLists24 />} />}
  />,

  <ButtonPrimary colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconArchive24 />} />}
  />,
  <ButtonPrimary colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                 text={`asfsf`}
                 placeBefore={<Icon size={DataAttrSize.M} icon={<IconLists24 />} />}
  />,
  <LinkPrimary text="Link"
               size={DataAttrSize.L}
               colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
               isUnderline
  />
];

const headerControlItems = [
  {
    id: 1,
    components: [<ButtonPrimary colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                placeBefore={<Icon size={DataAttrSize.M} icon={<IconLists24 />} />}/>],
    fixed: ControlFixedPos.START,
    isDisabled: false,
  },
  {
    id: 2,
    components: [
      <ButtonPrimary colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                                placeBefore={<Icon size={DataAttrSize.M} icon={<IconLists24 />} />}
      />,
      <LinkSecondary text="Link secondary"
                     placeBefore={<Icon icon={<IconTrash24 />} />}
                     href="http://lk.reestrdoma.ru/reestrdoma/" />
    ],
    isDisabled: false,
  },
  {
    id: 3,
    components: [
      <ButtonPrimary colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                     placeBefore={<Icon size={DataAttrSize.M} icon={<IconLists24 />} />}
      />,
      <LinkSecondary text="Link secondary"
                     placeBefore={<Icon icon={<IconTrash24 />} />}
                     href="http://lk.reestrdoma.ru/reestrdoma/" />
    ],
    isDisabled: false,
  },
  {
    id: 4,
    components: [<ButtonPrimary colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                                placeBefore={<Icon size={DataAttrSize.M} icon={<IconLists24 />} />}/>],
    fixed: ControlFixedPos.END,
    isDisabled: true,
  },
];

/*Массив контролов в дропдауне */
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


const HeaderPartial = () => {

  return (
    <section className="components-library__element header-library">
      <h3 className="components-library__heading h3">
        Header
      </h3>

      <table className="components-library__type">

        {/* Size L
          ========================================================================== */}
        <thead>
          <tr>
            <th><small>L</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>

              <Header heading="Heading"
                      desc="Дополнительный или пояснительный текст"
                      placeNavAddControl={navControlItems}
                      placeNav={navItems}
                      controlItems={headerControlItems}
                      size={DataAttrSize.L}
                      isNavigation

              />

            </td>
          </tr>
        </tbody>

        {/* Size M
          ========================================================================== */}
        <thead>
          <tr>
            <th><small>M</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>

              <Header heading="Heading"
                      desc="Дополнительный или пояснительный текст"
                      placeNavAddControl={navControlItems}
                      placeNav={navItems}
                      controlItems={headerControlItems}
                      size={DataAttrSize.M}
                      isNavigation
              />

            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default HeaderPartial;
