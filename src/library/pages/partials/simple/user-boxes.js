import React from "react";
import UserBox from "../../../../common/components/common/UserBox/UserBox";




const UserBoxes = () => {
  return (
    <section className="components-library__element user-box-library">
      <h3 className="components-library__heading h3">
        User Box
      </h3>

      <table className="components-library__type">
        <thead>
        <tr>
          <th><small></small></th>
        </tr>
        </thead>
        <tbody className="bg-darker">
        <tr>
          <td>

            <UserBox name="Светлана"
                     surname="Емельянова"
                     patronymic="Викторовна"
                     status="Расширенный аккаунт"
                     date="22 янв. 2021"
            />

          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
};

export default UserBoxes;
