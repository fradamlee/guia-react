//

import React from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newHookId } from "../redux/actions";


export const ButtonHook = (props) => {

  let bgcActive = "#660000";
  let bgcInactive = "#E0E0E0";
  let cActive = "#FFFFFF";
  let cInactive = "#404040";

  // Hook de colores en los botones

  // const [colors, setColors] = () => useState({
  //   bgcB: bgcInactive,
  //   cB: cInactive,
  // });

  let bgcB = bgcInactive;
  let cB = cInactive

  // Redux
  const currentHookId = useSelector((state) => state.HookId);

  const dispatch = useDispatch();

  if(props.theId == currentHookId) {
    bgcB = bgcActive;
    cB = cActive;
  } else {
    bgcB = bgcInactive;
    cB = cInactive;
  }
  
  return (
    <button
      style = {{
        height: 40,
            width: 150,
            backgroundColor: bgcB,
            color: cB,
            fontSize: 15,
            borderRadius: 8,
      }}
      onClick={() => {
        dispatch(newHookId(props.theId));
      }    
    }    
    >
      {props.title}
    </button>
  );
};
