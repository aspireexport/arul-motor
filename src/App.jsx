
import { useState } from "react";
import Header from "./components/Header";
import CustomerForm from "./components/CustomerForm";
import ItemTable from "./components/ItemTable";
import Summary from "./components/Summary";
import Buttons from "./components/Buttons";
import InvoicePreview from "./components/InvoicePreview";
import "./App.css";

function App() {
  const [customer, setCustomer] = useState({
    name: "",
    vehicle: "",
    date: "",
    km: "",
  });

  const [items, setItems] = useState([
    {
      particular: "",
      qty: 1,
      rate: 0,
      amount: 0,
    },
  ]);

  const total = items.reduce(
    (sum, item) => sum + Number(item.amount || 0),
    0
  );

  return (
    <div className="container">
      <Header />

      <div className="mainLayout">
        <div className="leftPanel">
          <CustomerForm
            customer={customer}
            setCustomer={setCustomer}
          />

          <ItemTable
            items={items}
            setItems={setItems}
          />

          <Summary total={total} />

          <Buttons />
        </div>

        <div className="rightPanel">
          <InvoicePreview
            customer={customer}
            items={items}
            total={total}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
