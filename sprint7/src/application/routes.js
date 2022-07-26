import Home from '../pages/home';
import Budget from '../components/Budget'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nav from '../components/Nav';
import { NavBar, NavBarLink } from '../components/Styled';

//Crea la ruta de los enlaces
const Router = () =>(
    <BrowserRouter>
        <NavBar><NavBarLink><Nav path='/' page= 'Home'></Nav></NavBarLink></NavBar>
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/budget/' element= {<Budget/>}/>
            <Route path='/404/' element= {<div>404</div>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;