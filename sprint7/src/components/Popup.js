import Popup from 'reactjs-popup';
import { PopupButton, PopupActive } from './Styled';



export const PagesPopup = (props) =>{
    return(
    <div>
     <Popup 
        trigger={<PopupButton> i </PopupButton>} 
        position="bottom center"
        offsetY={100}
        overlayStyle={{background:'gray', opacity:'50%'}}
        repositionOnResize={true}
        arrow={false}
        >
        <PopupActive>
            <div>
                Puedes elegir el número de páginas que quieres para tu web.<br/>
                El sitio web estará compuesto de {props.qty} página(s).
            </div>
        </PopupActive>
     </Popup> 
    </div>
    )
}

export const LanguagesPopup = (props) =>{
    return(
    <div>
      <Popup 
        trigger={<PopupButton> i </PopupButton>} 
        position="bottom center"
        offsetY={55}
        overlayStyle={{background:'gray', opacity:'50%'}}
        repositionOnResize={true}
        arrow={false}
        >
        <PopupActive>
                <div>
                Puedes elegir en cuántos idiomas quieres tu web.<br/>
                El sitio web estará en {props.qty} idioma(s).
                </div>
        </PopupActive>
      </Popup>
    </div>
    )
}

  