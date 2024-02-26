import { combineReducers } from "redux";
import { mainReducer } from "./main-reducer";
import { categorytReducer } from "./category-reducer";
import { projectReducer } from "./project-reducer";
import { newsReducer } from "./news-reducer";
import { clientReducer } from "./client-reducer";
import {membersReducer} from "./members-reducer";

export const rootReducer = combineReducers({
  mainReducer,
  categorytReducer,
  projectReducer,
  newsReducer,
  clientReducer,
  membersReducer
});