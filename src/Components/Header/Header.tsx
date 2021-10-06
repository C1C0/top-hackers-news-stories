import styled from "@emotion/styled";
import React from "react";
import { Hr } from "../SharableComponents/HR";

interface Props {
  title: string,
  mantra?: string,
}

export const Header: React.FC<Props> = ({ title, mantra = null }) => {
  return (
    <header>
      <TitleH>{title}</TitleH>
      {mantra && <MantraP>{mantra}</MantraP>}
      <Hr />
    </header>
  );
};

const TitleH = styled.h1`
    font-size: 3.75em;
`;

const MantraP = styled.p`
    font-size: 1.75em;
`;