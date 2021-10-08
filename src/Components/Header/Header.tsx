import React from "react";
import { Hr } from "../SharableComponents/HR";
import { HeaderWrapper, MantraP, TitleH } from "./HeaderStyleComponents";

interface Props {
  title: string;
  mantra?: string;
}

/**
 * Header Component
 *
 * Creates specific header
 */
export const Header: React.FC<Props> = ({ title, mantra = null }) => {
  return (
    <HeaderWrapper>
      <TitleH>{title}</TitleH>
      {mantra && <MantraP>{mantra}</MantraP>}
      <Hr />
    </HeaderWrapper>
  );
};
