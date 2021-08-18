import React from "react";

import UserInfo from "../../../../common/components/common/UserInfo/UserInfo";
import {DataAttrColorTheme, DataAttrSize} from "../../../../common/services/consts/common";

const UsersInfoPartial = () => {
  return (
    <section className="components-library__element main-nav-library">
      <h3 className="components-library__heading h3">
        UserInfo
      </h3>

      <table className="components-library__type">

        {/* Color theme: blue-dark-secondary
          ========================================================================== */}
        <thead>
        <tr>
          <th className="name"></th>
          <th colSpan="4"><small>Color theme: blue-dark-secondary</small></th>
        </tr>
        <tr>
          <th className="name"></th>
          <th><small>XL</small></th>
          <th><small>L</small></th>
          <th><small>M</small></th>
          <th><small>S</small></th>
        </tr>
        </thead>
        <tbody className="bg-darker">
        <tr>
          <td className="name"></td>

          {/*XL*/}
          <td>

            <UserInfo size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      name="Светлана"
                      surname="Емельянова"
                      patronymic="Викторовна"
                      status="Расширенный аккаунт"
                      isAvatarButton
            />

          </td>

          {/*L*/}
          <td>

            <UserInfo size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      name="Светлана"
                      surname="Емельянова"
                      patronymic="Викторовна"
                      status="Расширенный аккаунт"
                      isAvatarButton
            />

          </td>

          {/*M*/}
          <td>

            <UserInfo size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      name="Светлана"
                      surname="Емельянова"
                      patronymic="Викторовна"
                      status="Расширенный аккаунт"
                      isAvatarButton
            />

          </td>

          {/*S*/}
          <td>

            <UserInfo size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.BLUE_DARK_SECONDARY}
                      name="Светлана"
                      surname="Емельянова"
                      patronymic="Викторовна"
                      status="Расширенный аккаунт"
                      isAvatarButton
            />

          </td>
        </tr>
        </tbody>

        {/* Color theme: white-primary
          ========================================================================== */}
        <thead>
        <tr>
          <th className="name"></th>
          <th colSpan="4"><small>Color theme: white-primary</small></th>
        </tr>
        <tr>
          <th className="name"></th>
          <th><small>XL</small></th>
          <th><small>L</small></th>
          <th><small>M</small></th>
          <th><small>S</small></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="name"></td>

          {/*XL*/}
          <td className="bg-darker-td">

            <UserInfo size={DataAttrSize.XL}
                      colorTheme={DataAttrColorTheme.WHITE}
                      name="Светлана"
                      surname="Емельянова"
                      patronymic="Викторовна"
                      status="Расширенный аккаунт"
                      isAvatarButton
            />

          </td>

          {/*L*/}
          <td className="bg-darker-td">

            <UserInfo size={DataAttrSize.L}
                      colorTheme={DataAttrColorTheme.WHITE}
                      name="Светлана"
                      surname="Емельянова"
                      patronymic="Викторовна"
                      status="Расширенный аккаунт"
                      isAvatarButton
            />

          </td>

          {/*M*/}
          <td className="bg-darker-td">

            <UserInfo size={DataAttrSize.M}
                      colorTheme={DataAttrColorTheme.WHITE}
                      name="Светлана"
                      surname="Емельянова"
                      patronymic="Викторовна"
                      status="Расширенный аккаунт"
                      isAvatarButton
            />

          </td>

          {/*S*/}
          <td className="bg-darker-td">

            <UserInfo size={DataAttrSize.S}
                      colorTheme={DataAttrColorTheme.WHITE}
                      name="Светлана"
                      surname="Емельянова"
                      patronymic="Викторовна"
                      status="Расширенный аккаунт"
                      isAvatarButton
            />

          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
};

export default UsersInfoPartial;
