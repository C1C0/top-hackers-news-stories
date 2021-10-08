import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { State } from "../../State/reducers/reducers";
import { Story } from "../Story/Story";
import { StoriesWrapper } from "./StoriesStyleComponents";
import * as StoriesLogic from "./StoriesLogic";
import * as storiesCreators from "../../State/actions/stories/storiesCreators";
import * as spinnerCreators from "../../State/actions/spinner/spinnerCreators";

/**
 * Stories wrapping Component
 */
export const Stories: React.FC = () => {
  // Get stories default state
  const stories = useSelector((state: State) => state.stories);

  // Prepare stories actions
  const dispatch = useDispatch();
  const { setStories } = bindActionCreators(storiesCreators, dispatch);

  // Prepare spinner action
  const { DeactivateSpinner } = bindActionCreators(spinnerCreators, dispatch);

  useEffect(() => {
    (async () => {
      // Fetch stories
      const stories = await StoriesLogic.getTopStories();
      setStories(stories);

      DeactivateSpinner();
    })();
  }, []);

  return (
    <StoriesWrapper>
      {stories.map((story) => (
        <Story
          key={story.id}
          id={story.id}
          url={story.url}
          score={story.score}
          by={story.by}
          title={story.title}
          time={story.time}
          text={story.text}
          authorKarma={story.authorKarma}
        />
      ))}
    </StoriesWrapper>
  );
};