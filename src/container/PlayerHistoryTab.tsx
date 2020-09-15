import { Table, Tr } from "../components/LadderRow";
import PlayerMatch from "../components/PlayerMatch";
import Pagination from "../components/Pagination";
import React, { useState } from "react";
import { usePlayerHistoryQuery } from "../generated/sdk";
import { BaseGQLConfig } from "../shared";

interface Props {
  steam_id: string;
}
export default (props: Props) => {
  const [page, setPage] = useState(0);

  const { data } = usePlayerHistoryQuery({
    ...BaseGQLConfig,
    variables: {
      sid: props.steam_id,
      page
    }
  });

  return (
    <>
      <Table className={"compact"}>
        <thead>
          <Tr>
            <th>ID</th>
            <th>Режим</th>
            <th style={{ width: 20, textOverflow: "ellipsis" }}>Длительность</th>
            <th>Герой</th>
            <th className={"omit"}>Предметы</th>
            <th>Результат</th>
            <th style={{ width: 40 }}>K</th>
            <th style={{ width: 40 }}>D</th>
            <th style={{ width: 40 }}>A</th>
            <th className={"omit"} style={{ width: 40 }}>
              L/D
            </th>
            <th className={"omit"} style={{ width: 40 }}>
              GPM/XPM
            </th>
          </Tr>
        </thead>
        <tbody>
          {data?.PlayerHistory.data?.map((it, index) => (
            <PlayerMatch index={index} player={data?.Player} match={it} />
          ))}
        </tbody>
      </Table>
      {data?.PlayerHistory && (
        <Pagination
          pages={data?.PlayerHistory.pages}
          page={page}
          next={() => setPage(page + 1)}
          prev={() => setPage(Math.max(0, page - 1))}
        />
      )}
    </>
  );
};