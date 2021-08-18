import React from "react";
import Search from "../../../../common/components/common/Search/Search";



const Searches = () => {
  return (
    <section className="components-library__element help-library">
      <h3 className="components-library__heading h3">
        Search
      </h3>

      <table className="components-library__type">

        {/* Color theme: default
          ========================================================================== */}

        {/*L*/}
        <thead>
        <tr>
          <th className="name"></th>
          <th colSpan="1"><small>Color theme: default</small></th>
        </tr>
        <tr>
          <th className="name"></th>
          <th><small>L</small></th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td className="name"></td>
          <td>

            <Search />

          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
};

export default Searches;
