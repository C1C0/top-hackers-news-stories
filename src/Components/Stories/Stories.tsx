import styled from "@emotion/styled";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { State } from "../../State/reducers/reducers";
import { Story } from "../Story/Story";
import * as StoriesLogic from "./StoriesLogic";
import * as storiesCreators from "../../State/actions/stories/storiesCreators";
import * as spinnerCreators from "../../State/actions/spinner/spinnerCreators";
import { ActivateSpinner } from "../../State/actions/spinner/spinnerCreators";

export const Stories: React.FC = () => {
  const stories = useSelector((state: State) => state.stories);
  const dispatch = useDispatch();
  const { setStories } = bindActionCreators(storiesCreators, dispatch);
  const { ActivateSpinner, DeactivateSpinner } = bindActionCreators(spinnerCreators, dispatch);

  useEffect(() => {
    (async () => {
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
        />
      ))}
    </StoriesWrapper>
  );
};

const StoriesWrapper = styled.div`
  margin-top: 60px;
`;
