import React from "react";

import Logo from "../../../../common/components/common/Logo/Logo";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";


const LogoPartial = () => {
  return (
    <section className="components-library__element logo-library">
      <h3 className="components-library__heading h3">
        Logo
      </h3>

      <table className="components-library__type">

        {/* Color theme: blue-primary
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name"></th>
            <th colSpan="3"><small>Color theme: blue-primary</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M – 97×32px</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>


            </td>

            {/*M – 97×32px*/}
            <td>

              <Logo size={DataAttrSize.M}
                    customTag="a"
              />

            </td>

            {/*S*/}
            <td>

            </td>
          </tr>
        </tbody>

        {/* Color theme: white
          ========================================================================== */}
        <thead>
        <tr>
          <th className="name"></th>
          <th colSpan="3"><small>Color theme: white</small></th>
        </tr>
        <tr>
          <th className="name"></th>
          <th><small>L</small></th>
          <th><small>M – 97×32px</small></th>
          <th><small>S</small></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="name"></td>

          {/*L*/}
          <td>


          </td>

          {/*M – 97×32px*/}
          <td className="bg-darker-td">

            <Logo size={DataAttrSize.M}
                  colorTheme={DataAttrColorTheme.WHITE}
                  customTag="a"
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

export default LogoPartial;
