import { Dispatch } from "redux";
import { Story } from "../../Shared/interfaces";
import { Action, StoriesActionType } from "./storiesTypes";

export const setStories = (stories: Story[]) => {
    return(dispatch: Dispatch<Action>) => {
        dispatch({
            type: StoriesActionType.SetStories,
            payload: stories,
        })
    }
}