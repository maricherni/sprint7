import Budget from '../components/Budget';
import Nav from '../components/Nav';
import { NavBar, NavBarLink } from '../components/Styled';

const BudgetPath = () => 
<div>
    {/* Barra de navegación */}
    <NavBar><NavBarLink><Nav path='/' page= 'Home'></Nav></NavBarLink></NavBar>
    {/* App solicitud presupuesto */}
    <Budget/> 
</div>

export default BudgetPath;