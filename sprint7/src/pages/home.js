import Nav from '../components/Nav';
import { HomeStyle, NavButton } from '../components/Styled';

const Home = () => 
<HomeStyle>
<div>
    <h2>¿Qué quieres hacer?</h2>
    <p>En la sección de presupuestos puedes obtener tu presupuesto al instante.</p>
    <p>Tienes diferentes opciones:</p>
    <ul>
        <li>Página web: tantas como quieras y en los idiomas que prefieras</li>
        <li>Consultoría SEO</li>
        <li>Campaña de Google Ads</li>
        <br/>
        <NavButton><Nav path='/budget' page= 'Solicita tu presupuesto'></Nav></NavButton>
    </ul>
</div>
</HomeStyle>


export default Home;