import React from 'react';
import {Link} from 'react-router-dom'
import { NavBar, NavButton } from "./Styled";

//Navegación entre pantallas
const Nav = (props) => 
<div>
<NavBar>
    <NavButton> 
        <div>
            <Link to={props.path}>{props.page}</Link>
        </div>
    </NavButton>
</NavBar>
</div>


export default Nav;



