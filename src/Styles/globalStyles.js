import { createGlobalStyle } from "styled-components";
import styled from "styled-components";


export const GlobalStyle = createGlobalStyle`

 *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    writing-mode: unset;
 }

 :root{
    --color-primary: #FF577F;
    --color-primary-Focus: #FF427F;
    --color-primary-Negative: #59323F;

    --grey-4: #121214;
    --grey-3: #212529;
    --grey-2: #343B41;
    --grey-1: #868E96;
    --grey-0: #F8F9FA;

    --sucess: #3FE864;
    --negative:#E83F5B;

    font-size: 60%;
 }

 button{
    cursor: pointer;
    border: 0;
    background: transparent;
 }

 ul, ol, li{
    list-style: none;
 }

 section, aside, div{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
 }

 body{
   background-color: #000000;
 }
 `