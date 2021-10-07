import { combineReducers } from "redux";
import { storiesReducer } from "./storiesReducer";
import { spinnerReducer } from "./spinnerReducer";

export const reducers = combineReducers({
    stories: storiesReducer,
    spinner: spinnerReducer,
});

export type State = ReturnType<typeof reducers>;
