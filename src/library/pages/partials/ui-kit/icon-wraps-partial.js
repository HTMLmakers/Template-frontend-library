import React from "react";

import IconWrap from "../../../../common/components/ui-kit/icons/IconWrap/IconWrap";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";

import {ReactComponent as IconUser24} from "../../../../common/assets/img/icons/svg/24/icon-user-24.svg";
import {ReactComponent as IconUser40} from "../../../../common/assets/img/icons/svg/40/icon-file-40.svg";
import {ReactComponent as IconUser16} from "../../../../common/assets/img/icons/svg/16/icon-user-16.svg";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";

const IconWrapsPartial = () => {
  return (

    <section className="components-library__element icons-wrap-library">
      <h3 className="components-library__heading h3">
        Icon Wrap
      </h3>

      <table className="components-library__type">

        {/* Color theme: gray-primary-light
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="4"><small>Color theme: gray-primary-light</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XL</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>
            <td>

                <IconWrap size={DataAttrSize.XL}
                          colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                          icon={ <Icon size={DataAttrSize.L} icon={<IconUser40 />} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.M}
                          colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.S}
                          colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                          icon={ <Icon size={DataAttrSize.S} icon={<IconUser16 />} />}
                />

            </td>
          </tr>
          <tr>
            <td className="name">markNotice</td>

            {/*XL - 56×56px*/}
            <td>

                <IconWrap size={DataAttrSize.XL}
                          colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                          icon={ <Icon size={DataAttrSize.L} icon={<IconUser40 />} />}
                          isMarkNotice
                />

            </td>

            {/*L - 48×48px*/}
            <td>

                <IconWrap size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                          isMarkNotice
                />

            </td>

            {/*M - 40×40px*/}
            <td>

                <IconWrap size={DataAttrSize.M}
                          colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                          isMarkNotice
                />

            </td>

            {/*S - 32×32px*/}
            <td>

                <IconWrap size={DataAttrSize.S}
                          colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT}
                          icon={ <Icon size={DataAttrSize.S} icon={<IconUser16 />} />}
                          isMarkNotice
                />

            </td>
          </tr>
        </tbody>

        {/* Color theme: gray-secondary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="4"><small>Color theme: gray-secondary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XL</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>
            <td>

                <IconWrap size={DataAttrSize.XL}
                          colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                          icon={ <Icon size={DataAttrSize.L} icon={<IconUser40 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.M}
                          colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.S}
                          colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                          icon={ <Icon size={DataAttrSize.S} icon={<IconUser16 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
          </tr>
          <tr>
            <td className="name">markNotice</td>
            <td>

                <IconWrap size={DataAttrSize.XL}
                          colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                          icon={ <Icon size={DataAttrSize.L} icon={<IconUser40 />} colorTheme={DataAttrColorTheme.WHITE} />}
                          isMarkNotice
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                          isMarkNotice
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.M}
                          colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                          isMarkNotice
                />
>
            </td>
            <td>

                <IconWrap size={DataAttrSize.S}
                          colorTheme={DataAttrColorTheme.GRAY_SECONDARY}
                          icon={ <Icon size={DataAttrSize.S} icon={<IconUser16 />} colorTheme={DataAttrColorTheme.WHITE} />}
                          isMarkNotice
                />

            </td>
          </tr>
        </tbody>

        {/* Color theme: gray-tertiary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="4"><small>Color theme: gray-tertiary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XL</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>
            <td>

                <IconWrap size={DataAttrSize.XL}
                          colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                          icon={ <Icon size={DataAttrSize.L} icon={<IconUser40 />} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.M}
                          colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.S}
                          colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
                          icon={ <Icon size={DataAttrSize.S} icon={<IconUser16 />} />}
                />

            </td>
          </tr>
        </tbody>

        {/* Color theme: gray-quaternary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="4"><small>Color theme: gray-quaternary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XL</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>
            <td>

                <IconWrap size={DataAttrSize.XL}
                          colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                          icon={ <Icon size={DataAttrSize.L} icon={<IconUser40 />} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.M}
                          colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.S}
                          colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                          icon={ <Icon size={DataAttrSize.S} icon={<IconUser16 />} />}
                />

            </td>
          </tr>
        </tbody>

        {/* Color theme: blue-dark-secondary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="4"><small>Color theme: blue-dark-secondary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XL</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>

            {/*XL - 56×56px*/}
            <td>

                <IconWrap size={DataAttrSize.XL}
                          colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                          icon={ <Icon size={DataAttrSize.L} icon={<IconUser40 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>

            {/*L - 48×48px*/}
            <td>

                <IconWrap size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>

            {/*M - 40×40px*/}
            <td>

                <IconWrap size={DataAttrSize.M}
                          colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>

            {/*S - 32×32px*/}
            <td>

                <IconWrap size={DataAttrSize.S}
                          colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                          icon={ <Icon size={DataAttrSize.S} icon={<IconUser16 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
          </tr>
        </tbody>

        {/* Color theme: green-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="4"><small>Color theme: green-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XL</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>
            <td>

                <IconWrap size={DataAttrSize.XL}
                          colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                          icon={ <Icon size={DataAttrSize.L} icon={<IconUser40 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.M}
                          colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.S}
                          colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
                          icon={ <Icon size={DataAttrSize.S} icon={<IconUser16 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
          </tr>
        </tbody>

        {/* Color theme: orange-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="4"><small>Color theme: orange-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XL</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>
            <td>

                <IconWrap size={DataAttrSize.XL}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                          icon={ <Icon size={DataAttrSize.L} icon={<IconUser40 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.M}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.S}
                          colorTheme={DataAttrColorTheme.ORANGE_PRIMARY}
                          icon={ <Icon size={DataAttrSize.S} icon={<IconUser16 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
          </tr>
        </tbody>

        {/* Color theme: red-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="4"><small>Color theme: red-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XL</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>
            <td>

                <IconWrap size={DataAttrSize.XL}
                          colorTheme={DataAttrColorTheme.RED_PRIMARY}
                          icon={ <Icon size={DataAttrSize.L} icon={<IconUser40 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.RED_PRIMARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>
              <div className="wrap">
                <IconWrap size={DataAttrSize.M}
                          colorTheme={DataAttrColorTheme.RED_PRIMARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />
              </div>
            </td>
            <td>

                <IconWrap size={DataAttrSize.S}
                          colorTheme={DataAttrColorTheme.RED_PRIMARY}
                          icon={ <Icon size={DataAttrSize.S} icon={<IconUser16 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
          </tr>
        </tbody>

        {/* Color theme: velvet-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="4"><small>Color theme: velvet-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>XL</small></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>
            <td>

                <IconWrap size={DataAttrSize.XL}
                          colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                          icon={ <Icon size={DataAttrSize.L} icon={<IconUser40 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.L}
                          colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.M}
                          colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                          icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
            <td>

                <IconWrap size={DataAttrSize.S}
                          colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                          icon={ <Icon size={DataAttrSize.S} icon={<IconUser16 />} colorTheme={DataAttrColorTheme.WHITE} />}
                />

            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default IconWrapsPartial;



