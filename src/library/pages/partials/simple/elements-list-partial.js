import React from "react";

import ElementsList from "../../../../common/components/common/ElementsList/ElementsList";
import Avatar from "../../../../common/components/common/Avatar/Avatar";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import Image from "../../../../common/assets/img/temp/avatar.jpg";
import Tag from "../../../../common/components/ui-kit/info-tags/Tag/Tag";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import IconWrap from "../../../../common/components/ui-kit/icons/IconWrap/IconWrap";
import {ReactComponent as IconUser24} from "../../../../common/assets/img/icons/svg/24/icon-user-24.svg";

const AvatarsArray = [
  <Avatar size={DataAttrSize.S}
          imageSrc={Image}
  />,

  <Avatar size={DataAttrSize.S}
          imageSrc={Image}
  />,

  <Avatar size={DataAttrSize.S}
          imageSrc={Image}
  />,

  <Avatar size={DataAttrSize.S}
          imageSrc={Image}
  />,

  <Avatar size={DataAttrSize.S}
          imageSrc={Image}
  />,

  <Avatar size={DataAttrSize.S}
          imageSrc={Image}
  />,

  <Avatar size={DataAttrSize.S}
          imageSrc={Image}
  />
];

const InfoTagsArray = [
  <Tag size={DataAttrSize.L}
       colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
       text="Аварийные службы"
  />,

  <Tag size={DataAttrSize.L}
       colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
       text="Операторы"
  />,

  <Tag size={DataAttrSize.L}
       colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
       text="Операторы"
  />,

  <Tag size={DataAttrSize.L}
       colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
       text="Операторы"
  />,
];

const IconWrapArray = [
  <IconWrap size={DataAttrSize.M}
            colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
  />,

  <IconWrap size={DataAttrSize.M}
            colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
  />,

  <IconWrap size={DataAttrSize.M}
            colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
  />,

  <IconWrap size={DataAttrSize.M}
            colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
  />,

  <IconWrap size={DataAttrSize.M}
            colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
  />,

  <IconWrap size={DataAttrSize.M}
            colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
            icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />}
  />,
];

const ElementsListPartial = () => {
  return (
    <section className="components-library__element сopyright-library">
      <h3 className="components-library__heading h3">
        Elements List
      </h3>

      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
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

              <ElementsList elements={AvatarsArray}
                            elementsCount = "4"
                            counterSize={DataAttrSize.XXL}
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

        {/* Color theme: default
        ========================================================================== */}
        <thead>
        <tr>
          <th className="name"></th>
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

            <ElementsList elements={InfoTagsArray}
                          elementsCount = "2"
                          counterSize={DataAttrSize.XL}
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

        {/* Color theme: default
        ========================================================================== */}
        <thead>
        <tr>
          <th className="name"></th>
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

            <ElementsList elements={IconWrapArray}
                          elementsCount = "4"
                          counterSize={DataAttrSize.XXL}
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

export default ElementsListPartial;
