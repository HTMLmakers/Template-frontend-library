import React from "react";
import PaymentSystem from "../../../../common/components/common/PaymentSystems/PaymentSystems";


const PaymentSystems = () => {
  return (
    <section className="components-library__element payment-system-library">
      <h3 className="components-library__heading h3">
        Payment System
      </h3>

      <table className="components-library__type">
        <thead>
        <tr>
          <th className="name"></th>
          <th colSpan="3"><small>Color theme: default</small></th>
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

            <PaymentSystem />

          </td>

          {/*M*/}
          <td>

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

export default PaymentSystems;
