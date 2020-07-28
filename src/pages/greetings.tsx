import Head from "next/head";
import Layout, { LinkWrapper } from "../components/Layout";
import React from "react";
import styled from "styled-components";
import Link from "next/link";

const LandingBody = styled.div`
  color: #c2c2c2;

  @media (max-width: 600px) {
    width: 100vw;
    overflow: hidden;
  }

  & p {
    font-size: 18px;

    @media (max-width: 600px) {
      padding: 6px 20px 6px 20px;
    }
  }

  @media (max-width: 600px) {
    & img + img {
      margin-top: 20px;
    }
  }
  & img {
    @media (max-width: 600px) {
      max-height: 30vh;
    }
  }

  & img.semi-compact {
    width: 70%;

    @media (max-width: 600px) {
      max-height: 30vh;
      width: 100%;
    }
  }

  & a {
    height: 25px;
    text-decoration: none;

    transition: 0.3s;
    color: #4ab19d;
    &:hover {
      color: #a9f5e6;
    }
    width: auto;
  }
`;

export default () => {
  return (
    <Layout title={<h1>Классическая Dota</h1>}>
      <Head>
        <title>Классическая Dota</title>
        <meta
          name="description"
          content="dota2classic.ru - discord сервер для игры в классическую доту 6.81 2014 года"
        />
      </Head>

      <LandingBody>
        <img src="/static/landing/screen1.jpg" alt="" />
        <p>
          Привет. <br /> Ты попал на сайт проекта dota2classic. Здесь мы играем в старую доту - если быть точным, в
          версию The International 2014 года.
        </p>
        <p>
          Ты не одинок в мыслях, что старая дота была лучше, ламповее, баланснее. И мечта поиграть в старую доту не у
          тебя одного - поэтому и появился этот проект.
        </p>
        <img src="/static/landing/old.png" alt="" />
        <img src="/static/landing/profile.jpeg" alt="" />
        <p>
          Начать играть очень просто - нужно только скачать и распаковать архив с клиентом игры. Скачать можно с{" "}
          <a href="https://yadi.sk/d/7jOGNrUcpppedg">Яндекс Диска</a> или{" "}
          <a href="https://drive.google.com/open?id=1-pmNQZfgjN6b8YYTLgv7HidnB7zIYqAv">Google Drive</a>
        </p>
        <p>Все начиналось с того, что руками хостилось лобби, по паролю присоединялись те, кто хочет играть</p>
        <p>
          Сейчас же это автоматический матчмейкинг в <a href="https://discord.gg/VU5wjA8">discord сервере.</a> Поиск
          игры происходит следующим образом:
        </p>
        <p>
          Если хочешь поиграть, ставь реакцию пуджа в сообщении в канале{" "}
          <a href="https://discord.gg/pawhVPc">#матчмейкинг</a>
        </p>
        <img className={"semi-compact"} src="/static/landing/pudge.png" />
        <p>
          Когда набирается 10 человек, специальный бот, отвечающий за матчмейкинг, присылает в личные сообщения проверку
          на готовность.
        </p>
        <img className={"semi-compact"} src="/static/landing/accept.png" alt="" />
        <p>В нем нужно нажать на реакцию, чтобы принять или отклонить матч.</p>
        <p>
          Когда все 10 человек примут игру, запускается сервер и в личные сообщения приходит ссылка на сервер. Запусти
          клиент и нажми на ссылку, и ты автоматически присоединишься к серверу.
        </p>
        <p>Когда все 10 человек зайдут на сервер, произойдет распределение игроков(баланс по рейтингу).</p>
        <img src="/static/landing/game.png" alt="" className="semi-compact" />
        <p>
          Иногда бывает баг сервера, при котором игроков не закидывает в команды. Проверить это можно открыв таблицу
          счета - если в одной из команд меньше 5 человек, то нужно перезапустить сервер.
        </p>
        <img src="/static/landing/rehost.png" alt="" className="semi-compact" />
        <p>
          В таком случае нужно открыть канал <a href="https://discord.gg/pawhVPc">#матчмейкинг</a> и нажать на 💩 в
          сообщение <b>РЕХОСТ?</b>. После 5 голосов, сервер автоматически перезапустится, бот отправит сообщение и нужно
          просто зайти на него снова.
        </p>
        <img className={"semi-compact"} src="/static/landing/rehost-msg.png" alt="" />
        <p>
          Большинство игр - рейтинговые. Первые 5 игр в сезоне - калибровочные, за них ты получаешь или теряешь +-250
          ммр. Посмотреть таблицу лидеров можно на этом сайте в разделе{" "}
          <Link href={"/"}>
            <a>Таблица лидеров</a>
          </Link>
        </p>
        <p>
          Ждем тебя на нашем <a href="https://discord.gg/VU5wjA8">сервере!</a>
        </p>
      </LandingBody>
    </Layout>
  );
};
