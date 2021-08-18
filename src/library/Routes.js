import {Route, Switch} from "react-router-dom";

import HomePage from "./pages/HomePage";
import LayoutPage from "./pages/LayoutPage";
import PageLayoutPage from "./pages/PageLayoutPage";
import UiKitElementsPage from "./pages/UiKitElementsPage";
import LayoutComponentsPage from "./pages/LayoutComponentsPage";
import SimpleComponentsPage from "./pages/SimpleComponentsPage";
import ComplexComponentsPage from "./pages/ComplexComponentsPage";
import OtherPage from "./pages/Other";


const Routes = () => {
  return (
    <Switch>
      <Route path={`/`} component={HomePage} exact/>
      <Route path={`/layout`} component={LayoutPage} exact/>
      <Route path={`/layout-page`} component={PageLayoutPage} exact/>
      <Route path={`/ui-kit`} component={UiKitElementsPage} exact/>
      <Route path={`/layout-components`} component={LayoutComponentsPage} exact/>
      <Route path={`/simple-components`} component={SimpleComponentsPage} exact/>
      <Route path={`/complex-components`} component={ComplexComponentsPage} exact/>
      <Route path={`/other`} component={OtherPage} exact/>
    </Switch>
  )
}

export default Routes;
