import Popup from 'reactjs-popup';
import { PopupButton, PopupActive } from './Styled';

export const PagesPopup = (props) =>{
    return(
    <div>
     <Popup 
        trigger={<PopupButton> i </PopupButton>} 
        position="absolute">
            <PopupActive><div>
                Puedes elegir el número de páginas que quieres para tu web.<br/>
                El sitio web estará compuesto de {props.qty} páginas.
            </div></PopupActive>
     </Popup> 
    </div>
    )
}

export const LanguagesPopup = (props) =>{
    return(
    <div>
      <Popup trigger={<PopupButton> i </PopupButton>} 
       position="bottom">
        <PopupActive>
                <div>
                    El sitio web estará en {props.qty} idiomas
                </div>
        </PopupActive>
      </Popup>
    </div>
    )
}

  