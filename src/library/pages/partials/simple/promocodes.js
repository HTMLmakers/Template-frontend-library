import React from "react";

import Promocode from "../../../../common/components/common/Promocode/Promocode";
import {ReactComponent as IconCheck16} from "../../../../common/assets/img/icons/svg/16/icon-check-16.svg";
import Icon from "../../../../common/components/ui-kit/icons/Icon/Icon";
import {ReactComponent as IconStatusBlock16} from "../../../../common/assets/img/icons/svg/16/icon-status-block-16.svg";


const Promocodes = () => {
  return (
    <section className="components-library__element promocode-library">
      <h3 className="components-library__heading h3">
        Promocode
      </h3>

      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: default</small></th>
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

              <Promocode />

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

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
        <tbody className="bg-darker">
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <Promocode desc="STATUS"
                         icon={<Icon size="s" colorTheme="green-primary" icon={<IconCheck16 />} />}
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
        <tbody className="bg-darker">
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <Promocode desc="STATUS"
                         icon={<Icon size="s" colorTheme="red-primary" icon={<IconStatusBlock16 />} />}
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

export default Promocodes;
