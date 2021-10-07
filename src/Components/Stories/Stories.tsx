import styled from "@emotion/styled";
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../State/reducers/reducers";
import { Story } from "../Story/Story";

export const Stories: React.FC = () => {
  const stories = useSelector((state: State) => state.stories);

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
