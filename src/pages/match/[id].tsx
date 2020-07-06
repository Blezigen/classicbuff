import styled from "styled-components";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Match, Player } from "../../shared";
import Layout from "../../components/Layout";
import { Table, Tr } from "../../components/LadderRow";
import api from "../../service/api";
import Link from "next/link";
import { steamIdToNum } from "../../utils/numSteamId";
import HeroIcon from "../../components/HeroIcon";
import ItemIcon from "../../components/ItemIcon";

export const ItemsContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;

  & img + img {
    margin-left: 8px;
  }

  width: fit-content;
`;
const PlayerRow = (p: Player) => {
  const items = p.items.split(",").map(it => it.substr(5));
  const playerUrl = `/player/${steamIdToNum(p.player.steam_id)}`;
  return (
    <Tr>
      <td>{p.level}</td>
      <td>
        <Link href={playerUrl}>
          <HeroIcon hero={p.hero} />
        </Link>
      </td>
      <td>
        <Link href={playerUrl}>{(p.player.name.length && p.player.name) || "(Пустой ник)"}</Link>
      </td>
      <td>
        <ItemsContainer>
          {items.map(it => (
            <ItemIcon item={it} />
          ))}
        </ItemsContainer>
      </td>
      <td>{p.kills}</td>
      <td>{p.deaths}</td>
      <td>{p.assists}</td>
      <td>
        {p.last_hits}/{p.denies}
      </td>
      <td>
        {p.gpm}/{p.xpm}
      </td>
    </Tr>
  );
};

const MatchResult = styled.div`
  font-size: 20px;
  &.green {
    color: #92a525;
  }

  &.red {
    color: #c23c2a;
  }
`;
const Team = styled.div`
  font-size: 24px;
  margin: 20px;

  &.green {
    color: #92a525;
  }

  &.red {
    color: #c23c2a;
  }
`;

const TeamShowcase = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Showcase = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const formatDuration = (d: number) => {
  const mins = Math.floor(d / 60);
  const secs = `${d % 60}`.length === 1 ? `0${d % 60}` : `${d % 60}`;
  return `${mins}:${secs}`;
};
const ScoreTable = styled.div`
  display: flex;
  flex-direction: row;
`;

const Duration = styled.div`
  margin: 20px;
  color: #c2c2c2;
`;

const Winner = styled.div`
  &.green {
    color: #92a525;
  }

  &.red {
    color: #c23c2a;
  }

  font-size: 24px;
  text-align: center;
  text-transform: uppercase;
`;
export const Score = styled.div`
  margin: 20px;

  &.green {
    color: #92a525;
  }

  &.red {
    color: #c23c2a;
  }

  font-size: 24px;
`;

const TeamTable = ({ players }: { players: Player[] }) => {
  return (
    <Table className="compact">
      <thead>
        <Tr>
          <th style={{ width: 30 }}>Уровень</th>
          <th style={{ width: 60 }}>Герой</th>
          <th style={{ width: 250 }}>Игрок</th>
          <th>Предметы</th>
          <th style={{ width: 40 }}>K</th>
          <th style={{ width: 40 }}>D</th>
          <th style={{ width: 40 }}>A</th>
          <th style={{ width: 40 }}>LH/D</th>
          <th style={{ width: 40 }}>GPM/XPM</th>
        </Tr>
      </thead>
      <tbody>
        {players.map(it => (
          <PlayerRow {...it} />
        ))}
      </tbody>
    </Table>
  );
};

const sumKills = (players: Player[]) => {
  let sum = 0;
  players.forEach(it => (sum += it.kills));

  return sum;
};

export default () => {
  const [match, setMatch] = useState<Match>();

  const { id } = useRouter().query;

  useEffect(() => {
    const fetch = () => {
      if (!Number.isNaN(Number(id))) {
        api
          .get<Match>("/match", { id })
          .then(it => {
            setMatch(it.data as Match);
          });
      }
    };
    fetch();
    const int = setInterval(fetch, 10000);

    return () => clearInterval(int);
  }, [id]);

  if (!match) return null;
  return (
    <Layout title={`dota2classic.ru 6.81b матч #${id}`}>
      <MatchResult className={match?.radiant_win ? "green" : "red"}>
        <Winner className={match?.radiant_win ? "green" : "red"}>
          {match?.radiant_win ? "Победа Radiant" : "Победа Dire"}
        </Winner>
        <ScoreTable>
          <Score className={"green"}>{sumKills(match!!.players.filter(it => it.team === 2))}</Score>
          <Duration>{formatDuration(match.duration)}</Duration>
          <Score className={"red"}>{sumKills(match!!.players.filter(it => it.team === 3))}</Score>
        </ScoreTable>
      </MatchResult>
      <Showcase>
        <TeamShowcase>
          <Team className={match?.radiant_win ? "green" : "red"}>Radiant</Team>
          <TeamTable players={match!!.players.filter(it => it.team === 2)} />
        </TeamShowcase>

        <TeamShowcase>
          <Team className={!match?.radiant_win ? "green" : "red"}>Dire</Team>

          <TeamTable players={match!!.players.filter(it => it.team === 3)} />
        </TeamShowcase>
      </Showcase>
    </Layout>
  );
};
/**
 docker pull enchantinggg4/mmbot:dotabuff
 docker ps -q --filter "name=dotabuff" | grep -q . && docker stop dotabuff && docker rm -fv dotabuff
 docker run -dit --name dotabuff -p 0.0.0.0:3000:3000 enchantinggg4/mmbot:dotabuff
 */
