import React from 'react';

import { Header } from './styles';

const ExperienceBar: React.FC = () => {
  return <Header>
      <span>0 xp</span>
        <div>
            <div style={{ width: '50%'}} />

            <span style={{ left: '50%'}} >300 xp</span>
        </div>
      <span>600 xp</span>
  </Header>;
}

export default ExperienceBar;