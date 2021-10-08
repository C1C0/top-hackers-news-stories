import React from "react";
import { Hr } from "../SharableComponents/HR";
import {
  ByP,
  KarmaP,
  ScoreP,
  StoryBackground,
  TimestampP,
  TitleLink,
  TitleP,
  UnderTitleWrapper,
} from "./StoryStyleComponents";
import parse from "html-react-parser";
import * as fromInterfaces from "../../Shared/interfaces";

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
          <div>{parse(text)}</div>
          {url && <a href={url}>Read more</a>}
        </>
      )}
    </StoryBackground>
  );
};
