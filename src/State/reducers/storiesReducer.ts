import { Story } from "../../Shared/interfaces";
import { Action, StoriesActionType } from "../actions/storiesTypes";

const inistialState: Story[] = [];

export const storiesReducer = (state: Story[] = inistialState, action: Action) => {
  switch (action.type) {
    case StoriesActionType.SetStories:
      return action.payload;
    default:
      return state;
  }
};
