import React from "react";

import {DataAttrSize} from "../../../../common/services/consts/common";
import ContactInfo from "../../../../common/components/common/ContactInfo/ContactInfo";


const ContactsInfoPartial = () => {
  return (
    <section className="components-library__element contact-info-library">
      <h3 className="components-library__heading h3">
        Contact Info
      </h3>

      <table className="components-library__type">
        <thead>
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

              <ContactInfo size={DataAttrSize.L} />

            </td>

            {/*M*/}
            <td>

              <ContactInfo size={DataAttrSize.M} />

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

export default ContactsInfoPartial;
