import { css, jsx } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";
import { ColorPallete } from "../../Shared/design";
import * as fromInterfaces from "../../Shared/interfaces";
import { Hr } from "../SharableComponents/HR";

export const Story: React.FC<fromInterfaces.Story> = ({
  title,
  by,
  time,
  text,
  url,
  score,
  authorKarma,
}) => {
  return (
    <StoryBackground>
      <ByP>
        {by}&nbsp;&nbsp;<KarmaP>{authorKarma}</KarmaP>
      </ByP>
      <TitleLink href={url}>
        <TitleP>{title}</TitleP>
      </TitleLink>
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
        <ScoreP title="Story Score">{score}</ScoreP>
      </UnderTitleWrapper>
      {text && (
        <>
          <Hr />
          <div>
            {text} <a href={url}>Read more</a>{" "}
          </div>
        </>
      )}
    </StoryBackground>
  );
};

const StoryBackground = styled.div`
  background-color: ${ColorPallete.backgroundCard1};
  box-shadow: 5px 10px 5px ${ColorPallete.defaultCardShadow};
  padding: 28px 40px;
  margin-bottom: 40px;
`;

const ByP = styled.p`
  color: ${ColorPallete.mainSaturated};
  margin: 0;
  font-size: 1.1em;

  + a {
    text-decoration: none;
  }
`;

const KarmaP = styled.span`
  color: ${ColorPallete.defaultTextColor};
  margin-left: .5rem;
  font-size: .8em;

  &:before{
    content: "Karma:\\00a0"
  }
`;

const TitleLink = styled.a`
  width: fit-content;
`;

const TitleP = styled.p`
  color: ${ColorPallete.main};
  margin: 10px 0 0;
  font-size: 1.56em;
  width: fit-content;

  cursor: pointer;

  transition: transform 0.1s ease, text-shadow 0.1s ease;

  &:hover {
    transform: translateY(-5px);
    text-shadow: 10px 15px 10px ${ColorPallete.defaultTextShadow};
  }
`;

const UnderTitleWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const underlineItems = styled.p`
  margin-top: 5px;
  font-size: 0.9em;
  font-style: italic;
`;

const TimestampP = styled(underlineItems)`
  color: ${ColorPallete.mainDarker};
`;

const ScoreP = styled(underlineItems)`
  color: ${ColorPallete.secondaryColor};

  &:before {
    content: "[\\00a0";
  }

  &:after {
    content: "\\00a0]";
  }
`;
