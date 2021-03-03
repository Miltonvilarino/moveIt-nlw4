import { createGlobalStyle, css} from 'styled-components'

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

${({ theme }) => css `



@media(max-width: 1080px){
    html {
       font-size: 93.73%; 
    }
}

@media(max-width: 720px){
    html {
       font-size: 87.5%; 
    }
}

body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.text};
    transition: background-color 0.3s, color 0.3s;
}

body, input, textarea {
    font: 400 1rem "Inter", sans-serif;  
}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
    color: inherit;
}
`}

`;