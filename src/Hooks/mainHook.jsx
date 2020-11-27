//

import React from "react";
// import { useState } from "react";
import { useSelector } from "react-redux";
import {ButtonHook} from "../Guia_parts/buttonHook";
import { ConRedux } from "./conRedux";
import Eventos from "./eventos";
import SimpleHook from "./simpleHook";
import {UseEffect} from "./useEffect";

// import { increment } from "../redux/actions";

const MainHook = () => {
  // const counter = useSelector((state) => state.counter);
  const currentHook = useSelector((state) => state.HookId);

  return (
    <div>
      <div // Botones de selección
      >
        {/* <ButtonHook theId={1} title={"uno"}></ButtonHook> */}
        <ButtonHook theId={1} title={"SimpleHook"}></ButtonHook>
        <ButtonHook theId={2} title={"Eventos"}></ButtonHook>
        <ButtonHook theId={3} title={"UseEffect"}></ButtonHook>
        <ButtonHook theId={4} title={"Redux"}></ButtonHook>
      </div>

      <div // El "lienzo"
      >
        {/* {currentHook === 1 ? <SimpleHook /> : null} */}
        {currentHook === 1 ? <SimpleHook title={"Texto para simple Hook"} /> : null}
        {currentHook === 2 ? <Eventos />: null}
        {currentHook === 3 ? <UseEffect />: null}
        {currentHook === 4 ? <ConRedux />: null}
        



      </div>
    </div>
  );
};

export default MainHook;
