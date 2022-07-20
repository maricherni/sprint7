import Home from '../pages/home';
import Budget from '../components/Budget'
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const Router = () =>(
    <BrowserRouter>
        <Routes>
            <Route path='/' element= {<Home/>}/>
            <Route path='/budget/' element= {<Budget/>}/>
            <Route path='/404/' element= {<div>404</div>}/>
        </Routes>
    </BrowserRouter>
);

export default Router;