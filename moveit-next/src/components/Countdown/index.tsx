import React, { useState, useEffect, createContext, useContext } from "react";
import { CountdownContext } from "../../contexts/CountdownContext";

import { CountdownButton, WrapperCountdown} from "./styles";

const Countdown: React.FC = () => {
  const {
    hasFinished,
    isActive,
    resetCountdown,
    minutes,
    seconds,
    startCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <WrapperCountdown >
        <div>
          <span>{minuteLeft} </span>
          <span>{minuteRight} </span>
        </div>
        <span>:</span>
        <div>
          <span> {secondLeft} </span>
          <span> {secondRight} </span>
        </div>
      </WrapperCountdown>

      {hasFinished ? (
        <CountdownButton disabled >
          Ciclo Encerrado
        </CountdownButton>
      ) : (
        <>
          {isActive ? (
            <CountdownButton
              type="button"
              onClick={resetCountdown}
            >
              Abandonar Ciclo
            </CountdownButton>
          ) : (
            <CountdownButton
              type="button"
              onClick={startCountdown}
            >
              Iniciar um ciclo
            </CountdownButton>
          )}
        </>
      )}
    </div>
  );
};

export default Countdown;
