import { appApi, useApi } from "../../api/hooks";
import { LinkButton } from "../Button";
import React from "react";
import styled from "styled-components";
import { Hint } from "../Hint";

const Connections = styled.div`
  display: flex;
  flex-direction: column;
`;
const DiscordContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  margin-bottom: 10px;
`;

const DiscordAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

const DiscordName = styled.div`
  font-size: 20px;
  color: white;
  margin-left: 10px;
  margin-right: 10px;
`;

export const DiscordBlock = () => {
  const { data } = useApi().playerApi.usePlayerControllerConnections();

  if (data?.error)
    return (
      <Connections>
        <DiscordContainer>
          <Hint>
            Бот не может найти Ваш аккаунт! А вы есть у нас в{" "}
            <a className={"link"} target={"__blank"} href="https://discord.gg/VU5wjA8">
              дискорде?
            </a>
          </Hint>
        </DiscordContainer>
        <LinkButton href={`${appApi.apiParams.basePath}/v1/auth/discord`}>Подключить другой Discord</LinkButton>
      </Connections>
    );
  if (!data?.discord)
    return (
      <DiscordContainer>
        <LinkButton href={`${appApi.apiParams.basePath}/v1/auth/discord`}>Подключить Discord</LinkButton>
      </DiscordContainer>
    );
  return (
    <Connections>
      <DiscordContainer>
        <DiscordAvatar src={data.discord.avatar} />
        <DiscordName>{data.discord.name}</DiscordName>
      </DiscordContainer>
      <LinkButton href={`${appApi.apiParams.basePath}/v1/auth/discord`}>Привязать другой аккаунт</LinkButton>
    </Connections>
  );
};