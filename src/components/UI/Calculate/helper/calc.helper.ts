// import React, { useState } from 'react';

import { useState } from "react";

// const useCalc = () => {
//   const pi = 3.1415926535;
//   const [corner, setCorner] = useState<number>(0);
//   const [midline, setMidline] = useState<number>(0);

//   const handleCalculate = ({ firstParams, secondParams }: any) => {
//     let radius = 0, chord = 0, deflection = 0;

//     // Определение значений на основе входных параметров
//     if (firstParams.param1.toLowerCase() === "радиус") {
//       radius = parseFloat(firstParams.value1);
//     } else if (firstParams.param1.toLowerCase() === "прогиб") {
//       deflection = parseFloat(firstParams.value1);
//     }

//     if (secondParams.param2?.toLowerCase() === "прогиб") {
//       deflection = parseFloat(secondParams.value2 || '0');
//     } else if (secondParams.param2?.toLowerCase() === "хорда") {
//       chord = parseFloat(secondParams.value2 || '0');
//     }

//     // Вычисления
//     if (chord === 0 && radius !== 0 && deflection !== 0) {
//       chord = Math.sqrt((8 * radius * deflection) - (4 * deflection * deflection));
//     }

//     if (radius === 0 && chord !== 0 && deflection !== 0) {
//       radius = (deflection / 2) + (chord * chord) / (8 * deflection);
//     }

//     const newCorner = radius !== 0 ? ((2 * Math.asin(chord / (radius * 2))) * 180) / pi : 0;
//     setCorner(newCorner);

//     const thickness = secondParams.mm || 0;
//     const type = secondParams.type || "Внутренний";

//     let newMidline = 0;
//     if (type.toLowerCase() === "внутренний") {
//       newMidline = (radius + (thickness / 2)) * 2 * pi * newCorner / 360;
//     } else {
//       newMidline = (radius - (thickness / 2)) * 2 * pi * newCorner / 360;
//     }

//     setMidline(newMidline / 2);
//   };

//   return { corner, midline, handleCalculate };
// }

// export { useCalc };

// interface Params {
//   param1: string;
//   value1: string;
//   param2?: string;
//   value2?: string;
//   mm?: number;
//   type?: string;
// }

const useCalc = () => {
  const pi = 3.1415926535;
  const [corner, setCorner] = useState<number>(0);
  const [midline, setMidline] = useState<number>(0);

  const handleCalculate = ({
    firstParams,
    secondParams,
  }: {
    firstParams: any;
    secondParams: any;
  }) => {
    let radius = 0,
      chord = 0,
      deflection = 0;
      
    if (firstParams.param1.toLowerCase() === "прогиб") {
      deflection = parseFloat(firstParams.value1);
    }
    if (secondParams.param2?.toLowerCase() === "хорда") {
      chord = parseFloat(secondParams.value2 || "0");
    }

    if (chord <= deflection) {
      console.error("Хорда должна быть больше прогиба.");
      return;
    }

    // Расчеты
    if (radius === 0 && chord > 0 && deflection > 0) {
      radius = (chord ** 2 + deflection ** 2) / (2 * deflection);
    }

    const newCorner =
      radius !== 0 ? (2 * Math.asin(chord / (2 * radius)) * 180) / pi : 0;
    setCorner(newCorner);

    const thickness = secondParams.mm || 0;
    const type = secondParams.type || "Внутренний";

    let newMidline;
    if (type.toLowerCase() === "внутренний") {
      newMidline = ((radius + thickness / 2) * newCorner * pi) / 180;
    } else {
      newMidline = ((radius - thickness / 2) * newCorner * pi) / 180;
    }

    setMidline(newMidline);
  };

  return { corner, midline, handleCalculate };
};

export { useCalc };
