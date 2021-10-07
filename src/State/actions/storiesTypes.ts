import { Story } from "../../Shared/interfaces";

export enum StoriesActionType{
    SetStories = "[SET STORIES]"
}

interface SetStoriesAction{
    type: StoriesActionType.SetStories
    payload: Story[]
}

export type Action = SetStoriesAction;