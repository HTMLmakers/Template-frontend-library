import React from "react";

import Widget from "../../../../common/components/common/Widget/Widget";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import IconWrap from "../../../../common/components/ui-kit/icons/IconWrap/IconWrap";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import Value from "../../../../common/components/ui-kit/texts/Value/Value";
import Status, {DataAttrType} from "../../../../common/components/ui-kit/info-tags/Status/Status";

import {ReactComponent as IconCertificate40} from "../../../../common/assets/img/icons/svg/40/icon-certificate-40.svg";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import {ReactComponent as IconCheck16} from "../../../../common/assets/img/icons/svg/16/icon-check-16.svg";
import {ReactComponent as IconQuestion24} from "../../../../common/assets/img/icons/svg/24/icon-question-24.svg";

import ImgBanner from "../../../../common/assets/img/temp/banner.png";

const PlaceComponentsContent1 = () => {
  return (
    <>
      <Value text="00:02 / 04:32" size={DataAttrSize.L}/>
      <Status text="Завершено"
              size={DataAttrSize.L}
              colorTheme={DataAttrColorTheme.GREEN_PRIMARY_LIGHT}
              type={DataAttrType.EXTRALIGHT}
              placeBefore={<Icon size={DataAttrSize.S} icon={<IconCheck16 />} />}
      />
      <Icon size={DataAttrSize.M}
            icon={<IconQuestion24 />} />
    </>
  )
};

const PlaceComponentsContent2 = () => {
  return (
    <>
      <Value text="1 250₽" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.GRAY_PRIMARY}/>
      <ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/>
    </>
  )
};

const PlaceComponentsContent3 = () => {
  return (
    <>
      <Value text="1 250₽" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.INHERIT}/>
      <ButtonPrimary text="Кнопка" size={DataAttrSize.S} colorTheme={DataAttrColorTheme.BLUE_SECONDARY}/>
    </>
  )
};


const WidgetsPartial = () => {
  return (
    <section className="components-library__element widgets-library">
      <h3 className="components-library__heading h3">
        Widgets
      </h3>

      <table className="components-library__type">

        {/* Color theme: white (default)
          ========================================================================== */}

        {/*L*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="2"><small>Color theme: white (default)</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name">addIcon</td>
            <td>

              <Widget size={DataAttrSize.L}
                      heading="Работайте вместе!"
                      desc="Корпоративный доступ на месяц"
                      placeComponents={<PlaceComponentsContent1 />}
                      placeIcon={<IconWrap size={DataAttrSize.XL} colorTheme={DataAttrColorTheme.GRAY_QUATERNARY} icon={<Icon size="l" colorTheme="blue-primary" icon={<IconCertificate40/>}/>}/>}
              />

            </td>

            <td>

              <Widget size={DataAttrSize.M}
                      heading="Работайте вместе!"
                      desc="Корпоративный доступ на месяц"
                      placeComponents={<PlaceComponentsContent1 />}
                      placeIcon={<IconWrap size={DataAttrSize.XL} colorTheme={DataAttrColorTheme.GRAY_QUATERNARY} icon={<Icon size="l" colorTheme="blue-primary" icon={<IconCertificate40/>}/>}/>}
              />

            </td>
          </tr>
        </tbody>

        <tbody className="bg-darker">
          <tr>
            <td className="name">addImage</td>
            <td>

              <Widget size={DataAttrSize.L}
                      heading="Работайте вместе!"
                      desc="Корпоративный доступ на месяц"
                      placeComponents={<PlaceComponentsContent2 />}
                      placeImage={ImgBanner}
              />

            </td>

            <td>

              <Widget size={DataAttrSize.M}
                      heading="Работайте вместе!"
                      desc="Корпоративный доступ на месяц"
                      placeComponents={<PlaceComponentsContent2 />}
                      placeImage={ImgBanner}
              />

            </td>
          </tr>
        </tbody>

        {/* Color theme: blue-light-secondary
          ========================================================================== */}

        {/*L*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="2"><small>Color theme: blue-light-secondary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>
            <td>

              <Widget size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.BLUE_LIGHT_SECONDARY}
                      heading="Работайте вместе!"
                      desc="Корпоративный доступ на месяц"
                      placeComponents={<PlaceComponentsContent3 />}
                      placeImage={ImgBanner}
              />

            </td>
            <td>

              <Widget size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.BLUE_LIGHT_SECONDARY}
                      heading="Работайте вместе!"
                      desc="Корпоративный доступ на месяц"
                      placeComponents={<PlaceComponentsContent3 />}
                      placeImage={ImgBanner}
              />

            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default WidgetsPartial;
