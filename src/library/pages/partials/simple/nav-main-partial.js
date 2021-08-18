import React from "react";

import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import MainNav from "../../../../common/components/common/nav/MainNav/MainNav";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";

import {ReactComponent as IconChartLines24} from "../../../../common/assets/img/icons/svg/24/icon-chart-lines-24.svg";
import {ReactComponent as IconBuildings24} from "../../../../common/assets/img/icons/svg/24/icon-buildings-24.svg";
import {ReactComponent as IconRoseestr24} from "../../../../common/assets/img/icons/svg/24/icon-rosreestr-24.svg";
import {ReactComponent as IconSpeaker24} from "../../../../common/assets/img/icons/svg/24/icon-speaker-24.svg";
import {ReactComponent as IconCoin24} from "../../../../common/assets/img/icons/svg/24/icon-coin-24.svg";
import {ReactComponent as IconUsers24} from "../../../../common/assets/img/icons/svg/24/icon-users-24.svg";
import {ReactComponent as IconHeadphone24} from "../../../../common/assets/img/icons/svg/24/icon-headphone-24.svg";
import {ReactComponent as IconUser24} from "../../../../common/assets/img/icons/svg/24/icon-user-24.svg";
import {ReactComponent as IconQuestion24} from "../../../../common/assets/img/icons/svg/24/icon-question-24.svg";


const mainNavContent = [
  {
    id: 1,
    name: "Статистика",
    icon: <Icon icon={<IconChartLines24 />} />,
    to: "/simple",
    isDisabled: false,
  },

  {
    id: 2,
    name: "Мои дома",
    icon: <Icon icon={<IconBuildings24 />} />,
    to: "2",
    isDisabled: false,
  },

  {
    id: 3,
    name: "Выписки из ЕГРН",
    icon: <Icon icon={<IconRoseestr24 />} type={"stroke"} />,
    to: "3",
    isDisabled: false,
  },

  {
    id: 4,
    name: "Собрания жильцов",
    icon:  <Icon icon={<IconSpeaker24 />} />,
    to: "4",
    isDisabled: false,
  },

  {
    id: 5,
    name: "Дебиторская задолженность",
    icon: <Icon icon={<IconCoin24 />} />,
    to: "5",
    isDisabled: false,
  },

  {
    id: 6,
    name: "Компании и сотрудники",
    icon: <Icon icon={<IconUsers24 />} />,
    to: "6",
    isDisabled: false,
  },
  {
    id: 7,
    name: "Диспетчерская",
    icon: <Icon icon={<IconHeadphone24 />} />,
    to: "/simple-components",
    isDisabled: false,
    subLists: [
      {
        id: 71,
        name: "Заявки и задачи",
        icon: false,
        to: "/",
        isDisabled: false,
      },
      {
        id: 72,
        name: "Обработка звонков",
        icon: false,
        to: "/simple-components",
        isDisabled: false,
      },
      {
        id: 73,
        name: "Сотрудники и службы",
        icon: false,
        to: "/",
        isDisabled: false,
      },
      {
        id: 74,
        name: "Контакты",
        icon: false,
        to: "/",
        isDisabled: false,
      },
    ],
  },
  {
    id: 8,
    name: "Мой профиль",
    icon: <Icon icon={<IconUser24 />} />,
    to: "8",
    isDisabled: false,
  },
  {
    id: 9,
    name: "Справочная информация",
    icon: <Icon icon={<IconQuestion24 />} />,
    to: "9",
    isDisabled: false,
  },
];

const MainNavPartial = () => {
  return (
    <section className="components-library__element main-nav-library">
      <h3 className="components-library__heading h3">
        MainNav
      </h3>

      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}
        <thead>
        <tr>
          <th className="name"></th>
          <th colSpan="3"><small>Color theme: default</small></th>
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

            <MainNav size={DataAttrSize.L}
                     navContent={mainNavContent}
            />

          </td>

          {/*M*/}
          <td>

            <MainNav size={DataAttrSize.M}
                     navContent={mainNavContent}
            />

          </td>

          {/*S*/}
          <td>

            <MainNav size={DataAttrSize.S}
                     colorTheme={DataAttrColorTheme.BLUE_DARK_PRIMARY}
                     navContent={mainNavContent}
            />

          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
};

export default MainNavPartial;
