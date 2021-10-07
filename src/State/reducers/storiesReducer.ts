import { Story } from "../../Shared/interfaces";
import { Action, StoriesActionType } from "../actions/stories/storiesTypes";

const inistialState: Story[] = [];

export const storiesReducer = (state: Story[] = inistialState, action: Action) => {
  switch (action.type) {
    case StoriesActionType.SET_STORIES:
      return action.payload;
    default:
      return state;
  }
};
