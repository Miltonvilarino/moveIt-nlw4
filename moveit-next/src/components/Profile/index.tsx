import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import styles from '../../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);

  return (
      <div className={styles.profileContainer} >
          <img src="https://github.com/miltonvilarino.png" alt="Milton Vilarino" />
          <div>
              <strong>Milton Vilarino</strong>
              <p>
                <img src="icons/level.svg" alt="Level" />
              Levei {level}
              </p>
          </div>
      </div>
  )
}

export default Profile;