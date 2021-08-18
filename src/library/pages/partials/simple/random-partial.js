import React from "react";

import Random from "../../../../common/components/common/Random/Random";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import IconWrap from "../../../../common/components/ui-kit/icons/IconWrap/IconWrap";
import Avatar from "../../../../common/components/common/Avatar/Avatar";
import DateTime from "../../../../common/components/common/DateTime/DateTime";

import {ReactComponent as IconUser24} from "../../../../common/assets/img/icons/svg/24/icon-user-24.svg";
import {ReactComponent as IconCalendar24} from "../../../../common/assets/img/icons/svg/24/icon-calendar-24.svg";
import {ReactComponent as IconUsers24} from "../../../../common/assets/img/icons/svg/24/icon-users-24.svg";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import {ReactComponent as IconArrowsThreeCircle24} from "../../../../common/assets/img/icons/svg/24/icon-arrows-three-circle-24.svg";
import {ReactComponent as IconCheck16} from "../../../../common/assets/img/icons/svg/16/icon-check-16.svg";


const RandomPartial = () => {
  return (
    <section className="components-library__element random-library">
      <h3 className="components-library__heading h3">
        Random
      </h3>

      <table className="components-library__type">

        {/* Color theme: gray-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: gray-primary</small></th>
          </tr>
        <tr>
          <th className="name">not Filled</th>
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

              <Random size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                      textPrimary="Не назначен"
                      textControl="изменить"
                      placeBefore={<IconWrap size={DataAttrSize.XL} colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT} icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />} />}
              />

            </td>

            {/*M*/}
            <td>

              <Random size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                      textPrimary="Не назначен"
                      textControl="изменить"
                      placePic={<IconWrap colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT} icon={ <Icon size={DataAttrSize.M} icon={<IconUser24 />} />} />}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <Random size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                      textPrimary="Не выбран"
                      textControl="изменить"
                      placePic={<IconWrap colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT} icon={ <Icon size={DataAttrSize.M} icon={<IconCalendar24 />} />} />}
              />

            </td>

            {/*M*/}
            <td>

              <Random size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                      textPrimary="Не выбран"
                      textControl="изменить"
                      placePic={<IconWrap colorTheme={DataAttrColorTheme.GRAY_PRIMARY_LIGHT} icon={ <Icon size={DataAttrSize.M} icon={<IconCalendar24 />} />} />}
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
            <th className="name">Filled</th>
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

              <Random size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      textPrimary="Алексей Колесников"
                      textSecondary="управляющий"
                      textControl="изменить"
                      placePic={<Avatar colorTheme={DataAttrColorTheme.ORANGE_PRIMARY} text="AN" />}
              />

            </td>

            {/*M*/}
            <td>

              <Random size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      textPrimary="Алексей Колесников"
                      textSecondary="управляющий"
                      textControl="изменить"
                      placePic={<Avatar colorTheme={DataAttrColorTheme.ORANGE_PRIMARY} text="AN" />}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <Random size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      textPrimary="Розанов Мариан Илларионович"
                      textSecondary="сантехник, электрик,..."
                      counter="+2"
                      placePic={<Avatar colorTheme={DataAttrColorTheme.ORANGE_PRIMARY} text="AN" />}
              />

            </td>

            {/*M*/}
            <td>

              <Random size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      textPrimary="Розанов Мариан Илларионович"
                      textSecondary="сантехник, электрик,..."
                      counter="+2"
                      placePic={<Avatar colorTheme={DataAttrColorTheme.ORANGE_PRIMARY} text="AN" />}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <Random size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                      textPrimary="Милехин Стакрат Георгиевич"
                      placeDescBefore={<Icon size={DataAttrSize.S}
                                             icon={<IconCheck16 />}
                                       />}
                      textSecondary="отправлено приглашение"
                      placePic={<Avatar colorTheme={DataAttrColorTheme.ORANGE_PRIMARY} text="AN" />}
              />

            </td>

            {/*M*/}
            <td>

              <Random size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                      textPrimary="Милехин Стакрат Георгиевич"
                      placeDescBefore={<Icon size={DataAttrSize.S}
                                             icon={<IconCheck16 />}
                      />}
                      textSecondary="отправлено приглашение"
                      placePic={<Avatar colorTheme={DataAttrColorTheme.ORANGE_PRIMARY} text="AN" />}
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <Random size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      textPrimary="Алексей Колесников"
                      textSecondary="управляющий"
                      textControl="изменить"
                      placePic={<IconWrap colorTheme={DataAttrColorTheme.GRAY_QUATERNARY} icon={<Icon size={DataAttrSize.M} icon={<IconUsers24 />}/>} />}
              />

            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Random size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                        textPrimary="Алексей Колесников"
                        textSecondary="управляющий"
                        textControl="изменить"
                        placePic={<IconWrap colorTheme={DataAttrColorTheme.GRAY_QUATERNARY} icon={<Icon size={DataAttrSize.M} icon={<IconUsers24 />}/>} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <Random size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      textPrimary={<DateTime size={DataAttrSize.M} date="22 янв. 2021" time="в 12:30" />}
                      //textSecondary="управляющий"
                      textControl="изменить"
                      placePic={<IconWrap colorTheme={DataAttrColorTheme.GRAY_QUATERNARY} icon={<Icon size={DataAttrSize.M} icon={<IconCalendar24 />}/>} />}
              />

            </td>

            {/*M*/}
            <td>
              <div className="wrap">

                <Random size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                        textPrimary={<DateTime size={DataAttrSize.M} date="22 янв. 2021" time="в 12:30" />}
                        textControl="изменить"
                        placePic={<IconWrap colorTheme={DataAttrColorTheme.GRAY_QUATERNARY} icon={<Icon size={DataAttrSize.M} icon={<IconCalendar24 />} />} />}
                />

              </div>
            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <Random size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      textPrimary="Высокий"
                      textSecondary="72 часа"
                      textControl="изменить"
                      placePic={<IconWrap colorTheme={DataAttrColorTheme.GRAY_QUATERNARY} icon={<Icon size={DataAttrSize.S} icon={<IconArrowsThreeCircle24 />} />} />}
              />

            </td>

            {/*M*/}
            <td>
              <Random size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      textPrimary="Высокий"
                      textSecondary="72 часа"
                      textControl="изменить"
                      placePic={<IconWrap colorTheme={DataAttrColorTheme.GRAY_QUATERNARY} icon={<Icon size={DataAttrSize.S} icon={<IconArrowsThreeCircle24 />} />} />}
              />
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

export default RandomPartial;
