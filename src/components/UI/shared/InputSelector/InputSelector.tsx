import { FC, useState } from "react";
import m from "./InputSelector.module.scss";

type TValue = {
  id: number;
  value: string | number;
};

type TProps = {
  value: any;
  setValue: (value: any) => void;
};

const InputSelector: FC<any> = ({ value, type, label, setValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [item, setIsItem] = useState<any | null>(null);
  const [onError, setOnError] = useState<string | null>(null);

  return (
    <>
      <div className={m.selectorWrapp}>
        <div className={m.selectorWrapper}>
          <label className={m.label}>{label}</label>
          {type === "selector" && (
            <div
              className={m.wrapp}
              onClick={() => setIsOpen(!isOpen)}
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <div>
                {/* <span 
                      className={isOpen === true ? m.activeSelector : m.selector}
                    >
                      {item ? item?.value : el.value}
                    </span> */}
              </div>
              {isOpen && (
                <div className={m.selected}>
                  {/* {items.values.map((items: any) => (
                      <>
                        {(!item ? items.id !== 0 : item.value !== items.value) && (
                          <span
                            className={m.content}
                            onClick={() =>
                              setIsItem({ id: items.id, value: items.value })
                            }
                          >
                            {items.value}
                          </span>
                        )}
                      </>
                    ))} */}
                </div>
              )}
            </div>
          )}
          {type === "writer" && (
            <div className={m.inputContainer}>
              <div className={m.inputWrapper}>
                <input
                  className={m.input}
                  placeholder="0"
                  // onChange={(e) => handleChange(e.target.value)}
                />
                {onError && <label className={m.error}>{onError}</label>}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
  // const findFirstEl = value.find((item) => item.id === 0);
  // const [item, setIsItem] = useState<TValue | null>(null);
  // const [onError, setOnError] = useState<string | null>(null);

  // const handleChange = (e: string) => {
  //   if (e.length === 0) {
  //     setOnError(null);
  //   } else if (!/^\d+$/.test(e)) {
  //     setOnError("Только цифры");
  //   } else {
  //     setValue({
  //       firstProp: {
  //         params: item?.value,
  //         paramsInput: e
  //       },
  //       secondProp: {
  //         inputOne: {
  //           params: item?.value,
  //           paramsInput: e
  //         },
  //         inputTwo: {
  //           paramsA: item?.value,
  //           paramsB: item?.value
  //         }
  //       }
  //     })
  //     setOnError(null);
  //   }
  // };
  // return (
  //   <>
  //     {type === "multi" ? (
  //     ) : (
  //       <div className={m.selectorWrapper}>
  //         <label className={m.label}>{label}</label>
  //         <div
  //           className={m.wrapp}
  //           onClick={() => setIsOpen(!isOpen)}
  //           onMouseEnter={() => setIsOpen(true)}
  //           onMouseLeave={() => setIsOpen(false)}
  //         >
  //           <span className={isOpen === true ? m.activeSelector : m.selector}>
  //             {!item ? findFirstEl?.value : item.value}
  //           </span>
  //           {isOpen && (
  //             <div className={m.selected}>
  //               {value.map((items) => (
  //                 <>
  //                   {(!item ? findFirstEl?.value : item.value) !==
  //                     items.value && (
  //                     <span
  //                       className={m.content}
  //                       onClick={() =>
  //                         setIsItem({ id: items.id, value: items.value })
  //                       }
  //                     >
  //                       {items.value}
  //                     </span>
  //                   )}
  //                 </>
  //               ))}
  //             </div>
  //           )}
  //         </div>
  //       </div>
  //     )}
  //   </>
  // );
};

export default InputSelector;
