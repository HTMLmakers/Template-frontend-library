import React from "react";

import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import DateTime from "../../../../common/components/common/DateTime/DateTime";

const DataTimePartial = () => {
  return (
    <section className="components-library__element date-time-library">
      <h3 className="components-library__heading h3">
        DateTime
      </h3>

      <table className="components-library__type">

        {/* Color theme: inherit (default)
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: inherit (default)</small></th>
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

              <DateTime size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.INHERIT}
                        date="22 янв. 2021"
                        time="в 12:30"
              />

            </td>

            {/*M*/}
            <td>

              <DateTime size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.INHERIT}
                        date="22 янв. 2021"
                        time="в 12:30"
              />

            </td>

            {/*S*/}
            <td>

              <DateTime size={DataAttrSize.S}
                        colorTheme={DataAttrColorTheme.INHERIT}
                        date="22 янв. 2021"
                        time="в 12:30"
              />

            </td>
          </tr>

          <tr>
            <td className="name">isWrap</td>

            {/*L*/}
            <td>

              <DateTime size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.INHERIT}
                        date="22 янв. 2021"
                        time="в 12:30"
                        isWrap
              />

            </td>

            {/*M*/}
            <td>

              <DateTime size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.INHERIT}
                        date="22 янв. 2021"
                        time="в 12:30"
                        isWrap
              />

            </td>

            {/*S*/}
            <td>

              <DateTime size={DataAttrSize.S}
                        colorTheme={DataAttrColorTheme.INHERIT}
                        date="22 янв. 2021"
                        time="в 12:30"
                        isWrap
              />

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
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <DateTime size={DataAttrSize.L}
                        colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                        date="22 янв. 2021"
                        time="в 12:30"
              />

            </td>

            {/*M*/}
            <td>

              <DateTime size={DataAttrSize.M}
                        colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                        date="22 янв. 2021"
                        time="в 12:30"
              />

            </td>

            {/*S*/}
            <td>

              <DateTime size={DataAttrSize.S}
                        colorTheme={DataAttrColorTheme.GRAY_PRIMARY}
                        date="22 янв. 2021"
                        time="в 12:30"
              />

            </td>
          </tr>
        </tbody>

        {/* Color theme: blue-dark-secondary
          ========================================================================== */}
        <thead>
        <tr>
          <th className="name"></th>
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
          <td className="name"></td>

          {/*L*/}
          <td>

            <DateTime size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      date="22 янв. 2021"
                      time="в 12:30"
            />

          </td>

          {/*M*/}
          <td>

            <DateTime size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      date="22 янв. 2021"
                      time="в 12:30"
            />

          </td>

          {/*S*/}
          <td>

            <DateTime size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      date="22 янв. 2021"
                      time="в 12:30"
            />

          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
};

export default DataTimePartial;
