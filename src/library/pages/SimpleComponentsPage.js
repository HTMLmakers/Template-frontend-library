import React from "react";

import LogoPartial from "./partials/simple/logo-partial";
import AvatarPartial from "./partials/simple/avatar-partial";
import CopyrightPartial from "./partials/simple/copyright-partial";
import ContactsInfoPartial from "./partials/simple/contacts-info-partial";
import ControlsPartial from "./partials/simple/controls-partial";
import DataTimePartial from "./partials/simple/date-time-partial";
import RandomPartial from "./partials/simple/random-partial";
import PageNavPartial from "./partials/simple/page-nav-partial";
import MainNavPartial from "./partials/simple/nav-main-partial";
import WidgetsPartial from "./partials/simple/widgets-partial";
import UsersInfoPartial from "./partials/simple/users-info-partial";
import HelpsPartial from "./partials/simple/help-widget-partial";


import Promocodes from "./partials/simple/promocodes";

import WorkerInfoBars from "./partials/simple/worker-info-bars";

import Messages from "./partials/simple/messages";

import ControlBars from "./partials/simple/conrol-bars";
import ElementsListPartial from "./partials/simple/elements-list-partial";
import PaymentSystems from "./partials/simple/payment-systems";
import Searches from "./partials/simple/search";
import ControlsTotal from "./partials/simple/controls-total";




const SimpleComponentsPage = () => {
  return (
    <div className="components-library components-library--fixed">
      <header className="components-library__header">
        <h2 className="components-library__heading h2">
          Simple components
        </h2>
      </header>
      <div className="components-library__main">

        <LogoPartial /> {/*+++++*/}

        <AvatarPartial /> {/*+++++*/}

        <CopyrightPartial /> {/*+++++*/}

        <ContactsInfoPartial /> {/*+++++*/}

        <ControlsPartial /> {/*+++++*/}

        <DataTimePartial /> {/*+++++*/}

        <RandomPartial /> {/*+++++*/}

        <PageNavPartial /> {/*+++++*/}

        <MainNavPartial /> {/*+++++*/}

        <WidgetsPartial /> {/*+++++*/}

        <UsersInfoPartial /> {/*+++++*/}

        <HelpsPartial />



        <ElementsListPartial />

        <Promocodes />



        <WorkerInfoBars />

        <ControlBars />

        <Messages/>

        <PaymentSystems />

        <Searches />

        <ControlsTotal />

      </div>
    </div>
  )
};

export default SimpleComponentsPage;
