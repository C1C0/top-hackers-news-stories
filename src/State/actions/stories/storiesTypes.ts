import { Story } from "../../../Shared/interfaces";

export enum StoriesActionType{
    SET_STORIES = "[SET STORIES]"
}

interface SetStoriesAction{
    type: StoriesActionType.SET_STORIES
    payload: Story[]
}

export type Action = SetStoriesAction;