import React from "react";


import ControlBar from "../../../../common/components/common/ControlBar/ControlBar";




const ControlBars = () => {
  return (
    <section className="components-library__element control-bar-library">
      <h3 className="components-library__heading h3">
        ControlBar
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
        <tbody className="bg-darker">
        <tr>
          <td className="name"></td>
          <td>

            <ControlBar />

          </td>
        </tr>
        </tbody>
      </table>
    </section>
  )
};

export default ControlBars;
