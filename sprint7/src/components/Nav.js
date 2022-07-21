import React from 'react';
import {Link} from 'react-router-dom'
import { NavButton } from "./Styled";

//Navegación entre pantallas
const Nav = (props) => 
<NavButton> <div>
    <Link to={props.path}>{props.page}</Link>
</div>
</NavButton>


export default Nav;



