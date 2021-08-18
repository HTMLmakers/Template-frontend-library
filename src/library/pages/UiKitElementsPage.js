import React from "react";

import ColorsPartial from "./partials/ui-kit/colors-partial";
import TextsPartial from "./partials/ui-kit/texts-partial";
import IconsPartial from "./partials/ui-kit/icons-partial";
import IconWrapsPartial from "./partials/ui-kit/icon-wraps-partial";
import MarksPartial from "./partials/ui-kit/marks-partial";
import ButtonsPartial from "./partials/ui-kit/buttons-partial";
import InfoTagsPartial from "./partials/ui-kit/info-tags-partial";
import LinksPartial from "./partials/ui-kit/links-partial";
import NotificationsPartial from "./partials/ui-kit/notifications-partial";
import TooltipsPartial from "./partials/ui-kit/tooltips-partial";
import DropDownsPartial from "./partials/ui-kit/drop-downs-partial";
import ScrollsPartial from "./partials/ui-kit/scrolls-partial";
import WrapPartial from "./partials/ui-kit/wraps-partial";
import PopupsPartial from "./partials/ui-kit/popups-partial";
import TablesPartial from "./partials/ui-kit/tables-partial";

import FormFieldsPartial from "./partials/ui-kit/form-fields-partial";
import Selects from "./partials/ui-kit/selects";
import UploadFiles from "./partials/ui-kit/uploadFiles";
import Forms from "./partials/ui-kit/forms";
import Sliders from "./partials/ui-kit/sliders";


const UiKitElementsPage = () => {
  return (
    <div className="components-library components-library--fixed">
      <header className="components-library__header">
        <h2 className="components-library__heading h2">
          Ui-kit elements
        </h2>
      </header>
      <div className="components-library__main">

        <ColorsPartial /> {/*+++++++*/}

        <TextsPartial /> {/*+++++++*/}

        <IconsPartial /> {/*+++++++*/}

        <IconWrapsPartial /> {/*+++++++*/}

        <MarksPartial /> {/*+++++++*/}

        <ButtonsPartial /> {/*+++++++*/}

        <InfoTagsPartial /> {/*+++++++*/}

        <LinksPartial /> {/*+++++++*/}

        <DropDownsPartial /> {/*+++++++*/}

        <NotificationsPartial /> {/*+++++++*/}

        <TooltipsPartial /> {/*+++++++*/}

        <ScrollsPartial /> {/*+++++++*/}

        <WrapPartial />{/*+++++++*/}

        <PopupsPartial/>

        <TablesPartial />

        <FormFieldsPartial/>

        <Selects/>

        <Forms/>

        <UploadFiles/>

        <Sliders/>










      </div>
    </div>
  );
};

export default UiKitElementsPage;
