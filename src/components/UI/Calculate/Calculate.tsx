import { useEffect, useState } from "react";
import Section from "../shared/Section/Section";
import Template from "../shared/Template/Template";
import m from "./Calculate.module.scss";
import { useCalc } from "./helper/calc.helper";
import { motion } from "framer-motion";

const Calculate = () => {
  const { corner, midline, handleCalculate } = useCalc();
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [onError1, setOnError1] = useState<string | null>(null);
  const [onError2, setOnError2] = useState<string | null>(null);
  const [input1, setInput1] = useState({ id: 0, value: "" });
  const [input2, setInput2] = useState({ id: 0, value: "" });
  const [selector1, setSelector1] = useState("Радиус");
  const [selector2, setSelector2] = useState("Хорда");
  const [selector3, setSelector3] = useState("Наружный");
  const [selector4, setSelector4] = useState(2);

  const formattedCorner = parseFloat(corner.toFixed(2));
  const formattedMidline = parseFloat(midline.toFixed(2));

  useEffect(() => {
    if (input1.id === 0) {
      if (input1.value.length === 0) {
        setOnError1(null);
      } else if (!/^\d+$/.test(input1.value)) {
        setOnError1("Только цифры");
      } else {
        setOnError1(null);
      }
    }
    if (input2.id === 1) {
      if (input2.value.length === 0) {
        setOnError2(null);
      } else if (!/^\d+$/.test(input2.value)) {
        setOnError2("Только цифры");
      } else {
        setOnError2(null);
      }
    }

    handleCalculate({
      firstParams: {
        param1: selector1,
        value1: input1.id === 0 && input1.value,
      },
      secondParams: {
        param2: selector2,
        value2: input2.id === 1 && input2.value,
        param3: selector3,
        param4: selector4,
      },
    });
  }, [selector1, selector2, selector3, selector4, input1, input2]);

  return (
    <>
      <Section title="Калькулятор" />
      <Template>
        <div className={m.content}>
          <div className={m.calculator}>
            <h1 className={m.calcTitle}>Средняя линия</h1>
            <div className={m.wrapper}>
              <div className={m.props}>
                <h4 className={m.selectorTitle}>Первый параметр</h4>
                <div className={m.inputWrapper}>
                  <div
                    className={m.wrapp}
                    onClick={() => setIsOpen1(!isOpen1)}
                    // onMouseEnter={() => setIsOpen1(true)}
                    // onMouseLeave={() => setIsOpen1(false)}
                  >
                    <label className={m.label}>Параметр</label>
                    <span
                      className={
                        isOpen1 === true ? m.activeSelector : m.selector
                      }
                    >
                      {selector1}
                    </span>
                    {isOpen1 && (
                      <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={{
                          hidden: { opacity: 0, y: -10 },
                          visible: { opacity: 1, y: 0 },
                        }}
                        transition={{ delay: 0.25 }}
                        className={m.selected}
                      >
                        <>
                          {selector1 !== "Радиус" && (
                            <span
                              className={m.item}
                              onClick={() => setSelector1("Радиус")}
                            >
                              Радиус
                            </span>
                          )}
                          {selector1 !== "Прогиб" && (
                            <span
                              className={m.item}
                              onClick={() => setSelector1("Прогиб")}
                            >
                              Прогиб
                            </span>
                          )}
                          {selector1 !== "Хорда" && (
                            <span
                              className={m.item}
                              onClick={() => setSelector1("Хорда")}
                            >
                              Хорда
                            </span>
                          )}
                        </>
                      </motion.div>
                    )}
                  </div>
                  <div className={m.inputContainer}>
                    <label className={m.label}>Введите значение</label>
                    <div className={m.inputEl}>
                      <input
                        className={m.input}
                        placeholder="0"
                        onChange={(e) =>
                          setInput1({ id: 0, value: e.target.value })
                        }
                      />
                      {onError1 && (
                        <label className={m.error}>{onError1}</label>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className={m.props}>
                <h4 className={m.selectorTitle}>Второй параметр</h4>
                <div
                  className={m.multiInput}
                  style={{
                    gap: "20px",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div className={m.inputWrapper}>
                    <div
                      className={m.wrapp}
                      onClick={() => setIsOpen2(!isOpen2)}
                      // onMouseEnter={() => setIsOpen2(true)}
                      // onMouseLeave={() => setIsOpen2(false)}
                    >
                      <label className={m.label}>Параметр</label>
                      <span
                        className={
                          isOpen2 === true ? m.activeSelector : m.selector
                        }
                      >
                        {selector2}
                      </span>
                      {isOpen2 && (
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={{
                            hidden: { opacity: 0, y: -10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          transition={{ delay: 0.25 }}
                          className={m.selected}
                        >
                          <>
                            {selector2 !== "Радиус" && (
                              <span
                                className={m.item}
                                onClick={() => setSelector2("Радиус")}
                              >
                                Радиус
                              </span>
                            )}
                            {selector2 !== "Прогиб" && (
                              <span
                                className={m.item}
                                onClick={() => setSelector2("Прогиб")}
                              >
                                Прогиб
                              </span>
                            )}
                            {selector2 !== "Хорда" && (
                              <span
                                className={m.item}
                                onClick={() => setSelector2("Хорда")}
                              >
                                Хорда
                              </span>
                            )}
                          </>
                        </motion.div>
                      )}
                    </div>
                    <div className={m.inputContainer}>
                      <label className={m.label}>Введите значение</label>
                      <div className={m.inputEl}>
                        <input
                          className={m.input}
                          placeholder="0"
                          onChange={(e) =>
                            setInput2({ id: 1, value: e.target.value })
                          }
                        />
                        {onError2 && (
                          <label className={m.error}>{onError2}</label>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={m.inputWrapper}>
                    <div
                      className={m.wrapp}
                      onClick={() => setIsOpen3(!isOpen3)}
                      // onMouseEnter={() => setIsOpen3(true)}
                      // onMouseLeave={() => setIsOpen3(false)}
                    >
                      <label className={m.label}>Тип</label>
                      <span
                        className={
                          isOpen3 === true ? m.activeSelector : m.selector
                        }
                      >
                        {selector3}
                      </span>
                      {isOpen3 && (
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={{
                            hidden: { opacity: 0, y: -10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          transition={{ delay: 0.25 }}
                          className={m.selected}
                        >
                          <>
                            {selector3 !== "Наружный" && (
                              <span
                                className={m.item}
                                onClick={() => setSelector3("Наружный")}
                              >
                                Наружный
                              </span>
                            )}
                            {selector3 !== "Внутренний" && (
                              <span
                                className={m.item}
                                onClick={() => setSelector3("Внутренний")}
                              >
                                Внутренний
                              </span>
                            )}
                          </>
                        </motion.div>
                      )}
                    </div>
                    <div
                      className={m.wrapp}
                      onClick={() => setIsOpen4(!isOpen4)}
                      // onMouseEnter={() => setIsOpen4(true)}
                      // onMouseLeave={() => setIsOpen4(false)}
                    >
                      <label className={m.label}>Толщина (мм)</label>
                      <span
                        className={
                          isOpen4 === true ? m.activeSelector : m.selector
                        }
                      >
                        {selector4}
                      </span>
                      {isOpen4 && (
                        <motion.div
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          variants={{
                            hidden: { opacity: 0, y: -10 },
                            visible: { opacity: 1, y: 0 },
                          }}
                          transition={{ delay: 0.25 }}
                          className={m.selected}
                        >
                          <>
                            {selector4 !== 2 && (
                              <span
                                className={m.item}
                                onClick={() => setSelector4(2)}
                              >
                                2
                              </span>
                            )}
                            {selector4 !== 3 && (
                              <span
                                className={m.item}
                                onClick={() => setSelector4(3)}
                              >
                                3
                              </span>
                            )}
                            {selector4 !== 4 && (
                              <span
                                className={m.item}
                                onClick={() => setSelector4(4)}
                              >
                                4
                              </span>
                            )}
                            {selector4 !== 5 && (
                              <span
                                className={m.item}
                                onClick={() => setSelector4(5)}
                              >
                                5
                              </span>
                            )}
                            {selector4 !== 6 && (
                              <span
                                className={m.item}
                                onClick={() => setSelector4(6)}
                              >
                                6
                              </span>
                            )}
                            {selector4 !== 8 && (
                              <span
                                className={m.item}
                                onClick={() => setSelector4(8)}
                              >
                                8
                              </span>
                            )}
                            {selector4 !== 10 && (
                              <span
                                className={m.item}
                                onClick={() => setSelector4(10)}
                              >
                                10
                              </span>
                            )}
                            {selector4 !== 12 && (
                              <span
                                className={m.item}
                                onClick={() => setSelector4(12)}
                              >
                                12
                              </span>
                            )}
                            {selector4 !== 15 && (
                              <span
                                className={m.item}
                                onClick={() => setSelector4(15)}
                              >
                                15
                              </span>
                            )}
                            {selector4 !== 19 && (
                              <span
                                className={m.item}
                                onClick={() => setSelector4(19)}
                              >
                                19
                              </span>
                            )}
                          </>
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={m.result}>
              <div className={m.resultElement}>
                <h4 className={m.resultTitle}>Угол:</h4>
                <span className={m.resultValue}>{formattedCorner}</span>
              </div>
              <div className={m.resultElement}>
                <h4 className={m.resultTitle}>Средняя линия:</h4>
                <span className={m.resultValue}>{formattedMidline}</span>
              </div>
            </div>
          </div>
        </div>
      </Template>
    </>
  );
};

export default Calculate;