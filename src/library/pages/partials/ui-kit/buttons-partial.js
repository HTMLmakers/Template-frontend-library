import React from "react";

import {
  DataAttrBg,
  DataAttrColorTheme,
  DataAttrSize,
  DataAttrState,
  DataAttrWidth
} from "../../../../common/services/consts/common";

import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import ButtonUser from "../../../../common/components/ui-kit/buttons/ButtonUser/ButtonUser";
import ButtonComplex from "../../../../common/components/ui-kit/buttons/ButtonComplex/ButtonComplex";
import ButtonTab from "../../../../common/components/ui-kit/buttons/ButtonTab/ButtonTab";
import ButtonIcon from "../../../../common/components/ui-kit/buttons/ButtonIcon/ButtonIcon";
import MarkPrimary from "../../../../common/components/ui-kit/marks/MarkPrimary/MarkPrimary";
import Avatar from "../../../../common/components/common/Avatar/Avatar";

import {ReactComponent as IconPlus24} from "../../../../common/assets/img/icons/svg/24/icon-plus-24.svg";
import {ReactComponent as IconBasket24} from "../../../../common/assets/img/icons/svg/24/icon-basket-24.svg";
import {ReactComponent as IconIncomingCall24} from "../../../../common/assets/img/icons/svg/24/icon-incoming-call-24.svg";
import {ReactComponent as IconPlus16} from "../../../../common/assets/img/icons/svg/16/icon-plus-16.svg";
import {ReactComponent as IconDropdown8} from "../../../../common/assets/img/icons/svg/8/icon-dropdown-8.svg";
import {ReactComponent as IconAddUser16} from "../../../../common/assets/img/icons/svg/16/icon-add-user-16.svg";
import {ReactComponent as IconSearch24} from "../../../../common/assets/img/icons/svg/24/icon-search-24.svg";
import {ReactComponent as IconAlarmClock40} from "../../../../common/assets/img/icons/svg/40/icon-alarm-clock-40.svg";


