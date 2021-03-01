import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import styles from '../../styles/components/CompletedChallenge.module.css';

const CompletedChallenge: React.FC = () => {
  const { challengesCompleted } = useContext(ChallengesContext);

  return (
    <div className={styles.completedChallengeContainer} >
       <span> Desafios Completos</span>
       <span> {challengesCompleted} </span> 
    </div>);
}

export default CompletedChallenge;