
// Incluyendo setInterval y setTimeOut

import React, { useState } from 'react';

const Eventos = () => {

    const [texto, setTexto] = useState("\n\n\n\n");

    if(true) {
        setTimeout(() => {
            console.log("SETTIMEOUT")
        }, 2000);
        // setInterval(() =>
        //     console.log("Clock setInterval")
        // , 1000);
    }

    return(
    <div>
        <div
        style={{
            backgroundColor: "gray",
            height: 200,
            width: 200,
            left: 500,
            top: 140,
            position: "absolute",
            fontSize: 20,
            // Propiedad de scroll
            overflow: "scroll"
        }}
        onMouseDown = {
            () => {
                setTexto(texto + " MouseDown" )
            }
        }
        onMouseUp = {
            () => {
                setTexto(texto + " MouseUp")
            }
        }
        onScroll = {
            (evt) => {
                // Calcular coord en el eje Y
                setTexto(texto + " coords en Y del scroll: " + evt.target.scrollTop )
            }
        }
        onScroll = {
            (evt) => {
                // Calcular coord en el eje Y en onScroll
                console.log(evt.target.scrollTop)
            }
        }
        onKeyDown = {
            (e) => {
                // Calcular coord en el eje Y
                console.log(e.key)
            }
        }
        onMouseMove = {
            (evt) => {
                console.log("mousemouve ")
                // Calcular coord en el eje Y en onMouseMove
                // console.log("mousemouve " + evt.clientX)
            }}
        >
            <h6>scroll Y en console</h6>
            <input defaultValue={"KeyDown key"}></input>
            <br />
            <div>
        </div>
        <br/>
            {texto}
        </div>
    </div>)
}

export default Eventos;
