import React from "react";
import WidgetItems from "./partials/other/widget-items";
import Plugs from "./partials/other/plugs";
import UserBoxes from "./partials/simple/user-boxes";
import PayBlocks from "./partials/complex/pay-blocks";


const OtherPage = () => {
  return (
  <div className="components-library">
    <header className="components-library__header">
      <h2 className="components-library__heading h2">
        Other
      </h2>
    </header>
    <div className="components-library__main">

      <WidgetItems />

      <Plugs />

      <UserBoxes />

      <PayBlocks />

    </div>
  </div>
  )
};

export default OtherPage;
