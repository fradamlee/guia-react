// imr
import React from "react";
import { useState } from "react";
import {MainClass} from "./Clases/mainClass";

import MainHook from "./Hooks/mainHook";
// import Lienzo from "./Components/Lienzo";

const Main = () => {
  // Hook de currentSelect
  const [selection, setSelect] = useState({
    currentSelect: 0,
  });

  // HookColores de botones
  const [btnColor, BtnColor] = useState({
    backgroundColorbtn1: "#E0E0E0",
    colorbtn1: "#404040",
    backgroundColorbtn2: "#E0E0E0",
    colorbtn2: "#404040",
  });

  return (
    <div>
      <div // Botones de selección
      >
        <button
          style={{
            height: 40,
            width: 100,
            backgroundColor: btnColor.backgroundColorbtn1,
            color: btnColor.colorbtn1,
            fontSize: 20,
            borderRadius: 8,
          }}
          onClick={() => {
            setSelect({
              currentSelect: 1,
            });
            BtnColor({
              backgroundColorbtn1: "#660000",
              colorbtn1: "#FFFFFF",
              backgroundColorbtn2: "#E0E0E0",
              colorbtn2: "#404040",
            });
          }}
        >
          Clases
        </button>
        <button
          style={{
            height: 40,
            width: 100,
            backgroundColor: btnColor.backgroundColorbtn2,
            color: btnColor.colorbtn2,
            fontSize: 20,
            borderRadius: 8,
          }}
          onClick={() => {
            setSelect({
              currentSelect: 2,
            });
            BtnColor({
              backgroundColorbtn1: "#E0E0E0",
              colorbtn1: "#404040",
              backgroundColorbtn2: "#660000",
              colorbtn2: "#FFFFFF",
            });
          }}
        >
          Hooks
        </button>
      </div>

      {selection.currentSelect === 1 ? <MainClass></MainClass> : null}
      {selection.currentSelect === 2 ? <MainHook></MainHook> : null}
    </div>
  );
};

export default Main;
