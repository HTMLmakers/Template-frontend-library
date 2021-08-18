import React from "react";

import SidebarDrop from "../../../../common/components/layout/SidebarDrop/SidebarDrop";
import {DataAttrColorTheme, DataAttrSize, ElementPosition} from "../../../../common/services/consts/common";
import SideBar from "../../../../common/components/layout/SideBar/SideBar";
import Header from "../../../../common/components/layout/Header/Header";


const SidebarsDropPartial = () => {
  return (
    <section className="components-library__element sidebar-drop-library">
      <h3 className="components-library__heading h3">
        SidebarDrop
      </h3>

      <table className="components-library__type">

        {/* Color theme: gray-quaternary (default)
          ========================================================================== */}
        <thead>
          <tr>
            <th><small>Color theme: gray-quaternary (default)</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div style={{position: "relative", width: "100%", height: "300px"}}>

                <SidebarDrop position={ElementPosition.LEFT}
                             isOuterOffset
                />

                <SidebarDrop position={ElementPosition.RIGHT}
                />

              </div>
            </td>
          </tr>
        </tbody>

        {/* Color theme: white
          ========================================================================== */}
        <thead>
          <tr>
            <th><small>Color theme: white</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div style={{position: "relative", width: "100%", height: "300px"}}>

                <SidebarDrop position={ElementPosition.LEFT}
                             colorTheme={DataAttrColorTheme.WHITE}
                             colorThemeCloseButton={DataAttrColorTheme.BLUE_SENARY}
                             isNotBorderRadius
                />

                <SidebarDrop position={ElementPosition.RIGHT}
                             colorTheme={DataAttrColorTheme.WHITE}
                             colorThemeCloseButton={DataAttrColorTheme.BLUE_SENARY}
                             isNotBorderRadius
                />

              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default SidebarsDropPartial;
