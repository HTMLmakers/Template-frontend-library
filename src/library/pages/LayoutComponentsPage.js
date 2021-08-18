import React from "react";

import MainHeaderPartial from "./partials/layuot/main-header-partial";
import MainFooterPartial from "./partials/layuot/main-footer-partial";
import HeaderPartial from "./partials/layuot/header-partial";
import SidebarPartial from "./partials/layuot/sidebar-partial";
import SidebarsFixedPartial from "./partials/layuot/sidebars-fixed-partial";
import SidebarsDropPartial from "./partials/layuot/sidebars-drop-partial";


const LayoutComponentsPage = () => {
  return (
    <div className="components-library">
      <header className="components-library__header">
        <h2 className="components-library__heading h2">
          Layout components
        </h2>
      </header>
      <div className="components-library__main">

        <MainHeaderPartial />

        <MainFooterPartial />

        <HeaderPartial />

        <SidebarPartial />

        <SidebarsFixedPartial />

        <SidebarsDropPartial/>

      </div>
    </div>
  )
};

export default LayoutComponentsPage;
