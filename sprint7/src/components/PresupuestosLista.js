import { ListElement } from "./Styled";


//Plantilla de cada uno de los presupuestos que salen en la lista de la parte derecha
const ListBudgets = (props) => {
const {web, seo, ads, qtyPages, qtyLanguages, customer, budgetRef, totalBudget, date } = props;

return(
    <>
    <div>
        
       <ListElement>
        <ul>
            {budgetRef ? <li className="referencia">{budgetRef} </li> : ''}
            {customer ? <li>Cliente: {customer}</li>: ''}
            <li className="fecha">{`Fecha: ${date}`}</li>
            <li>Servicios solicitados: 
                <ul>
                    {web ? <li className= 'listElements'>Página web: {qtyPages} página(s) en {qtyLanguages} idioma(s)</li>: ''}    
                    {seo ? <li className= 'listElements' >Consultoría SEO</li>: ''}    
                    {ads ? <li className= 'listElements'>Campaña Google Ads</li>: ''}    
                </ul>
            </li>
            <li className="total">{`Total presupuesto: ${totalBudget}€`}</li>
        </ul>
        </ListElement>  
    </div>
    </>
)
}

export default ListBudgets;