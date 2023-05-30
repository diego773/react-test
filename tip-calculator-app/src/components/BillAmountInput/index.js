import React, { useState } from "react";
import "./style.css";

function BillAmountInput() {
  const [inputState, setInputState] = useState({
    number: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  });

  function handleInputChange(event) {
    event.preventDefault();
    if (!inputState.number) {
      alert("Please enter a number");
    } else {
      return inputState;
    }
  }

  return (
    <form className="input-container">
      <input
        className="input-box"
        onChange={handleInputChange}
        type="text"
        name="amount"
        placeholder="$"
      />
    </form>
  );
}

export default BillAmountInput;
