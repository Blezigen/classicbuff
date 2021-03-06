import styled from "styled-components";
import { colors } from "../../../shared";

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

export const Tab = styled.a`
  position: relative;
  font-size: 16px;
  padding: 12px;
  text-decoration: none;
  cursor: pointer;

  display: flex;
  flex-direction: row;

  transition: 0.3s ease;

  color: ${colors.primaryText};

  ::before {
    content: "";
    background: ${colors.transparentTint};
    height: 2px;
    position: absolute;
    bottom: 0;
    opacity: 0;
    transition: 0.3s ease;
    left: 0;
    right: 0;
  }

  &:hover {
    color: ${colors.primaryTextHighlight};
    &::before {
      content: "";
      background: ${colors.transparentTint};
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 0;
      opacity: 1;
      right: 0;
    }
  }

  & * {
    color: inherit;
    text-decoration: none;
    font-size: inherit;
  }

  &.active {
    ::before {
      content: "";
      background: ${colors.blueHighlight};
      height: 2px;
      position: absolute;
      bottom: 0;
      left: 0;

      opacity: 1;
      right: 0;
    }
  }
`;
