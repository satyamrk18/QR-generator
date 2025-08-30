import Navbar from "../components/navbar.jsx";
import { useState, useEffect, use } from "react";
import "./payment.css";
const payment = () => {
  const [payeeName, setPayeeName] = useState("");
  const [upiID, setUpiID] = useState("");
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");
  const [currency, setCurrency] = useState("INR");
  return (
    <div className="payments">
      <div>
        <Navbar />
      </div>
      <div className="main-container">
        <div className="inputs">
            <label>payee name</label>
          <input type="text" placeholder="payee name"/>
          <label>upi id</label>
          <input type="text" placeholder="upi id"/>
          <label>amount</label>
          <input type="number" placeholder="amount"/>
          <label>note</label>
          <input type="text" placeholder="note"/>
        </div>
        <div className="qr-canvas"></div>
      </div>
    </div>
  );
};
export default payment;
