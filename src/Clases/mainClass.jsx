import React from "react";
import { useSelector } from "react-redux";
import SimpleClass from "./simpleClass";
import {ButtonClass} from "../Guia_parts/buttonClass";
import PropsPadreHijo from "./propsPadreHijo/compPadre";
import MainRedux from "./usandoRedux/main";


export const MainClass = () => {

  const currentClass = useSelector((state) => state.ClassId)

  return (
    <div>
      <div>
        <div // Botones de selección
        >
          {/* <ButtonClass title={"I"} classId={1} /> */}
          <ButtonClass title={"SimpleClass"} classId={1} />
          <ButtonClass title={"PropsPadreHijo"} classId={2} />
          <ButtonClass title={"UsandoRedux"} classId={3} />
        </div>

        {/* {currentClass === 1 ? <h1>Current 1</h1> : null} */}
        {currentClass === 1 ? <SimpleClass title={"Texto para una clase simple"}/> : null}
        {currentClass === 2 ? <PropsPadreHijo/> : null}
        {currentClass === 3 ? <MainRedux/> : null}
      </div>
    </div>
  );
}
