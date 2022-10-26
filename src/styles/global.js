import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Poppins', sans-serif;
        background-color: #f2f2f2;
    }
`;

export default Global;