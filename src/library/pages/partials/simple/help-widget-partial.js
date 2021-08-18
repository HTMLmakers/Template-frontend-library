import React from "react";

import HelpWidget from "../../../../common/components/common/HelpWidget/HelpWidget";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import {ReactComponent as IconSupport40} from "../../../../common/assets/img/icons/svg/40/icon-support-40.svg";
import IconWrap from "../../../../common/components/ui-kit/icons/IconWrap/IconWrap";
import ButtonPrimary from "../../../../common/components/ui-kit/buttons/ButtonPrimary/ButtonPrimary";
import {ReactComponent as IconMessage24} from "../../../../common/assets/img/icons/svg/24/icon-message-24.svg";


const Helps = () => {
  return (
    <section className="components-library__element help-library">
      <h3 className="components-library__heading h3">
        HelpWidget
      </h3>

      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
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

              <HelpWidget size={DataAttrSize.L}
                          title="Нужна помощь?"
                          desc="Звоните! С удовольствием вам поможем!"
                          additionalDesc="+7 (903) 941-02-27"
                          placePic={<IconWrap size={DataAttrSize.XL}
                                              colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                              icon={<Icon size={DataAttrSize.L}
                                                          colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                          icon={<IconSupport40 />}
                                              />}
                          />}
                          customTagName="a"
                          href="tel:+79039410227"
              />

            </td>

            {/*M*/}
            <td>

              <HelpWidget size={DataAttrSize.M}
                          title="Нужна помощь?"
                          desc="Звоните! С удовольствием вам поможем!"
                          additionalDesc="+7 (903) 941-02-27"
                          placePic={<IconWrap size={DataAttrSize.XL}
                                              colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                              icon={<Icon size={DataAttrSize.L}
                                                          colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                          icon={<IconSupport40 />}
                                              />}
                          />}
                          customTagName="a"
              />

            </td>

            {/*S*/}
            <td>

              <HelpWidget size={DataAttrSize.S}
                          placePic={<IconWrap size={DataAttrSize.XL}
                                              colorTheme={DataAttrColorTheme.GRAY_QUATERNARY}
                                              icon={<Icon size={DataAttrSize.L}
                                                          colorTheme={DataAttrColorTheme.VELVET_PRIMARY}
                                                          icon={<IconSupport40 />}
                                              />}
                          />}
                          customTagName="a"
              />

            </td>
          </tr>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <HelpWidget size={DataAttrSize.L}
                          title="Он-лайн консультация"
                          desc="Наши консультанты ответят вам в самое ближайшее время!"
                          placePic={<ButtonPrimary size={DataAttrSize.L}
                                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                   placeBefore={<Icon size={DataAttrSize.M} icon={<IconMessage24 />} />}
                                                   additionalClass="button-bitrix-widget"
                                                   customTagName="div"
                          />}
              />

            </td>

            {/*M*/}
            <td>

              <HelpWidget size={DataAttrSize.M}
                          title="Он-лайн консультация"
                          desc="Наши консультанты ответят вам в самое ближайшее время!"
                          placePic={<ButtonPrimary size={DataAttrSize.L}
                                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                   placeBefore={<Icon size={DataAttrSize.M} icon={<IconMessage24 />} />}
                                                   additionalClass="button-bitrix-widget"
                                                   customTagName="div"
                          />}
              />

            </td>

            {/*S*/}
            <td>

              <HelpWidget size={DataAttrSize.S}
                          title="Он-лайн консультация"
                          desc="Наши консультанты ответят вам в самое ближайшее время!"
                          placePic={<ButtonPrimary size={DataAttrSize.L}
                                                   colorTheme={DataAttrColorTheme.BLUE_PRIMARY}
                                                   placeBefore={<Icon size={DataAttrSize.M} icon={<IconMessage24 />} />}
                                                   additionalClass="button-bitrix-widget"
                                                   customTagName="div"
                          />}
              />

            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default Helps;
