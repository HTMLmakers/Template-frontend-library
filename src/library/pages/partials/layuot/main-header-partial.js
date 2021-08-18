import React from "react";

import MainHeader from "../../../../common/components/layout/MainHeader/MainHeader";
import {LocationMenu} from "../../../../common/services/consts/common";


const MainHeaderPartial = () => {
  return (
    <section className="components-library__element main-header-library">
      <h3 className="components-library__heading h3">
        MainHeader
      </h3>

      <table className="components-library__type components-library__type--no-indent">
        <tbody>
          <tr>
            <td>

              <MainHeader locationMenu={LocationMenu.CORE} handleLogout={() => ``}/>

            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default MainHeaderPartial;
