import classNames from "classnames";
import { useRef, useState, useEffect } from "react";
import { InputCheckboxComponent } from "./types";

export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
  const { current: inputId } = useRef(`RampInputCheckbox-${id}`);
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    if (!disabled) {
      const newChecked = !isChecked;
      setIsChecked(newChecked);
      onChange(newChecked);
    }
  };

  useEffect(() => {
    const savedState = localStorage.getItem(inputId);
    if (savedState !== null) {
      setIsChecked(savedState === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(inputId, isChecked.toString());
  }, [isChecked, inputId]);

  return (
    <div className="RampInputCheckbox--container" data-testid={inputId}>
      <label
        className={classNames("RampInputCheckbox--label", {
          "RampInputCheckbox--label-checked": isChecked,
          "RampInputCheckbox--label-disabled": disabled,
        })}
        onClick={handleClick}
      />
      <input
        id={inputId}
        type="checkbox"
        className="RampInputCheckbox--input"
        checked={isChecked}
        disabled={disabled}
        onChange={() => {}}
      />
    </div>
  );
};


// import classNames from "classnames"
// import { useRef, useState } from "react"
// import { InputCheckboxComponent } from "./types"

// export const InputCheckbox: InputCheckboxComponent = ({ id, checked = false, disabled, onChange }) => {
//   const { current: inputId } = useRef(`RampInputCheckbox-${id}`);
//   const [isChecked, setIsChecked] = useState(checked);
  
//   const handleClick = () => {
//     if (!disabled) {
//       const newChecked = !isChecked;
//       setIsChecked(newChecked);
//       onChange(newChecked);
//     }
//   };  
  
//   return (
//     <div className="RampInputCheckbox--container" data-testid={inputId}>
//       <label
//         className={classNames("RampInputCheckbox--label", {
//           "RampInputCheckbox--label-checked": isChecked,
//           "RampInputCheckbox--label-disabled": disabled,
//         })}
//         onClick={handleClick}
//       />
//       <input
//         id={inputId}
//         type="checkbox"
//         className="RampInputCheckbox--input"
//         checked={isChecked}
//         disabled={disabled}
//         onChange={() => {}}
//       />
//     </div>
//   );
// };
