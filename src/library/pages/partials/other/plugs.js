import React from "react";
import PlugPrimary from "../../../../common/components/common/plugs/PlugPrimary/PlugPrimary";
import PlugSecondary from "../../../../common/components/common/plugs/PlugSecondary/PlugSecondary";

const Plugs = () => {
  return (
    <section className="components-library__element header-library">
      <h3 className="components-library__heading h3">
        Plugs
      </h3>

      <table className="components-library__type">
        <thead>
          <tr>
            <th><small>Plug Primary</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>

              <PlugPrimary />

            </td>
          </tr>
        </tbody>

        <thead>
          <tr>
            <th><small>Plug Secondary</small></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>

              <PlugSecondary />

            </td>
          </tr>
        </tbody>
      </table>
    </section>


  )
};

export default Plugs;
