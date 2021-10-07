import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { ColorPallete } from "../../Shared/design";
import * as fromInterfaces from "../../Shared/interfaces"
import { Hr } from "../SharableComponents/HR";

<<<<<<< HEAD
<<<<<<< Updated upstream
interface Props {
  title: string;
  from: string;
  timestamp: string;
  text: string;
}
=======
>>>>>>> Redux-implementation

export const Story: React.FC<fromInterfaces.Story> = ({ title, by, time, text }) => {
  return (
    <StoryBackground>
      <ByP>{by}</ByP>
      <TitleP>{title}</TitleP>
      <TimestampP>{time}</TimestampP>
      <Hr />
      <div>{text}</div>
=======
export const Story: React.FC<fromInterfaces.Story> = ({
  title,
  by,
  time,
  text,
  url,
  score,
}) => {
  return (
    <StoryBackground>
      <ByP>{by}</ByP>
      <a href={url}>
        <TitleP>{title}</TitleP>
      </a>
      <UnderTitleWrapper>
        <TimestampP>
          {new Date(time).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </TimestampP>
        <ScoreP title="score">{score}</ScoreP>
      </UnderTitleWrapper>
      {text && (
        <>
          <Hr />
          <div>
            {text} <a href={url}>Read more</a>{" "}
          </div>
        </>
      )}
>>>>>>> Stashed changes
    </StoryBackground>
  );
};

const StoryBackground = styled.p`
  background-color: ${ColorPallete.backgroundCard1};
  box-shadow: 5px 10px 5px ${ColorPallete.defaultCardShadow};
  padding: 28px 40px;
  margin-bottom: 40px;
`;

const ByP = styled.p`
  color: ${ColorPallete.mainSaturated};
  margin: 0;
<<<<<<< Updated upstream
  font-size: 1.1em
=======
  font-size: 1.1em;

  + a {
    text-decoration: none;
  }
>>>>>>> Stashed changes
`;

const TitleP = styled.p`
  color: ${ColorPallete.main};
  margin: 10px 0 0;
  font-size: 1.56em;
`;

<<<<<<< Updated upstream
const TimestampP = styled.p`
  color: ${ColorPallete.mainDarker};
  font-size: .8em;
=======
const UnderTitleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const underlineItems = styled.p`
  margin-top: 5px;
  font-size: 0.9em;
  font-style: italic;
>>>>>>> Stashed changes
`;

const TimestampP = styled(underlineItems)`
  color: ${ColorPallete.mainDarker};
`;

const ScoreP = styled(underlineItems)`
  color: ${ColorPallete.secondaryColor};

  &:before{
    content: '[\\00a0';
  }

  &:after{
    content: '\\00a0]';
  }
`;
