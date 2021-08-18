import { combineReducers } from "redux";

import CommonNameSpace from "../common/reducers/NameSpace";
import NameSpace from "./NameSpace";

import {reducer as app} from "../common/reducers/app/app";
import {reducer as popups} from "../common/reducers/popups/popups";


export default combineReducers({
  [CommonNameSpace.APP]: app,
  [CommonNameSpace.POPUPS]: popups,
})
