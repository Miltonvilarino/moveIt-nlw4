import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CurrentExperience, ExpBar, Wrapper, ExperienceBarProgress } from './styles';

const ExperienceBar: React.FC = () => {
  const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

  const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;

  return <Wrapper >
      <span>0 xp</span>
        <ExpBar>
            <ExperienceBarProgress style={{ width: `${percentToNextLevel}%`}} />
            <CurrentExperience style={{ left: `${percentToNextLevel}%`}} >{currentExperience} xp</CurrentExperience>
        </ExpBar>
      <span>{experienceToNextLevel} xp</span>
  </Wrapper>;
}

export default ExperienceBar;