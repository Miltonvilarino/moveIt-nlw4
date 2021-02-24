import React from 'react';
import styles from '../../styles/components/CompletedChallenge.module.css';

const CompletedChallenge: React.FC = () => {
  return (
    <div className={styles.completedChallengeContainer} >
       <span> Desafios Completos</span>
       <span> 5 </span> 
    </div>);
}

export default CompletedChallenge;