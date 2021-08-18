import React from "react";


import WorkerInfoBar from "../../../../common/components/common/WorkerInfoBar/WorkerInfoBar";
import Image from "../../../../common/assets/img/temp/avatar.jpg";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import Tag from "../../../../common/components/ui-kit/info-tags/Tag/Tag";


const ArrayComponents = [
  <Tag size={DataAttrSize.L}
       colorTheme={DataAttrColorTheme.GREEN_PRIMARY}
       text="Сегодня: 9:00 - 18:00"
  />,

  <Tag size={DataAttrSize.L}
       colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
       text="сантехник"
  />,

  <Tag size={DataAttrSize.L}
       colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
       text="электрик"
  />,

  <Tag size={DataAttrSize.L}
       colorTheme={DataAttrColorTheme.GRAY_TERTIARY}
       text="слесарь"
  />
]

const WorkerInfoBars = () => {
  return (
    <section className="components-library__element worker-info-bar-library">
      <h3 className="components-library__heading h3">
        WorkerInfoBar
      </h3>

      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}

        {/*L*/}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="1"><small>Color theme: default</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
            <td className="name"></td>
            <td>

              <WorkerInfoBar size="l"
                             avatar={Image}
                             name="Толстокожев Вячеслав Филиппович"
                             desc="работник / добавлен 21 фев. 2020"
                             placeComponents={ArrayComponents}
              />

            </td>
          </tr>
        </tbody>

        {/*M*/}
        <thead>
          <tr>
            <th className="name"></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>M</small></th>
          </tr>
        </thead>
        <tbody className="bg-darker">
          <tr>
          <td className="name"></td>
          <td>

            <WorkerInfoBar size="m"
                           avatar={Image}
                           name="Толстокожев Вячеслав Филиппович"
                           desc="работник / добавлен 21 фев. 2020"
                           placeComponents={ArrayComponents}
            />

          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
};

export default WorkerInfoBars;
