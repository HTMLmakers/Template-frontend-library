import React, {useState} from "react";

import Select from "../../../../common/components/common/forms/fields/form-fields/Select/Select";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import {ReactComponent as IconUser24} from "../../../../common/assets/img/icons/svg/24/icon-user-24.svg";


const Selects = () => {
  const [selectedOption, setSelectedOption] = useState(``);
  const [selectedOption2, setSelectedOption2] = useState(``);

  return (
    <section className="components-library__element selects-library">
      <h3 className="components-library__heading h3">
        Selects
      </h3>

      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}

        {/*M*/}
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
        <tbody>
        <tr>
          <td className="name"></td>
          <td>

            <Select
              isButtonTrigger
              isSorting
              handleSorting={(sorting) => console.log(sorting, `111`)}
              isSearchable
              options={[
                {value: `1`, label: `опция 1`},
                {value: `2`, label: `опция 2`},
                {value: `3`, label: `опция 3`},
                {value: `4`, label: `опция 4`},
                {value: `5`, label: `опция 5`},
                {value: `6`, label: `опция 6`},
              ]}
              value={selectedOption}
              onChange={setSelectedOption}
            />

          </td>
        </tr>
        <tr>
          <td className="name"></td>
          <td>

            <Select
              triggerText="Выбрано: "
              isButtonTrigger
              isSearchable
              options={[
                {value: `1`, label: `опция 1`},
                {value: `2`, label: `опция 2`},
                {value: `3`, label: `опция 3`},
                {value: `4`, label: `опция 4`},
                {value: `5`, label: `опция 5`},
                {value: `6`, label: `опция 6`},
              ]}
              value={selectedOption2}
              onChange={setSelectedOption2}
              triggerColorTheme={DataAttrColorTheme.RED_PRIMARY}
              triggerPlaceBefore={<Icon size={DataAttrSize.M} icon={<IconUser24 />} handleClick={() => {
                console.log(`222`)
              }}/>}
            />

          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
};

export default Selects;
