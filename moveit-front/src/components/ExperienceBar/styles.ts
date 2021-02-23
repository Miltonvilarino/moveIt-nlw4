import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  align-items: center;

  span {
      font-size: 1rem;
  }

  > div {
    flex: 1;
    height: 4px;
    border-radius: 4px;
    background: #dcdde0;
    margin: 0 1.5rem;
    position: relative;
    span {
        position: absolute;
        top: 12px;
        transform: translateX(-50%);   
    }
  }

  > div > div {
    height: 4px;
    border-radius: 4px;
    background: #4cd62b;

  }

`;
