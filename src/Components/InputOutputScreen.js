import CreateButton from "./CreateButton";
import React, { useState } from "react";
import './InputOutputScreen.css'

const InputOutputScreen = (props) => {
  const [IntialValue, setValue] = useState("");
  const operator = ["*", "-", "+", "/", "."];
  const enteredValueHandler = (enteredValue) => {
    changeHandler(enteredValue);
  };

  const changeHandler = (value) => {
    if (
      (operator.includes(value) && IntialValue === "") ||
      (operator.includes(value) && operator.includes(IntialValue.slice(-1)))
    ) {
      return;
    }
    if (value === "=") {
      calculate(IntialValue);
      return;
    }
    if (value === "AC") {
      deleteValue(IntialValue);
      return;
    }
    if (value === "Del") {
      deleteLast(IntialValue);
      return;
    }
    if (IntialValue === "Infinity") {
      setValue(value);
    } else {
      setValue(IntialValue + value);
    }
  };

  const calculate = (cal) => {
    setValue(eval(cal).toString());
  };
  const deleteValue = (cal) => {
    setValue("");
  };
  const deleteLast = (cal) => {
    setValue(cal.slice(0, -1));
  };

  return (
    <div>
      <div className="input-output-container">
        <div className="input-line">
          {IntialValue || "Enter Number"}
        </div>
      </div>
      <CreateButton
        buttonArray={props.buttonArray}
        getEnteredValue={enteredValueHandler}
      />
    </div>
  );
};
export default InputOutputScreen;
