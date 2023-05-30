import { useState } from "react";

function SelectTipPercentage() {
  const [percentage, setPercentage] = useState(0);

  // Calculate percentage value based on percentage value between total amount
  const calculatePercentage = (percentage) => {
    percentage = percentage / 100;
    console.log(`Percentage ${percentage}`);
    return percentage;
  };

  const amountMultiplyByPercentage = (amount, percentage) => {
    percentage = calculatePercentage(percentage);
    const tipAmount = amount * percentage;
    const tip = tipAmount.toFixed(2);

    return tip;
  };

  const getTipAmountPerPerson = (amount, percentage, person) => {
    const tip = amountMultiplyByPercentage(amount, percentage);
    console.log(`Amount divided by percentage is $${tip}`);

    const tipAmountPerPerson = tip / person;
    return tipAmountPerPerson.toPrecision(4);
  };
  console.log(`get tip per person ${getTipAmountPerPerson(142.55, 15, 5)}`);

  // const handleClick = () => {
  //   setPercentage(percentage);
  //   console.log(`You clicked ${percentage}`);
  // };

  return (
    <>
      <button
        onClick={() => {
          setPercentage(percentage);
        }}
      >
        5%
      </button>
      <button>10%</button>
      <button>15%</button>
      <button>25%</button>
      <button>50%</button>
      <button>Custom</button>
    </>
  );
}

export default SelectTipPercentage;
