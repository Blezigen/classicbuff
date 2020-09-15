import styled from "styled-components";
import * as React from "react";
import formatGameMode from "../../utils/format/formatGameMode";
import { QParty } from "./Queue";
import { RoomDto } from "../../generated/sdk";

const RoomWrapper = styled.div``;
export default (p: RoomDto) => {
  return (
    <RoomWrapper>
      <h3>{formatGameMode(p.mode)}</h3>
      {p.parties.map(it => (
        <QParty {...it} mode={p.mode} invalidate={() => undefined} />
      ))}
    </RoomWrapper>
  );
};