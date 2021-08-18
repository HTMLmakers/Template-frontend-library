import React from "react";

import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import Tag from "../../../../common/components/ui-kit/info-tags/Tag/Tag";
import Status, {DataAttrType} from "../../../../common/components/ui-kit/info-tags/Status/Status";
import Priority, {DataAttrTypePriority} from "../../../../common/components/ui-kit/info-tags/Priority/Priority";
import MarkPrimary from "../../../../common/components/ui-kit/marks/MarkPrimary/MarkPrimary";

import {ReactComponent as IconRefresh16} from "../../../../common/assets/img/icons/svg/16/icon-refresh-16.svg";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import {ReactComponent as IconCheck16} from "../../../../common/assets/img/icons/svg/16/icon-check-16.svg";

const InfoTagsPartial = () => {
  return (
    <section className="components-library__element tags-library">
      <h3 className="components-library__heading h3">
        Info-tags
      </h3>

      {/* ==========================================================================
         Tag
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: gray-tertiary (default)
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Tag</th>
            <th colSpan="3"><small>Color theme: gray-tertiary (default)</small></th>
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
              <div className="wrap">

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                     text="Tag"
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                     text="Tag"
                     placeAfter={<MarkPrimary colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY} value="4" />}
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                     text="Tag"
                     placeBefore={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                     text="Tag"
                     placeAfter={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                     text="Tag"
                     placeBefore={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                     text="Tag"
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                     text="Tag"
                     placeAfter={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                     text="Tag"
                     placeBefore={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                     text="Tag"
                     placeAfter={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                     text="Tag"
                     placeBefore={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
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

        {/* Color theme: gray-tertiary-light (default)
          ========================================================================== */}
        <thead>
        <tr>
          <th className="name"></th>
          <th colSpan="3"><small>Color theme: gray-tertiary-light (default)</small></th>
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
              <div className="wrap">

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY_LIGHT}
                     text="Tag"
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY_LIGHT}
                     text="Tag"
                     placeAfter={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.DEFAGRAY_TERTIARY_LIGHTULT_LIGHT}
                     text="Tag"
                     placeBefore={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY_LIGHT}
                     text="Tag"
                     placeAfter={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY_LIGHT}
                     text="Tag"
                     placeBefore={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY_LIGHT}
                     text="Tag"
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY_LIGHT}
                     text="Tag"
                     placeAfter={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY_LIGHT}
                     text="Tag"
                     placeBefore={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY_LIGHT}
                     text="Tag"
                     placeAfter={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.GRAY_TERTIARY_LIGHT}
                     text="Tag"
                     placeBefore={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
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

        {/* Color theme: blue-primary-light
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: blue-primary-light</small></th>
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
              <div className="wrap">

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                     text="Tag"
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                     text="Tag"
                     placeAfter={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                     text="Tag"
                     placeBefore={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                     text="Tag"
                     placeAfter={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                     text="Tag"
                     placeBefore={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                     text="Tag"
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                     text="Tag"
                     placeAfter={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                     text="Tag"
                     placeBefore={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                     text="Tag"
                     placeAfter={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                     text="Tag"
                     placeBefore={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
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

        {/* Color theme: red-primary-light
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: red-primary-light</small></th>
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
              <div className="wrap">

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                     text="Tag"
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                     text="Tag"
                     placeAfter={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                     text="Tag"
                     placeBefore={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                     text="Tag"
                     placeAfter={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
                />

                <Tag size={DataAttrSize.L}
                     colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                     text="Tag"
                     placeBefore={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                     text="Tag"
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                     text="Tag"
                     placeAfter={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                     text="Tag"
                     placeBefore={<MarkPrimary value="4" />}
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                     text="Tag"
                     placeAfter={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
                />

                <Tag size={DataAttrSize.M}
                     colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                     text="Tag"
                     placeBefore={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
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
        <tr>
          <td className="name"></td>

          {/*L*/}
          <td>
            <div className="wrap">

              <Tag size={DataAttrSize.L}
                   colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                   text="Tag"
              />

              <Tag size={DataAttrSize.L}
                   colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                   text="Tag"
                   placeAfter={<MarkPrimary value="4" />}
              />

              <Tag size={DataAttrSize.L}
                   colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                   text="Tag"
                   placeBefore={<MarkPrimary value="4" />}
              />

              <Tag size={DataAttrSize.L}
                   colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                   text="Tag"
                   placeAfter={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
              />

              <Tag size={DataAttrSize.L}
                   colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                   text="Tag"
                   placeBefore={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
              />

            </div>
          </td>

          {/*M*/}
          <td>
            <div className="wrap">

              <Tag size={DataAttrSize.M}
                   colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                   text="Tag"
              />

              <Tag size={DataAttrSize.M}
                   colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                   text="Tag"
                   placeAfter={<MarkPrimary value="4" />}
              />

              <Tag size={DataAttrSize.M}
                   colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                   text="Tag"
                   placeBefore={<MarkPrimary value="4" />}
              />

              <Tag size={DataAttrSize.M}
                   colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                   text="Tag"
                   placeAfter={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
              />

              <Tag size={DataAttrSize.M}
                   colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                   text="Tag"
                   placeBefore={<Icon size={DataAttrSize.S} icon={<IconRefresh16/>} />}
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
         Status
         ========================================================================== */}
      <table className="components-library__type">

        {/* Color theme: blue-primary-light
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Status</th>
            <th colSpan="3"><small>Color theme: blue-primary-light</small></th>
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
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                />

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16/>} />}
                />

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16/>} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                />

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16/>} />}
                />

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16/>} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type LIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type EXTRALIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.BLUE_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
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
        <tbody>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status orange"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                />

                <Status text="Status orange"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                <Status text="Status orange"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />
              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status orange"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                />

                <Status text="Status orange"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                <Status text="Status orange"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type LIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status orange"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status orange"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type EXTRALIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.ORANGE_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
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

        {/* Color theme: velvet-primary-light
            ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: velvet-primary-light</small></th>
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
              <div className="wrap">

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type LIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type EXTRALIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.VELVET_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
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

        {/* Color theme: gray-secondary-light
            ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: gray-secondary-light</small></th>
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
              <div className="wrap">

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type LIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status gray"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status gray"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type EXTRALIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GRAY_SECONDARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
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

        {/* Color theme: green-primary-light
            ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: green-primary-light</small></th>
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
              <div className="wrap">

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type LIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status green"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status green"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type EXTRALIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
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

        {/* Color theme: red-primary-light
            ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: red-primary-light</small></th>
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
              <div className="wrap">

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type LIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status red"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status red"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type EXTRALIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.RED_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
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

        {/* Color theme: yellow-primary-light
            ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: yellow-primary-light</small></th>
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
              <div className="wrap">

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                <Status text="Status velvet"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type LIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status yellow"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status yellow"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                        type={DataAttrType.LIGHT}
                />

              </div>
            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
          <tr>
            <td className="name">type EXTRALIGHT</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
                />

                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

                <Status text="Status blue"
                        size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.YELLOW_PRIMARY_LIGHT}
                        type={DataAttrType.EXTRALIGHT}
                        placeAfter={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
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
         Priority
         ========================================================================== */}
      <table className="components-library__type">

        {/* type: HIGH
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Priority</th>
            <th colSpan="3"><small>Color theme: blue-dark-secondary</small></th>
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
            <td className="name">type HIGH</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Priority size={DataAttrSize.L}
                          type={DataAttrTypePriority.HIGH}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Priority size={DataAttrSize.M}
                          type={DataAttrTypePriority.HIGH}
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

        {/* type: MEDIUM
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
          <tr>
            <td className="name">type MEDIUM</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Priority size={DataAttrSize.L}
                          type={DataAttrTypePriority.MEDIUM}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Priority size={DataAttrSize.M}
                          type={DataAttrTypePriority.MEDIUM}
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

        {/* type: LOW
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: gray-secondary</small></th>
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
            <td className="name">type LOW</td>

            {/*L*/}
            <td>
              <div className="wrap">

                <Priority size={DataAttrSize.L}
                          type={DataAttrTypePriority.LOW}
                />

              </div>
            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Priority size={DataAttrSize.M}
                          type={DataAttrTypePriority.LOW}
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

    </section>
  )
};

export default InfoTagsPartial;
