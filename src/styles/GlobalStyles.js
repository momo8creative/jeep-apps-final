import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color:${({ theme }) => theme.bg2};
        color:${({ theme }) => theme.text};
    }

    a{
        text-decoration:none;
        color:inherit
    }

    ul {
        list-style:none;
    }

    button {
        background:none;
        border:none;
        outline:none;
        color:inherit;
        cursor: pointer;
    }

    input {
        background-color:transparent;
        outline:none;
        border:none;
        color:inherit;
        font-size:1rem;
    }

`;
