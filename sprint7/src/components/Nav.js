import React from 'react';
import {Link} from 'react-router-dom'
import { NavBar, NavButton } from "./Styled";

//Navegación entre pantallas
const Nav = (props) => 
<NavBar>
    <NavButton> 
        <div>
            <Link to={props.path}>{props.page}</Link>
        </div>
    </NavButton>
</NavBar>


export default Nav;



