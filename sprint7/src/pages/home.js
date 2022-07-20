import {Link} from 'react-router-dom';

const Home = () => 
<div style={{fontFamily:'arial'}}>
    <h2>¿Qué quieres hacer?</h2>
    <p>En la sección de presupuestos puedes obtener tu presupuesto al instante</p>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/budget">Presupuestos</Link></li>
    </ul>
</div>;


export default Home;