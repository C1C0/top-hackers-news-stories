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
}) => {
  return (
    <StoryBackground>
      <ByP>{by}</ByP>
      <a href={url}>
        <TitleP>{title}</TitleP>
      </a>
      <TimestampP>
        {new Date(time).toLocaleDateString("en-US", {
          day: "numeric",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        })}
      </TimestampP>
      {text && (
        <>
          <Hr />
          <div>{text} <a href={url}>Read more</a> </div>
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

  + a{
    text-decoration: none;
  }
`;

const TitleP = styled.p`
  color: ${ColorPallete.main};
  margin: 10px 0 0;
  font-size: 1.56em;

  cursor: pointer;

  transition: transform 0.1s ease, text-shadow 0.1s ease;

  &:hover {
    transform: translateY(-5px);
    text-shadow: 10px 15px 10px ${ColorPallete.defaultTextShadow};
  }
`;

const TimestampP = styled.p`
  color: ${ColorPallete.mainDarker};
  margin-top: 5px;
  font-size: 0.9em;
  font-style: italic;
`;
