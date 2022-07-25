import styled from "styled-components";

//Barra de navegación y botones
export const NavBar = styled.div`
    border-bottom: solid orangered 0.1rem;
    
`;

export const NavButton = styled.div`
    a:link {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 20px;
        text-decoration: none;
        border-radius: 10px;
        padding: 0.2rem;
    }
`;

//PÁGINA PRINCIPAL
export const HomeStyle = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 18px;
    padding: 1rem;
    li{
        list-style-type: square;
        margin-bottom: 0.5rem;
    }
`;

//PÁGINA PRESUPUESTO
export const BudgetPage = styled.div`
    display: flex;
`;

//PARTE IZQUIERDA. Solicitud de presupuesto
export const BudgetRequest = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    width:35%;
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

//POPUPS
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

//Inputs referencia presupuesto y nombre cliente
export const BudgetReference = styled.div ` 
   background-color: beige;
   margin: 0.5rem;
   padding: 0.7rem;
   width: fit-content;
   input{
    display: block;
    margin-bottom: 0.5rem;
   }
   button{
    align-self: center;
   }
`;


//PARTE DERECHA. Listado de presupuestos solicitados
export const BudgetList = styled.div `
    border-left: solid black 0.1rem;
/*     border-radius: 5px; */
    width: fit-content;
    margin-top: 2rem;
    padding: 1rem;
    /* background-color: #fdece7; */
    display: grid;
    h3{
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0.3rem;
        text-align: center;
        background-color: #fc885e;
    }
`;

//Elemento de la lista
export const ListElement = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 12px;
ul{
    list-style-type: none;
}
.listElements{
   text-indent: -8px;
   list-style: circle;
}
.fecha{
    
    padding-bottom: 0.3rem;
    margin-bottom: 0.2rem;
}
.total, .referencia{
    font-weight: bold;
}
.referencia{
    color: orangered;
}
.total{
    margin-top: 0.2rem;
}

`;
