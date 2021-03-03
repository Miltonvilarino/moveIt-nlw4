import styled, { css } from 'styled-components';


export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

  ${({ theme }) => css`

    ${theme.title === 'dark' ? 
        css`
            button {
                border-radius: 5px;
                border: none;
                width: 48px;
                height: 24px;
                background: ${theme.colors.blue};
                color: ${theme.colors.title}
        }` 
        : 
        css`
            button {
                border-radius: 5px;
                border: none;
                width: 48px;
                height: 24px;
                background: ${theme.colors.title};
                color: white;
            }
        `}
    }
    }`
};
    
`;
