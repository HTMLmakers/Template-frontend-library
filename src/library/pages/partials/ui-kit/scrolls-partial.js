import React from "react";

import Scroll from "../../../../common/components/ui-kit/Scroll/Scroll";


const ScrollsPartial = () => {
  return (
    <section className="components-library__element scrolls-library">
      <h3 className="components-library__heading h3">
        Scrolls
      </h3>

      <table className="components-library__type">

        {/* Color theme: gray-secondary (default)
          ========================================================================== */}
        <thead>
          <tr>
            <th className="name">Scroll</th>
            <th colSpan="3"><small>Color theme: gray-secondary (default)</small></th>
          </tr>
          <tr>
            <th className="name"></th>
            <th><small>L</small></th>
            <th><small>M</small></th>
            <th><small>S</small></th>
          </tr>
        </thead>
        <tbody>

          {/*Inactive ----------*/}
          <tr>
            <td className="name"></td>

            {/*L*/}
            <td>

              <Scroll>
                <div style={{height:"300px"}}></div>
              </Scroll>

            </td>

            {/*M*/}
            <td>

            </td>

            {/*S*/}
            <td>
              <div className="wrap">

              </div>
            </td>
          </tr>
        </tbody>

      </table>
    </section>
  )
};

export default ScrollsPartial;
