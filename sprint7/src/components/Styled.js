import styled from "styled-components";

//Barra de navegación y botones
export const NavBar = styled.div`
    border-bottom: solid orangered 0.1rem;
    padding-bottom: 1rem;
`;

export const NavBarLink = styled.div`
    a:link {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 20px;
        text-decoration: none;
        border-radius: 10px;
        padding: 0.2rem;
    }
`;
export const NavButton = styled.div`
    a {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size: 18px;
        text-decoration: none;
        color: white;
        border-radius: 10px;
        padding: 0.5rem;
        background-color: orangered;
    }
`;

//PÁGINA PRINCIPAL
export const HomeStyle = styled.div`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    padding: 1.5rem;
    li{
        list-style-type: square;
        margin-bottom: 0.5rem;
    }
`;

//PÁGINA PRESUPUESTO
export const BudgetPage = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-wrap: wrap;
`;

//PARTE IZQUIERDA. Solicitud de presupuesto
export const BudgetRequest = styled.div`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 18px;
    margin-right: 2.5rem;
    .title, .totalBudget{
        font-weight: bold;
    }
    .deleteButton{
        background-color: red;
        border: solid darkgray 1px;
        border-radius: 5px;
        color: white;
        padding: 0.4rem;
        margin: 0.5rem;
    }
`;

//Desplegable al escoger opción web
export const Panell = styled.div `
    width: max-content;
    padding: 2rem 1rem 1rem 1rem;
    border: solid 0.15rem black;
    border-radius: 10px;
    margin: 1rem 0 1rem 0;
`;

    //Layout interior del Panell
    export const Option = styled.div`
        display: grid;
        grid-template-columns: 55% 45%;
        margin-bottom: 1rem;
        gap: 0.5rem;
        align-items: center;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-size: 18px;
    `;
    // Layout de opción numérica (distribución de botones y cuadro de texto)
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
   background-color: #f0f0f0;
   border-radius: 5px;
   margin: 0.5rem;
   padding: 0.7rem;
   width: fit-content;
   text-align: center;
   input{
    display: block;
    margin-bottom: 0.5rem;
   }
   button{
    margin: 0.5rem;
    padding: 0.3rem;
    background-color: #f88961;
    border: solid grey 0.1px;
    border-radius: 5px;
    color: white;
   }
`;


//PARTE DERECHA. Listado de presupuestos solicitados
//Container
export const BudgetList = styled.div `
    max-width: 30rem;
    border-radius: 5px;
    padding: 1rem;
    background-color: #fdece7;
    display: block;
`;
//Título lista
export const ListTitle = styled.div `
h3{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-align: center;
    padding: 0.3rem;
    margin: 0;
    background-color: #fc885e;
    border-radius: 5px;
}
`;

export const ContentList = styled.div `

`;
//Elementos ordenar y busar
export const SortList = styled.div `
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    border: solid lightgray 0.1px;
    min-width: max-content;
    margin-top: 1rem;
button{
    margin: 0.5rem;
    border-radius: 5px;
    border: solid gray 1px;
    padding: 0.3rem;
    width: 7rem;
}
.sort{
    margin-bottom: 0.3rem;
    border-bottom: solid lightgray 0.1px;
    padding: 0.5rem;
}
.search{
    margin-bottom: 0.3rem;
    padding: 0.5rem;
}
`;

//Contenido de la lista
//Container
export const ListElementContainer = styled.div`
    display: flex;
    width: 26rem;
    max-height: 30rem;
    flex-wrap: wrap;
    overflow: scroll;
`;
//Elementos (presupuestos)
export const ListElement = styled.div`
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 12px;
width: 95%;
height: 90%;
border: solid black 0.1px;
border-radius: 10px;
margin: 0.8rem 0 0.1rem 0;
ul{
    text-indent: -18px;
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
    margin-bottom: 1rem;
}

`;
