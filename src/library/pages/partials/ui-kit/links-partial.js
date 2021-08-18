import React from "react";

import {DataAttrColorTheme, DataAttrSize, DataAttrState} from "../../../../common/services/consts/common";
import LinkPrimary from "../../../../common/components/ui-kit/links/LinkPrimary/LinkPrimary";
import LinkSecondary from "../../../../common/components/ui-kit/links/LinkSecondary/LinkSecondary";
import LinkTertiary from "../../../../common/components/ui-kit/links/LinkTertiary/LinkTertiary";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";

import {ReactComponent as IconEdit16} from "../../../../common/assets/img/icons/svg/16/icon-edit-16.svg";
import {ReactComponent as IconTrash24} from "../../../../common/assets/img/icons/svg/24/icon-trash-24.svg";
import MarkPrimary from "../../../../common/components/ui-kit/marks/MarkPrimary/MarkPrimary";


const LinksPartial = () => {
  return (
    <section className="components-library__element links-library">
      <h3 className="components-library__heading h3">
        Links
      </h3>

      {/* ==========================================================================
         Link primary
         ========================================================================== */}

      <table className="components-library__type">

        {/* Color theme: blue-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Link primary</th>
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

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
                             placeAfter={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
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

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             state={DataAttrState.HOVER}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
                             state={DataAttrState.HOVER}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             state={DataAttrState.HOVER}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
                             state={DataAttrState.HOVER}
                             placeAfter={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             state={DataAttrState.HOVER}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
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

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             state={DataAttrState.ACTIVE}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
                             state={DataAttrState.ACTIVE}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             state={DataAttrState.ACTIVE}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
                             state={DataAttrState.ACTIVE}
                             placeAfter={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             state={DataAttrState.ACTIVE}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
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

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             state={DataAttrState.DISABLED}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
                             state={DataAttrState.DISABLED}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             state={DataAttrState.DISABLED}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
                             state={DataAttrState.DISABLED}
                             placeAfter={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             state={DataAttrState.DISABLED}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
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

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
                             placeAfter={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.BLUE_LIGHT_PRIMARY}
                             isUnderline
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

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
                             placeAfter={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
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

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             state={DataAttrState.HOVER}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
                             state={DataAttrState.HOVER}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             state={DataAttrState.HOVER}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
                             state={DataAttrState.HOVER}
                             placeAfter={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             state={DataAttrState.HOVER}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
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

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             state={DataAttrState.ACTIVE}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
                             state={DataAttrState.ACTIVE}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             state={DataAttrState.ACTIVE}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
                             state={DataAttrState.ACTIVE}
                             placeAfter={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             state={DataAttrState.ACTIVE}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
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

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             state={DataAttrState.DISABLED}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
                             state={DataAttrState.DISABLED}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             state={DataAttrState.DISABLED}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
                             state={DataAttrState.DISABLED}
                             placeAfter={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             state={DataAttrState.DISABLED}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
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

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             placeBefore={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.L}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
                             placeAfter={<Icon size={DataAttrSize.S} icon={<IconEdit16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                />

                <LinkPrimary text="Link"
                             size={DataAttrSize.M}
                             colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                             isUnderline
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
         Link secondary
         ========================================================================== */}

      <table className="components-library__type">

        {/* Color theme: gray-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Link secondary</th>
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

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                />

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                />

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
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

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                               state={DataAttrState.HOVER}
                />

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                               state={DataAttrState.HOVER}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                               state={DataAttrState.HOVER}
                />

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
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

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                               state={DataAttrState.ACTIVE}
                />

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                               state={DataAttrState.ACTIVE}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                               state={DataAttrState.ACTIVE}
                />

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
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

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                               state={DataAttrState.DISABLED}
                />

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                               state={DataAttrState.DISABLED}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                               state={DataAttrState.DISABLED}
                />

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
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

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                />

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeBefore={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                />

                <LinkSecondary text="Link secondary"
                               size={DataAttrSize.M}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<Icon icon={<IconTrash24 />} size={DataAttrSize.M} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>
      </table>

      {/* ==========================================================================
         Link tertiary
         ========================================================================== */}

      <table className="components-library__type">

        {/* Color theme: gray-primary!!!!!!!!!!!!
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">LinkTertiary</th>
            <th colSpan="3"><small>Color theme: gray-primary!!!!!!!!!!!!</small></th>
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

                <LinkTertiary text="Link tertiary"
                               size={DataAttrSize.L}
                               colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                               placeAfter={<MarkPrimary value="4" size={DataAttrSize.M} colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY} />}
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

                <LinkTertiary text="Link tertiary"
                              size={DataAttrSize.L}
                              colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                              placeAfter={<MarkPrimary value="4" size={DataAttrSize.M} colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY} />}
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

                <LinkTertiary text="Link tertiary"
                              size={DataAttrSize.L}
                              colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                              placeAfter={<MarkPrimary value="4" size={DataAttrSize.M} colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY} />}
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

          {/*Behavior ----------*/}
          <tr className="behavior">
            <td className="name">Behavior</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <LinkTertiary text="Link tertiary"
                              size={DataAttrSize.L}
                              colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                              placeAfter={<MarkPrimary value="4" size={DataAttrSize.M} colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY} />}
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
    </section>
  )
};

export default LinksPartial;
