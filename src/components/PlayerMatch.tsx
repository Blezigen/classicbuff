import { LadderElement, Match } from "../shared";
import Router from "next/router";
import { Tr } from "./LadderRow";
import React from "react";
import { HeroPreview } from "../pages/player/[id]";
import { formatDuration, ItemsContainer } from "../pages/match/[id]";
import ItemIcon from "./ItemIcon";
import { formatDateStr } from "../utils/format/formateDateStr";

export interface PlayerMatchInfo {
  player: LadderElement;
  match: Match;
}
export default ({ match, player }: PlayerMatchInfo) => {
  const pim = match.players.find(it => it.player.steam_id === player.steam_id)!!;
  const isWin = match.radiant_win ? pim.team === 2 : pim.team === 3;
  const items = pim.items.split(",").map(it => it.substr(5));
  return (
    <Tr className={"link"} onClick={() => Router.push("/match/[id]", `/match/${match.id}`)}>
      <td className={"green"}>
        {match.id} <br />{" "}
        <span style={{ fontSize: 12, marginTop: 2, color: "#c2c2c2" }}>{formatDateStr(match.timestamp)}</span>
      </td>
      <td>{formatDuration(match.duration)}</td>
      <td>
        <HeroPreview src={`/static/heroes/${pim.hero}.png`} />
      </td>
      <td>
        <ItemsContainer>
          {items.map(it => (
            <ItemIcon item={it} />
          ))}
        </ItemsContainer>
      </td>
      <td className={isWin ? "green" : "red"}>
        <span>{!isWin ? "Поражение" : "Победа"}</span>
      </td>
      <td>{pim.kills}</td>
      <td>{pim.deaths}</td>
      <td>{pim.assists}</td>
    </Tr>
  );
};
