import styled from "styled-components";
import React from "react";
import Link from "next/link";
import { LeaderboardEntryDto } from "../api/back/models";
import { RoleNames, RoleValue } from "../utils/format/roles";
import { colors } from "../shared";
import { Tr } from "./UI/Table";

export const Role = styled.div`
  width: 10px;
  height: 10px;
  position: relative;

  border-radius: 50%;
  margin-right: 5px;
  font-size: 14px;

  cursor: pointer;
  & + & {
    margin-left: 5px;
  }
  &.OLD {
    background: ${colors.roles.old};
  }

  &.HUMAN {
    background: ${colors.roles.human};
  }

  &.ADMIN {
    background: ${colors.roles.admin};
  }

  &.MODERATOR {
    background: ${colors.roles.moderator};
  }

  &:hover {
    & div {
      display: block;
      pointer-events: auto;
      opacity: 1;
    }
  }

  & div {
    left: -60px;
    top: 20px;
    z-index: 5;
    transition: 0.3s ease;
    display: block;
    pointer-events: none;
    opacity: 0;
    padding: 10px;
    position: absolute;
    background: rgba(0, 0, 0, 0.9);
  }
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

export default (props: LeaderboardEntryDto) => {
  const playerUrl = `/player/${props.id}`;

  const highestRole = props.roles.sort((a, b) => RoleValue[b] - RoleValue[a])[0] || "PLAYER";

  return (
    <Tr>
      <td>
        <Link href={playerUrl}>
          <a>{props.rank + 1}</a>
        </Link>
      </td>
      <td>
        <Link href={playerUrl}>
          <NameContainer>
            {highestRole !== "PLAYER" && (
              <Role className={highestRole}>
                <div>{RoleNames[highestRole]}</div>
              </Role>
            )}
            <a style={{ fontWeight: "bold" }}>{props.name}</a>
          </NameContainer>
        </Link>
      </td>
      <td style={{ textAlign: "center" }}>{props.mmr}</td>
    </Tr>
  );
};

export const LadderHeader = () => (
  <Tr>
    <th>Место</th>
    <th>Игрок</th>
    <th style={{ textAlign: "center" }}>MMR</th>
  </Tr>
);
