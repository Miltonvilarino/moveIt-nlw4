import React from 'react';

import styles from '../../styles/components/Profile.module.css';

const Profile: React.FC = () => {
  return (
      <div className={styles.profileContainer} >
          <img src="https://github.com/miltonvilarino.png" alt="Milton Vilarino" />
          <div>
              <strong>Milton Vilarino</strong>
              <p>
                <img src="icons/level.svg" alt="Level" />
              Levei 1
              </p>
          </div>
      </div>
  )
}

export default Profile;