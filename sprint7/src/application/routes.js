import Home from '../pages/home';
import BudgetPath from '../pages/budget';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Crea la ruta de los enlaces
const Router = () =>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/budget/' element= {<BudgetPath/>}/>
            <Route path='/404/' element= {<div>404</div>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;