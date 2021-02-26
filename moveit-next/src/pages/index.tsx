import React from "react";

import Head from 'next/head'

import CompletedChallenge from "../components/CompletedChallenge";
import Countdown from "../components/Countdown";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";
import ChallengeBox from "../components/ChallengeBox";

import styels from '../styles/pages/Home.module.css'


export default function Home() {
  return (
    <div className={styels.container} >
      <Head>
        <title>Inicio - move.it</title>
      </Head>


      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenge />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
    </div>
  );
}
;
