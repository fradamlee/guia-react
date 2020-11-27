//

import React from "react";
// import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CurrentClassId } from "../redux/actions";


export const ButtonClass = (props) => {

  let bgcActive = "#660000";
  let bgcInactive = "#E0E0E0";
  let cActive = "#FFFFFF";
  let cInactive = "#404040";

  let bgcB = bgcInactive;
  let cB = cInactive

  // Redux
  const currentClassId = useSelector((state) => state.ClassId);

  const dispatch = useDispatch();

  if(props.classId === currentClassId) {
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
            fontSize: 16,
            borderRadius: 8,
      }}
      onClick={() => {
        dispatch(CurrentClassId(props.classId));

      }    
    }    
    >
      {props.title}
    </button>
  );
};
















// //
// // import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import {CurrentClassId} from '../redux/actions';
// // import { connect } from 'react-redux';

// const ButtonClass = (params) => {

//   const CurrentClassID = useSelector((state) => state.ClassId)

//   const dispatch = useDispatch();


//   return (<button
//   onClick = {() =>
//     {dispatch(CurrentClassId(params.classId))}
//   }
//   style = {{
//     height: 40,
//             width: 100,
//             backgroundColor: "gray",
//             color: "black",
//             fontSize: 20,
//             borderRadius: 8,
//   }}
//   >
//     {params.title}
//   </button>)
// }

  
// //   const mapDispatch = {
// //     contador,
// //   }
  
// export default ButtonClass;