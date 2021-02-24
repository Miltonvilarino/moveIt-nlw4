import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;

  button {
      border: none;
      background: green;
      width: 64px;
      height: 40px;
      border-radius: 12px;
      transition: background 2s;
      color: #fff;

      &:hover{
          background: blue;
      }
  }
`;
