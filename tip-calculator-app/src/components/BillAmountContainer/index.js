import "./style.css";
import BillAmountInput from "../BillAmountInput";

function BillAmountContainer() {
  return (
    <section className="bill-container">
      <p className="bill-header">Bill</p>
      <BillAmountInput />
    </section>
  );
}

export default BillAmountContainer;
