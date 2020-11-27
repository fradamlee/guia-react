import React, { useEffect, useState } from 'react';

export const UseEffect = () => {

    let puenteEffect = "leter";

    const [text, setCounter] = useState({
        leter: "vacío"
    });

    // Si no se usara useEfect el console.log 
    // no se actualizaría al instante
    useEffect(() => {
        console.log(text.leter) 
    })

    return (<input
        onChange={
            (evt) => {
                
                // Versión Hook
                puenteEffect = evt.nativeEvent.data
                setCounter({
                    leter : puenteEffect // "con texto"
                })
                // Las letras que se muestran en la consola aparecen hasta el segundo cambio
                // En cambio en el texto local se muestra al instante
            }
        }
    ></input>)
}