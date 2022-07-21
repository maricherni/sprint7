import styled from "styled-components";

//Enlaces de navegación
export const NavButton = styled.div`
    a:link {
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        border-radius: 10px;
        background-color: #eee7e7;
        padding: 0.2rem;
    }
`;

//Home style
export const HomeStyle = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    padding: 1rem;
    li{
        list-style-type: square;
        margin-bottom: 0.5rem;
    }
`;

//Desplegable al escoger opción web
export const Panell = styled.div `
    width: max-content;
    padding: 2rem 1rem 1rem 1rem;
    border: solid 0.2rem black;
    border-radius: 10px;
    margin: 1rem 0 1rem 0;

`;

//Layout de opciones web: páginas e idiomas 
    export const Option = styled.div`
        display: grid;
        grid-template-columns: 55% 45%;
        margin-bottom: 1rem;
        gap: 0.5rem;
        align-items: center;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 18px;
    `;

    export const OptionsNumber = styled.div`
        display: flex;
    `;

    //+ y - buttons
    export const Button = styled.button`
        background-color: orangered;
        border: none;
        border-radius: 10px;
        width: 2.5rem;
        height: 2rem;
        color: white;
        font-size: 2rem;
        text-align: center;
    `

//Info buttons
export const PopupButton = styled.div`
  width: 20px;
  height: 20px;
  background-color: grey;
  color:white;
  border-radius: 50%;
  margin-left:10px;
  display:flex;
  align-items: center;
  justify-content: center;
`

//Popup text
export const PopupActive = styled.div ` 
    border: solid black 0.2rem;
    border-radius: 10px;
    padding: 2rem;
    background-color: white;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    align-items: flex-end;
`;
