import React from "react";
import ExperienceBar from "../components/ExperienceBar";
import Profile from "../components/Profile";

import styels from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styels.container} >
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>
        <div>

        </div>
      </section>
    </div>
  );
}
;
