import React from 'react';
import {Link} from 'react-router-dom'

//Navegación entre pantallas
const Nav = (props) => 
<div>
    <div>
        <Link to={props.path}>{props.page}</Link>
    </div>
</div>


export default Nav;



