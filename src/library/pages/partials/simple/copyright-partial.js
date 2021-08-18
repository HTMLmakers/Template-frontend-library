import React from "react";

import {DataAttrSize} from "../../../../common/services/consts/common";
import Copyright from "../../../../common/components/common/Copyright/Copyright";


const CopyrightPartial = () => {
  return (
    <section className="components-library__element сopyright-library">
      <h3 className="components-library__heading h3">
        Copyright
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


            </td>

            {/*M*/}
            <td>

              <Copyright size={DataAttrSize.M} />

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

export default CopyrightPartial;
