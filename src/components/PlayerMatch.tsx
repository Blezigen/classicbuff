import Router from "next/router";
import React from "react";
import { formatDuration, ItemsContainer } from "../pages/match/[id]";
import { ItemIcon } from "./UI/ItemIcon";
import { formatDateStr } from "../utils/format/formateDateStr";
import cx from "classnames";
import { HeroIcon } from "./UI/HeroIcon";
import formatGameMode from "../utils/format/formatGameMode";
import { MatchDto } from "../api/back/models";
import { Tr } from "./UI/Table";

export interface PlayerMatchInfo {
  player: string;
  match: MatchDto;
  index: number;
}

export default ({ match, player, index }: PlayerMatchInfo) => {
  const pim = [...match.radiant].concat(match.dire).find(it => it.steamId === player)!!;

  const isWin = match.winner === pim.team;
  const items = pim.items.map(it => it.substr(5));
  return (
    <Tr
      className={cx("link", index % 2 === 0 ? "even" : "odd")}
      onClick={() => Router.push("/match/[id]", `/match/${match.id}`)}
    >
      <td className={"green"}>
        {match.id} <br />
        <span style={{ fontSize: 12, marginTop: 2, color: "#c2c2c2" }}>{formatDateStr(match.timestamp)}</span>
      </td>
      <td>{formatGameMode(match.mode)}</td>
      <td>{formatDuration(match.duration)}</td>
      <td>
        <HeroIcon hero={pim.hero} />
      </td>
      <td className={"omit"}>
        <ItemsContainer>
          {items.map((it, index) => (
            <ItemIcon key={index} item={it} />
          ))}
        </ItemsContainer>
      </td>
      <td className={isWin ? "green" : "red"}>
        <span>{!isWin ? "Поражение" : "Победа"}</span>
      </td>
      <td>{pim.kills}</td>
      <td>{pim.deaths}</td>
      <td>{pim.assists}</td>
      <td className={"omit"}>
        {pim.lastHits}/{pim.denies}
      </td>
      <td className={"omit"}>
        {pim.gpm}/{pim.xpm}
      </td>
    </Tr>
  );
};
