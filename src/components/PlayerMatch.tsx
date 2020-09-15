import Router from "next/router";
import { Tr } from "./LadderRow";
import React from "react";
import { formatDuration, ItemsContainer } from "../pages/match/[id]";
import ItemIcon from "./ItemIcon";
import { formatDateStr } from "../utils/format/formateDateStr";
import cx from "classnames";
import HeroIcon from "./HeroIcon";
import formatGameMode from "../utils/format/formatGameMode";
import {
  FullMatchFragmentFragment,
  MatchNoPlayersFragmentFragment,
  PlayerFragmentFragment,
  PlayerInMatch,
  PlayerInMatchFragmentFragment
} from "../generated/sdk";

export interface PlayerMatchInfo {
  player: PlayerFragmentFragment | PlayerInMatchFragmentFragment;
  match: FullMatchFragmentFragment | MatchNoPlayersFragmentFragment;
  index: number;
}

export default ({ match, player, index }: PlayerMatchInfo) => {
  const pim =
    ("steam_id" in player &&
      (match as FullMatchFragmentFragment).players.find(it => it.player.steam_id === player.steam_id)!!) ||
    (player as PlayerInMatch);
  const isWin = match.radiant_win ? pim.team === 2 : pim.team === 3;
  const items = pim.items.split(",").map(it => it.substr(5));
  return (
    <Tr
      className={cx("link", index % 2 === 0 ? "even" : "odd")}
      onClick={() => Router.push("/match/[id]", `/match/${match.id}`)}
    >
      <td className={"green"}>
        {match.id} <br />
        <span style={{ fontSize: 12, marginTop: 2, color: "#c2c2c2" }}>{formatDateStr(match.timestamp)}</span>
      </td>
      <td>{formatGameMode(match.type)}</td>
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
        {pim.last_hits}/{pim.denies}
      </td>
      <td className={"omit"}>
        {pim.gpm}/{pim.xpm}
      </td>
    </Tr>
  );
};