const ButtonsPartial = () => {
  return (
    <section className="components-library__element buttons-library">
      <h3 className="components-library__heading h3">
        Buttons
      </h3>

      {/* ==========================================================================
         Button primary
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: blue-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Primary</th>
            <th colSpan="3"><small>Color theme: blue-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>
          </tr>

          {/*Fullwidth ----------*/}
          <tr>
            <td className="name">Fullwidth</td>

            {/*L*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*M*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*S*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>
          </tr>

          {/*markNotice ----------*/}
          <tr>
            <td className="name">markNotice</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               isMarkNotice
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               isMarkNotice
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               isMarkNotice
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                               isMarkNotice
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               isMarkNotice
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               isMarkNotice
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               isMarkNotice
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               isMarkNotice
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               isMarkNotice
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               isMarkNotice
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               isMarkNotice
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               isMarkNotice
                />

              </div>
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: blue-secondary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: blue-secondary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>
          </tr>

          {/*Fullwidth ----------*/}
          <tr>
            <td className="name">Fullwidth</td>

            {/*L*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*M*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*S*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.BLUE_SECONDARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: gray-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: gray-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>
          </tr>

          {/*Fullwidth ----------*/}
          <tr>
            <td className="name">Fullwidth</td>

            {/*L*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*M*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*S*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
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

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
              />

              <ButtonPrimary size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
              />

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             state={DataAttrState.HOVER}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             state={DataAttrState.HOVER}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             state={DataAttrState.HOVER}
              />

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             state={DataAttrState.HOVER}
              />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             state={DataAttrState.HOVER}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             state={DataAttrState.HOVER}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             state={DataAttrState.HOVER}
              />

              <ButtonPrimary size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             state={DataAttrState.HOVER}
              />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             state={DataAttrState.HOVER}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                             state={DataAttrState.HOVER}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             state={DataAttrState.HOVER}
              />

              <ButtonPrimary size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                             state={DataAttrState.HOVER}
              />

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             state={DataAttrState.ACTIVE}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             state={DataAttrState.ACTIVE}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             state={DataAttrState.ACTIVE}
              />

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             state={DataAttrState.ACTIVE}
              />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             state={DataAttrState.ACTIVE}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             state={DataAttrState.ACTIVE}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             state={DataAttrState.ACTIVE}
              />

              <ButtonPrimary size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             state={DataAttrState.ACTIVE}
              />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             state={DataAttrState.ACTIVE}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                             state={DataAttrState.ACTIVE}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             state={DataAttrState.ACTIVE}
              />

              <ButtonPrimary size={DataAttrSize.S}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                             state={DataAttrState.ACTIVE}
              />

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             state={DataAttrState.DISABLED}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             state={DataAttrState.DISABLED}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             state={DataAttrState.DISABLED}
              />

              <ButtonPrimary size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             state={DataAttrState.DISABLED}
              />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             state={DataAttrState.DISABLED}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             state={DataAttrState.DISABLED}
              />

              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             state={DataAttrState.DISABLED}
              />

              <ButtonPrimary size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             state={DataAttrState.DISABLED}
              />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>
          </tr>

          {/*Fullwidth ----------*/}
          <tr>
            <td className="name">Fullwidth</td>

            {/*L*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*M*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*S*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: white-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: white-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>
          </tr>

          {/*isBeforeSeparator ----------*/}
          <tr>
            <td className="name">isBeforeSeparator</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Text:"
                               textValue="text value"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               isBeforeSeparator
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Text:"
                               textValue="text value"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               isBeforeSeparator
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Text:"
                               textValue="text value"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               isBeforeSeparator
                />

              </div>
            </td>
          </tr>

          {/*Fullwidth ----------*/}
          <tr>
            <td className="name">Fullwidth</td>

            {/*L*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*M*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*S*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.WHITE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: red-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: red-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>
          </tr>

          {/*Fullwidth ----------*/}
          <tr>
            <td className="name">Fullwidth</td>

            {/*L*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.RED_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*M*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.RED_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*S*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.RED_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: green-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: green-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>
          </tr>

          {/*Fullwidth ----------*/}
          <tr>
            <td className="name">Fullwidth</td>

            {/*L*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*M*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*S*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: orange-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: orange-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>
          </tr>

          {/*Fullwidth ----------*/}
          <tr>
            <td className="name">Fullwidth</td>

            {/*L*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*M*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*S*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: velvet-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: velvet-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<><Icon size={DataAttrSize.M} icon={<IconPlus24 />} /></>}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>
          </tr>

          {/*Fullwidth ----------*/}
          <tr>
            <td className="name">Fullwidth</td>

            {/*L*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.L}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*M*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.M}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*S*/}
            <td>
              <ButtonPrimary text="Button"
                             size={DataAttrSize.S}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                             placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                             colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconPlus24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

                <ButtonPrimary text="Button"
                               size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonPrimary size={DataAttrSize.S}
                               colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.S} icon={<IconPlus16 />} />}
                />

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: orange-primary-light
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: orange-primary-light</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="2 050₽"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="2 050₽"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="2 050₽"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="2 050₽"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="2 050₽"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="2 050₽"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*markNotice ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="2 050₽"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                               isMarkNotice
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                               isMarkNotice
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="2 050₽"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                               isMarkNotice
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                               isMarkNotice
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="2 050₽"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                />

                <ButtonPrimary size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonPrimary text="2 050₽"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                />

                <ButtonPrimary size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconBasket24 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         Button complex
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: blue-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Complex</th>
            <th colSpan="3"><small>Color theme: blue-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonComplex textPrimary="На линии:"
                               textSecondary="04:32:27"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                />

                <ButtonComplex textPrimary="На линии:"
                               textSecondary="04:32:27"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex textPrimary="На линии:"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonComplex textPrimary="На линии:"
                               textSecondary="04:32:27"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonComplex textPrimary="На линии:"
                               textSecondary="04:32:27"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.HOVER}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex textPrimary="На линии:"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.HOVER}
                               placeAfter={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.HOVER}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonComplex textPrimary="На линии:"
                               textSecondary="04:32:27"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonComplex textPrimary="На линии:"
                               textSecondary="04:32:27"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.ACTIVE}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex textPrimary="На линии:"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.ACTIVE}
                               placeAfter={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.ACTIVE}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24/>} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonComplex textPrimary="На линии:"
                               textSecondary="04:32:27"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonComplex textPrimary="На линии:"
                               textSecondary="04:32:27"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.DISABLED}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex textPrimary="На линии:"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.DISABLED}
                               placeAfter={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               state={DataAttrState.DISABLED}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Fullwidth ----------*/}
          <tr>
            <td className="name">Fullwidth</td>

            {/*L*/}
            <td>
              <ButtonComplex textPrimary="На линии:"
                             textSecondary="04:32:27"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                             width={DataAttrWidth.FULL_WIDTH}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
              />
            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonComplex textPrimary="На линии:"
                               textSecondary="04:32:27"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                />

                <ButtonComplex textPrimary="На линии:"
                               textSecondary="04:32:27"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex textPrimary="На линии:"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: red-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: red-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonComplex textPrimary="Off-line:"
                               textSecondary="00:00:00"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                />

                <ButtonComplex textPrimary="Off-line:"
                               textSecondary="00:00:00"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex textPrimary="Off-line:"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonComplex textPrimary="Off-line:"
                               textSecondary="00:00:00"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               state={DataAttrState.HOVER}
                />

                <ButtonComplex textPrimary="Off-line:"
                               textSecondary="00:00:00"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonComplex textPrimary="Off-line:"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                               state={DataAttrState.HOVER}
                />

                <ButtonComplex size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*L*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonComplex textPrimary="Off-line:"
                               textSecondary="00:00:00"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonComplex textPrimary="Off-line:"
                               textSecondary="00:00:00"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonComplex textPrimary="Off-line:"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                               state={DataAttrState.ACTIVE}
                />

                <ButtonComplex size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonComplex textPrimary="Off-line:"
                               textSecondary="00:00:00"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               state={DataAttrState.DISABLED}
                />

                <ButtonComplex textPrimary="Off-line:"
                               textSecondary="00:00:00"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonComplex textPrimary="Off-line:"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                               state={DataAttrState.DISABLED}
                />

                <ButtonComplex size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Fullwidth ----------*/}
          <tr>
            <td className="name">Fullwidth</td>

            {/*L*/}
            <td>
              <ButtonComplex textPrimary="Off-line:"
                             textSecondary="00:00:00"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.RED_PRIMARY}
                             placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                             width={DataAttrWidth.FULL_WIDTH}
              />
            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonComplex textPrimary="Off-line:"
                               textSecondary="00:00:00"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                />

                <ButtonComplex textPrimary="Off-line:"
                               textSecondary="00:00:00"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex textPrimary="Off-line:"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeAfter={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

                <ButtonComplex size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.RED_PRIMARY}
                               placeBefore={<Icon size={DataAttrSize.M} icon={<IconIncomingCall24 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         Button user
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">User</th>
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

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonUser size={DataAttrSize.L}
                            textPrimary="Name"
                            textSecondary="Add text:"
                            placeBefore={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ"/>}
                            placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonUser size={DataAttrSize.L}
                            textPrimary="Name"
                            placeBefore={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ"/>}
                            placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonUser size={DataAttrSize.L}
                            placeBefore={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ"/>}
                            placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonUser size={DataAttrSize.L}
                            textPrimary="Name"
                            textSecondary="Add text:"
                            placeBefore={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ"/>}
                            placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                            state={DataAttrState.HOVER}
                />

                <ButtonUser size={DataAttrSize.L}
                            textPrimary="Name"
                            placeBefore={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ"/>}
                            placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                            state={DataAttrState.HOVER}
                />

                <ButtonUser size={DataAttrSize.L}
                            placeBefore={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ"/>}
                            placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                            state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonUser size={DataAttrSize.L}
                            textPrimary="Name"
                            textSecondary="Add text:"
                            placeBefore={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ"/>}
                            placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                            state={DataAttrState.ACTIVE}
                />

                <ButtonUser size={DataAttrSize.L}
                            textPrimary="Name"
                            placeBefore={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ"/>}
                            placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                            state={DataAttrState.ACTIVE}
                />

                <ButtonUser size={DataAttrSize.L}
                            placeBefore={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ"/>}
                            placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                            state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Fullwidth ----------*/}
          <tr>
            <td className="name">Fullwidth</td>

            {/*L*/}
            <td>

              <ButtonUser size={DataAttrSize.L}
                          textPrimary="User name"
                          textSecondary="Add text:"
                          placeBefore={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ"/>}
                          placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                          width={DataAttrWidth.FULL_WIDTH}
              />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonUser size={DataAttrSize.L}
                            textPrimary="Name"
                            textSecondary="Add text:"
                            placeBefore={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ"/>}
                            placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonUser size={DataAttrSize.L}
                            textPrimary="Name"
                            placeBefore={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ"/>}
                            placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

                <ButtonUser size={DataAttrSize.L}
                            placeBefore={<Avatar size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_PRIMARY} bg={DataAttrBg.ROTATE_0} text="КВ"/>}
                            placeAfter={<Icon size={DataAttrSize.XS} icon={<IconDropdown8 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         Button tab
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}
        <thead>
        <tr>
          <th className="name">Tab</th>
          <th colSpan="3"><small>Color theme: Default </small></th>
        </tr>
        <tr>
          <th className="name"></th>
          <th><small>L</small></th>
          <th><small>M</small></th>
          <th><small>S</small></th>
        </tr>
        </thead>
        <tbody className="bg-darker">

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                />

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           placeAfter={<MarkPrimary value="4" />}
                />

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           isSelection
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                />

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           placeAfter={<MarkPrimary value="4" />}
                />

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           isSelection
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           state={DataAttrState.HOVER}
                />

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           placeAfter={<MarkPrimary value="4" />}
                           state={DataAttrState.HOVER}
                />

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           isSelection
                           state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           state={DataAttrState.HOVER}
                />

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           placeAfter={<MarkPrimary value="4" />}
                           state={DataAttrState.HOVER}
                />

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           isSelection
                           state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           state={DataAttrState.ACTIVE}
                />

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           placeAfter={<MarkPrimary value="4" />}
                           state={DataAttrState.ACTIVE}
                />

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           isSelection
                           state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           state={DataAttrState.ACTIVE}
                />

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           placeAfter={<MarkPrimary value="4" />}
                           state={DataAttrState.ACTIVE}
                />

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           isSelection
                           state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           state={DataAttrState.DISABLED}
                />

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           placeAfter={<MarkPrimary value="4" />}
                           state={DataAttrState.DISABLED}
                />

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           isSelection
                           state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           state={DataAttrState.DISABLED}
                />

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           placeAfter={<MarkPrimary value="4" />}
                           state={DataAttrState.DISABLED}
                />

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           isSelection
                           state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>

          {/*Current ----------*/}
          <tr>
            <td className="name">Current</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           state={DataAttrState.CURRENT}
                />

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           placeAfter={<MarkPrimary value="4" />}
                           state={DataAttrState.CURRENT}
                />

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           isSelection
                           state={DataAttrState.CURRENT}
                />

              </div>
            </td>

            {/*M*/}
            <td>

              <div className="wrap">

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           state={DataAttrState.CURRENT}
                />

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           placeAfter={<MarkPrimary value="4" />}
                           state={DataAttrState.CURRENT}
                />

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           isSelection
                           state={DataAttrState.CURRENT}
                />

              </div>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>

          {/*Fullwidth ----------*/}
          <tr>
            <td className="name">Fullwidth</td>

            {/*L*/}
            <td>

              <ButtonTab size={DataAttrSize.L}
                         text="Tab name"
                         placeAfter={<MarkPrimary value="4" />}
                         isSelection
                         width={DataAttrWidth.FULL_WIDTH}
              />

            </td>

            {/*M*/}
            <td>

              <ButtonTab size={DataAttrSize.M}
                         text="Tab name"
                         placeAfter={<MarkPrimary value="4" />}
                         isSelection
                         width={DataAttrWidth.FULL_WIDTH}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                />

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           placeAfter={<MarkPrimary value="4" />}
                />

                <ButtonTab size={DataAttrSize.L}
                           text="Tab name"
                           isSelection
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                />

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           placeAfter={<MarkPrimary value="4" />}
                />

                <ButtonTab size={DataAttrSize.M}
                           text="Tab name"
                           isSelection
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         Button icon
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Icon</th>
            <th><small>Color theme: Default </small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name">Inactive</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <ButtonIcon placePic={<Icon size={DataAttrSize.S} icon={<IconAddUser16 />} />}/>

                <ButtonIcon placePic={<Icon size={DataAttrSize.M} icon={<IconSearch24 />} />}/>

                <ButtonIcon placePic={<Icon size={DataAttrSize.L} icon={<IconAlarmClock40 />} />}/>

              </div>
            </td>
          </tr>

          {/*Hover ----------*/}
          <tr>
            <td className="name">Hover</td>
            <td>
              <div className="wrap">

                <ButtonIcon placePic={<Icon size={DataAttrSize.S} icon={<IconAddUser16 />} />}
                            state={DataAttrState.HOVER}
                />

                <ButtonIcon placePic={<Icon size={DataAttrSize.M} icon={<IconSearch24 />} />}
                            state={DataAttrState.HOVER}
                />

                <ButtonIcon placePic={<Icon size={DataAttrSize.L} icon={<IconAlarmClock40 />} />}
                            state={DataAttrState.HOVER}
                />

              </div>
            </td>
          </tr>

          {/*Pressed ----------*/}
          <tr>
            <td className="name">Pressed</td>
            <td>
              <div className="wrap">

                <ButtonIcon placePic={<Icon size={DataAttrSize.S} icon={<IconAddUser16 />} />}
                            state={DataAttrState.ACTIVE}
                />

                <ButtonIcon placePic={<Icon size={DataAttrSize.M} icon={<IconSearch24 />} />}
                            state={DataAttrState.ACTIVE}
                />

                <ButtonIcon placePic={<Icon size={DataAttrSize.L} icon={<IconAlarmClock40 />} />}
                            state={DataAttrState.ACTIVE}
                />

              </div>
            </td>
          </tr>

          {/*Disabled ----------*/}
          <tr>
            <td className="name">Disabled</td>
            <td>
              <div className="wrap">

                <ButtonIcon placePic={<Icon size={DataAttrSize.S} icon={<IconAddUser16 />} />}
                            state={DataAttrState.DISABLED}
                />

                <ButtonIcon placePic={<Icon size={DataAttrSize.M} icon={<IconSearch24 />} />}
                            state={DataAttrState.DISABLED}
                />

                <ButtonIcon placePic={<Icon size={DataAttrSize.L} icon={<IconAlarmClock40 />} />}
                            state={DataAttrState.DISABLED}
                />

              </div>
            </td>
          </tr>

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>
            <td>
              <div className="wrap">

                <ButtonIcon placePic={<Icon size={DataAttrSize.S} icon={<IconAddUser16 />} />} />

                <ButtonIcon placePic={<Icon size={DataAttrSize.M} icon={<IconSearch24 />} />} />

                <ButtonIcon placePic={<Icon size={DataAttrSize.L} icon={<IconAlarmClock40 />} />} />

              </div>
            </td>
          </tr>
        </tbody>
      </table>

    </section>
  )
};

export default ButtonsPartial;
