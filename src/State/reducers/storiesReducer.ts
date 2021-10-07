import { Story } from "../../Shared/interfaces";
import { Action, StoriesActionType } from "../actions/storiesTypes";

const inistialState: Story[] = [
  {
    by: "dhouston",
    id: 8864,
    score: 111,
    time: 1175714200,
    title: "My YC app: Dropbox - Throw away your USB drive",
    url: "http://www.getdropbox.com/u/2/screencast.html",
  },
  {
    by: "dhouston",
    id: 8863,
    score: 111,
    time: 1175714200,
    title: "My YC app: Dropbox - Throw away your USB drive",
    text: "Aw shucks, guys ... you make me blush with your compliments.<p>Tell you what, Ill make a deal: I'll keep writing if you keep reading. K? ... Read more",
    url: "http://www.getdropbox.com/u/2/screencast.html",
  },
  {
    by: "dhouston",
    id: 8862,
    score: 111,
    time: 1175714200,
    title: "My YC app: Dropbox - Throw away your USB drive",
    url: "http://www.getdropbox.com/u/2/screencast.html",
  },
];

export const storiesReducer = (state: Story[] = inistialState, action: Action) => {
  switch (action.type) {
    case StoriesActionType.SetStories:
      return action.payload;
    default:
      return state;
  }
};
