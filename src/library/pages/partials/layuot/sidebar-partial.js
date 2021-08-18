import React from "react";

import SideBar from "../../../../common/components/layout/SideBar/SideBar";
import {LocationMenu} from "../../../../common/services/consts/common";


const SidebarPartial = () => {
  return (
    <section className="components-library__element sidebar-library">
      <h3 className="components-library__heading h3">
        SideBar
      </h3>

      <table className="components-library__type components-library__type--no-indent">
        <tbody>
          <tr>
            <td>

              <SideBar userName="Емельянова"
                       userSurname="Светлана"
                       userPatronymic="Степановна"
                       statusAccount="Базовый аккаунт"
                       locationMenu={LocationMenu.CORE}
              />

            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
};

export default SidebarPartial;
