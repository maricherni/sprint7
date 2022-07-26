import React from "react";
import { useState, useEffect } from "react";
import Nav from "./Nav";
import {BudgetPage, BudgetRequest, BudgetReference, BudgetList, Panell, Button, Option, OptionsNumber} from './Styled'
import {PagesPopup, LanguagesPopup} from "./Popup";
import ListBudgets from "./PresupuestosLista";


function Budget () {
    //Array de objetos con opciones principales: web, seo y ads 
      //Para que se mantenga el input del cliente al actualizar la pantalla hay que hacer getItem en LocalStorage (hago condicional para que salga a 0 por defecto o con el input en caso de que haya)
    const [isChecked, setIsChecked] = useState(
        localStorage.getItem('checked') 
        ? JSON.parse(localStorage.getItem('checked'))
        :{
         web: 0,
         seo: 0, 
         ads: 0
        })
        
    //Contadores opciones adicionales de páginas e idiomas 
    const [qtyPages, setQtyPages] = useState(localStorage.getItem('pages') ? (localStorage.getItem('pages')) : 0);
    const [qtyLanguages, setQtyLanguages] = useState(localStorage.getItem('languages') ? (localStorage.getItem('languages')) : 0); 
    
    let totalAdditional = qtyPages * 30 + qtyLanguages * 30;
        
    if(!isChecked.web){
      totalAdditional = 0;
    }
        
    //Referencia presupuesto y nombre cliente
    const [budgetRef, setBudgetRef] = useState(localStorage.getItem('budget') ? JSON.parse(localStorage.getItem('budget')) : '');
    const [customer, setCustomer] = useState(localStorage.getItem('customer') ? JSON.parse(localStorage.getItem('customer')) : '');

    //Listado presupuestos
    const [budgetList, setBudgetList] = useState(localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list')):[]);

    //Almacenar el input del cliente en Local Storage
    useEffect(()=>{
        try{
         setIsChecked(isChecked)
         setQtyPages(qtyPages)
         setQtyLanguages(qtyLanguages)
         setBudgetRef(budgetRef)
         setCustomer(customer)
         setBudgetList(budgetList)
         localStorage.setItem('pages', qtyPages)
         localStorage.setItem('languages', qtyLanguages)
         localStorage.setItem('checked', JSON.stringify(isChecked))
         localStorage.setItem('budget', JSON.stringify(budgetRef))
         localStorage.setItem('customer', JSON.stringify(customer))
         localStorage.setItem('list', JSON.stringify(budgetList))
        } catch (error){
            console.error(error)
        }
    },[qtyPages, qtyLanguages, isChecked, budgetRef, customer, budgetList])

    //Añadir presupuestos a la lista
    const handleSaveBudget = () => {
        const date = new Date().toLocaleString();
        const miliseconds = Date.now();
        let hide = false;
        const newBudget = {hide, miliseconds, isChecked, qtyPages, qtyLanguages, budgetRef, customer, date, totalBudget};
        setBudgetList([...budgetList, newBudget]) 
        console.log(budgetList)
    }

    //Ordenar lista por presupuesto
    const sortByBudget = () => {
        const byName = budgetList.sort((a,b)=> (a.budgetRef < b.budgetRef)? -1 : 1)
        setBudgetList([...byName])
    }
    //Ordenar lista por fecha
    const sortByDate = () => {
        const byDate = budgetList.sort((a,b) => a.miliseconds - b.miliseconds).reverse();
        setBudgetList([...byDate]);
       
    }
    //Ordenar lista por fecha
    const sortInit = () => {
        const restart = budgetList.sort((a,b) => a.miliseconds - b.miliseconds);
        setBudgetList([...restart]);
    }
    //Buscar presupuesto por nombre
    /* const [search, setSearch] = useState(''); */ // Si le añadimos botón
    const searchBudget = (e) => {
        budgetList.map(budget => {
            return budget.budgetRef.startsWith(e.target.value)
                ? budget.hide = false 
                : budget.hide = true
        })
        setBudgetList([...budgetList]);
    }
    //Importe total del presupuesto
    const totalBudget = isChecked.web + totalAdditional + isChecked.seo + isChecked.ads; 


    return(
    <BudgetPage>
        <header><Nav path='/' page= 'Home'></Nav></header>
    <BudgetRequest>
    
    <div>
        <p>¿Qué quieres hacer?</p>
        <div>
            {/* WEB */}
            <div>
                <input
                    type="checkbox"
                    checked={Boolean(isChecked.web)} // Si el valor es 0, -0, null, false, NaN, undefined o (""), el valor será false. Con el resto de valores, incluídos objetos, [] o el string 'false', el valor será true.
                    onChange={(e) => e.target.checked
                        ?setIsChecked({...isChecked, web: isChecked.web +500})
                        :setIsChecked({...isChecked, web: isChecked.web -500})
                    }
                />
                <label htmlFor="webPage">
                    Una página web (500€)
                </label>
                    {Boolean(isChecked.web) &&
                    <div> 
                        <Panell>
                        <div>
                            <Option>
                                <label htmlFor="qtyPages">
                                    Número de páginas 
                                </label>
                                <OptionsNumber>
                                    <Button name="morePages" onClick={()=>setQtyPages(parseInt(qtyPages)+1)}>+</Button> {/*ParseInt evita que si empieza escribiendo y decide darle al botón se sume en modo número y no en modo string (añadiendo un 1) */}
                                    <input 
                                    type="number"
                                    name="qtyPages"
                                    style={{border:'none', width:'3rem'}} 
                                    value={qtyPages}
                                    onChange={(e)=>setQtyPages(e.target.value)}
                                    />
                                    <Button name="lessPages" onClick={()=>setQtyPages(qtyPages > 0 ? qtyPages - 1: qtyPages)}>-</Button><PagesPopup qty={qtyPages}/>
                                </OptionsNumber>
                            </Option>
                            <Option>
                                <label htmlFor="qtyLanguages">
                                    Número de idiomas 
                                </label>
                                <OptionsNumber>
                                    <Button onClick={()=>setQtyLanguages(parseInt(qtyLanguages)+1)}>+</Button>
                                    <input
                                    type="number"
                                    name="qtyLanguages"
                                    style={{border:'none', width:'3rem'}}
                                    value={(qtyLanguages)}
                                    onChange={(e)=>setQtyLanguages(e.target.value)}
                                    />
                                    <Button onClick={()=>setQtyLanguages(qtyLanguages > 0 ? qtyLanguages - 1: qtyLanguages)}>-</Button><LanguagesPopup qty={qtyLanguages}/>
                                </OptionsNumber>
                            </Option>
                        </div>
                        </Panell>
                    </div>
                    }
            </div>
            {/* SEO */}
            <div>
                <input
                    type="checkbox"
                    checked={Boolean(isChecked.seo)} 
                    onChange={(e) => e.target.checked
                        ?setIsChecked({...isChecked, seo: isChecked.seo +300})
                        :setIsChecked({...isChecked, seo: isChecked.seo -300})
                    }
                />
                <label htmlFor="seo">
                    Una consultoría SEO (300€)
                </label>
            </div>
            {/* ADS */}
            <div>
                <input
                    type="checkbox"
                    checked={Boolean(isChecked.ads)} 
                    onChange={(e) => e.target.checked
                        ?setIsChecked({...isChecked, ads: isChecked.ads +200})
                        :setIsChecked({...isChecked, ads: isChecked.ads -200})
                    }
                />
                <label htmlFor="ads">
                    Una campaña de Google Ads (200€)
                </label>
            </div>
        </div>
        <p>Precio: {totalBudget} €</p>
        <BudgetReference>
        <div>
            <input
                type="text"
                placeholder="Referencia del presupuesto"
                value={budgetRef}
                onChange={(e)=>setBudgetRef(e.target.value)}
            />   
            <input
                type="text"
                className="customer"
                placeholder="Nombre del cliente"
                value={customer}  
                onChange={(e)=>setCustomer(e.target.value)}   
                required           
            />  
            <button onClick={handleSaveBudget}>Guardar</button>      
        </div>
        </BudgetReference>
    </div> 
    </BudgetRequest>
    <BudgetList>
        <h3>MIS PRESUPUESTOS</h3>
        <span>
        {/* Sort buttons */}
        <label>Ordenar por: </label>
        <button onClick={sortByBudget}>Referencia</button>
        <button onClick={sortByDate}>Más reciente</button>
        <button onClick={sortInit}>Restaurar orden</button>
        <br />
        <label> Buscar por referencia: </label>
        <input type="text" onChange={searchBudget} />
        {/* <input 
            type="text" 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={searchBudget}>Buscar</button> */} {/* Si le añadimos botón al buscador */}
        
        </span>
        {budgetList.map((budget, index)=>{
            if(budget.hide){ 
                return null
            } else{
            return(
                <ListBudgets
                    key={index}
                    web={budget.isChecked.web}
                    seo={budget.isChecked.seo}
                    ads={budget.isChecked.ads}
                    qtyPages={budget.qtyPages}
                    qtyLanguages={budget.qtyLanguages}
                    customer={budget.customer}
                    budgetRef={budget.budgetRef}
                    date={budget.date}
                    totalBudget={budget.totalBudget}
                />
            )
            }
        })}
        
    </BudgetList> 
    </BudgetPage>
    )
}

export default Budget;