import React, { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContext } from "../../contexts/CountdownContext";

import { ChallengeActive, ChallengeNotActive, Wrapper, ChallengeButton } from './styles';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(
    ChallengesContext
  );
  const { resetCountdown } = useContext(CountdownContext);

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Wrapper >
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <div>
            <img src={`icons/${activeChallenge.type}.svg`} />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminha de 3 minutos</p>
          </div>

          <footer>
            <ChallengeButton
              type="button"
              failed
              onClick={handleChallengeFailed}
            >
              Falhei
            </ChallengeButton>
            <ChallengeButton
              succeeded
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </ChallengeButton>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive >
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level UP" />
            Avance de level completando desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Wrapper>
  );
};

export default ChallengeBox;
