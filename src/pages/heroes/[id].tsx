import Router, { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Head from "next/head";
import { Table, Tr } from "../../components/LadderRow";
import cx from "classnames";
import { formatDateStr } from "../../utils/format/formateDateStr";
import { formatDuration } from "../match/[id]";
import HeroIcon from "../../components/HeroIcon";
import { Match } from "../../shared";
import api from "../../service/api";
import { Heroes, MatchIdCol } from "../history";
import heroName from "../../utils/heroName";
import MatchRow from "../../components/MatchRow";
import PlayerMatch from "../../components/PlayerMatch";

const fetchHistoryPage = async (hero: string): Promise<Match[]> => {
  const res = await api.get<Match[]>("/public/matches_hero", { hero });

  return res.data as Match[];
};

export default () => {
  const { id } = useRouter().query;

  const [history, setHistory] = useState<Match[]>([]);

  const fetch = async () => {
    const items = await fetchHistoryPage(id as string);

    setHistory(items);
  };

  useEffect(() => {
    const int = setInterval(fetch, 10000);

    return () => clearInterval(int);
  });

  useEffect(() => {
    fetch();
  }, [id]);

  return (
    <Layout title={<h3>{heroName(id as string)}</h3>}>
      <Head>
        <title>{heroName(id as string)}</title>
      </Head>
      <Table className="compact">
        <thead>
          <Tr>
            <th>ID матча</th>
            <th>Режим</th>
            <th>Победитель</th>
            <th>Длительность</th>
            <th className="green omit">Radiant team</th>
            <th className="red omit">Dire team</th>
          </Tr>
        </thead>
        <tbody>
          {history.map((it, index) => (
            <PlayerMatch player={it.players.find(it => it.hero === id)!!} index={index} match={it} />
          ))}
        </tbody>
      </Table>
    </Layout>
  );
};
