import { useState } from "react";

// Основа
const useCalc = () => {
  const pi = 3.1415926535;
  const [corner, setCorner] = useState(0);
  const [midline, setMidline] = useState(0);

  const handleCalculate = ({ firstParams, secondParams }: any) => {
    let radius = 0, chord = 0, deflection = 0, thickness = 0, type = "Внутренний";

    if (firstParams.param1.toLowerCase() === "радиус") {
      radius = parseFloat(firstParams.value1);
    } else if (firstParams.param1.toLowerCase() === "хорда") {
      chord = parseFloat(firstParams.value1);
    }

    if (secondParams.param2?.toLowerCase() === "хорда") {
      chord = parseFloat(secondParams.value2);
    } else if (secondParams.param2?.toLowerCase() === "радиус") {
      radius = parseFloat(secondParams.value2);
    }

    const newCorner = radius > 0 ? (2 * Math.asin(chord / (2 * radius)) * 180) / pi : 0;
    setCorner(newCorner);

    if (secondParams.param3) {
      type = secondParams.param3;
    }
    if (secondParams.param4) {
      thickness = parseFloat(secondParams.param4);
    }

    let newMidline = 0;
    if (type.toLowerCase() === "внутренний") {
      newMidline = (radius + (thickness / 2)) * 2 * pi * newCorner / 360;
    } else if (type.toLowerCase() === "наружный") {
      newMidline = (radius - (thickness / 2)) * 2 * pi * newCorner / 360;
    }

    setMidline(newMidline);
  };

  return { corner, midline, handleCalculate };
};

export { useCalc };