import React from "react";

var scrollWindow = 0;
var scrollWindowX = 0;

// Desarrolladores cambien el valor de está variable si quieres ajustar el ancho del lienzo, para ver el tamaño original dejalo en 1000 y media pantalla 0
var ancho = 400; // <-----
var alto = 187; // Cambiar si hubiera algún ajuste y se descuadrará la altura

//Global variables
var globalClickPress = false;

// Escucha scroll de la patalla
window.addEventListener("scroll", ScrollWindow);

// Funcion doumentar el scroll de la pantalla
function ScrollWindow(evt) {
  scrollWindow = evt.target.scrollingElement.scrollTop;
  scrollWindowX = evt.target.scrollingElement.scrollLeft;
}

// clase Lienzo en React
class Lienzo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 50,
      y: 50,
      pack: props.pack,
      scroll: 0,
      infoLienzo: [],
      showInfo: false,
      display: false,
      theHeight: 1,
      theWidth: 1,
      clickPress: false,
    };
  }

  //  Este evento ocurre cuando el usuario hace scroll dentro del lienzo, de esta forma ajusta la captura de coordenadas
  HacerScroll = (eventos) => {
    this.setState({
      scroll: eventos.target.scrollTop,
    });
  };

  // Este metodo actualiza el valor de x, y, cada que el usuario da clic sostenido y arrasta al lienzo
  FollowMouse = (evt) => {
    this.setState({
      x: -evt.clientX + 650 + ancho - scrollWindowX,
      y: evt.clientY - 234 + this.state.scroll + scrollWindow + alto,
    });
  };

  //Este metodo ocurre cuando el usuario suelta el clic dentro de el lienzo, de esta forma hace el envio de datos
  ColocarEnLienzo = () => {
    globalClickPress = false;
  };

  render() {
    // Este escuchador está para cancelar el envio de datos al hacer mouseup fuera del Lienzo

    return (
      <div>
        <div>
          {console.log(globalClickPress)}
          <div // Esta es la interfaz del lienzo
            // Estos son los eventos del mouse a los que responde
            onMouseMove={this.FollowMouse}
            onMouseUp={this.ColocarEnLienzo}
            onScroll={this.HacerScroll}
            onMouseDown={() => {
              globalClickPress = true;
            }}
            // Estos son los estilos del cuadro del Lienzo
            style={{
              width: ancho,
              height: 250,
              background: "#FCFCFF",
              position: "relative",
              overflowY: "scroll",
              border: "solid 1px",
              borderColor: "#D5D5D5",
            }}
            id="InterfazLienzo"
          >
            {/* Aquí se invoca el código del usuario, para que se muestre al interior del Lienzo */}
            <h5>Texto</h5>
            {/* Esto es el cuadro que representa un elemento siendo arrastrado al interior del lienzo */}
            {
              globalClickPress ? (
                <div>
                  <div
                    style={{
                      height: 40,
                      width: 40,
                      borderRadius: 8,
                      background: "#DBDBDB",
                      position: "absolute",
                      display: "table-cell",
                      verticalAlign: "middle",
                      // Este está es la pocisión reltativa a las coordenadas
                      // Lo que se le resta es para centrar el cuadro gris, quitandole la mitad del ancho y del alto a la posición
                      top: this.state.y, //- globalPack[1][1] / 2,
                      right: this.state.x, //- globalPack[1][2] / 2,
                      opacity: 0.4,
                    }}
                  ></div>
                  <div
                    style={{
                      height: 5,
                      width: 5,
                      borderRadius: 100,
                      background: "red",
                      position: "absolute",
                      top: this.state.y,
                      right: this.state.x,
                    }}
                  ></div>
                </div>
              ) : null // Solo será visible el cuadro cuando clicPress sea verdadero
            }
          </div>
          {/* Está es una prueba de como enviaría los datos requeridos a traves del state */}

          {/* Se actualizan variables originales al cierre */}
          <script>{(this.state.showInfo = false)}</script>
        </div>
      </div>
    );
  }
}

export default Lienzo;
