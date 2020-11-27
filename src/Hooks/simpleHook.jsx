import React, { useState } from 'react';

// Este hook contiene:
// Texto pasado a través de props
// Las propiedades básicas de un Hook con estado
// ademas de dos versiones para mostrar un valor
// 1. modificando los valores de una variable let
// 2. usando los hooks para guardar y cambiar el estado
// |-> Se puede observar en esta versión:
//    a) Que se puede usar una variable de puente para pasar al estado props del navegador
//    b) Que console.log al ser un evento del nav tiene un retraso de una unidad con respecto al valor local
//       
const SimpleHook = (props) => {

    // // variable let
    // let inputValue = "leter";

    // Hook
    const [text, setCounter] = useState({
        leter: "vacío"
    });
    // Está variable puede servir como puente para guardar propiedades un evento
    // del navegador (Como la letra escrita en input)
    // Y luego pasarle dichos datos a un estado
    // Cumpliendo la función de un useEffect
    let puenteEffect = "letter";

return(<div>
    <h2>{props.title}</h2>
    <input
    // Atributo que se muestra cuando no hay nada escrito
    placeholder = "write"

    // Evento que ocurre cuando algo en el componente cambia
    onChange={
        (evt) => {
            // // Version let
            // inputValue = evt.nativeEvent.data
            // console.log(inputValue);
            
            // Versión Hook
            puenteEffect = evt.nativeEvent.data
            setCounter({
                // leter: evt.nativeEvent.data 
                leter : puenteEffect // "con texto"
            })
            // Las letras que se muestran en la consola aparecen hasta el segundo cambio
            // En cambio en el texto local se muestra al instante
            console.log(text.leter)
        }
    }
    ></input>
    {/* Versión let */}
    {/* <h2>counter {inputValue}</h2> */}

    {/* Versión hook */}
    {/* Valor local, se muestra el cambio al instante a diferencia de console.log */}
    <h2>última letra: {text.leter}</h2>
    
</div>
    )
}

export default SimpleHook;