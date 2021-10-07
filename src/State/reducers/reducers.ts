import { combineReducers } from "redux";
import { storiesReducer } from "./storiesReducer";

export const reducers = combineReducers({
    stories: storiesReducer
});

export type State = ReturnType<typeof reducers>;
