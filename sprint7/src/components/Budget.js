import React from "react";
import { useState, useEffect } from "react";
import {Panell, Button, Option, OptionsNumber} from './Styled'


function Page2 () {
    //Array de objetos con opciones principales: web, seo y ads 
        //Para que se mantenga el input del cliente al actualizar la pantalla hay que hacer getItem en LocalStorage (hago condicional para que salga a 0 por defecto o con el input en caso de que haya)
    const [isChecked, setIsChecked] = useState({
            web: 0,
            seo: 0, 
            ads: 0
        })

    //Importe total del presupuesto
    const totalBudget = isChecked.web + isChecked.seo + isChecked.ads; 

    return(
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
    </div>  
    
    )
}

export default Page2;