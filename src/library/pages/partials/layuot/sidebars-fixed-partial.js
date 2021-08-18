import React from "react";

import SidebarFixed from "../../../../common/components/layout/SidebarFixed/SidebarFixed";
import SideBar from "../../../../common/components/layout/SideBar/SideBar";
import {LocationMenu} from "../../../../common/services/consts/common";



const SidebarsFixedPartial = () => {
  return (
    <section className="components-library__element sidebar-fixed-library">
      <h3 className="components-library__heading h3">
        Sidebar Fixed
      </h3>

      <table className="components-library__type components-library__type--no-indent">
        <tbody>
          <tr>
            <td>

              <SidebarFixed locationMenu={LocationMenu.CORE}/>

            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default SidebarsFixedPartial;
