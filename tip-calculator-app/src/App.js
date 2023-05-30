import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import BillAmountContainer from "./components/BillAmountContainer";
import SelectTipPercentageContainer from "./components/SelectTipPercentageContainer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <BillAmountContainer />
        <SelectTipPercentageContainer />
      </Router>
    </>
  );
}

export default App;
