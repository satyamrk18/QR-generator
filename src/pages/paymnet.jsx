import Navbar from "../components/navbar.jsx";
import { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Download from "../downloadBtn.jsx";
import "./payment.css";
const payment = () => {
  const [paymentURL, setPaymnetURL] = useState("");
  const [payeeName, setPayeeName] = useState("");
  const [upiID, setUpiID] = useState("");
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [qrValue, setQrValue] = useState("");
  const [size, setSize] = useState(50);
  const [color, setColor] = useState("#000");
  //initial qr value
  useEffect(() => {
    setQrValue("https://github.com/satyamrk18");
  }, []);
  useEffect(() => {
    setPaymnetURL(`upi://pay?pa=${upiID}&pn=${payeeName}&am=${amount}&tn=${note}&cu=${currency}
`);
  }, [payeeName, upiID, amount, note]);

  const handleGenerateQR = () => {
    setQrValue(paymentURL);
  };
  //download button referace
  const captureRef = useRef(null);
  return (
    <div className="payments">
      <div>
        <Navbar />
      </div>
      <div className="main-container">
        <div className="inputs">
          <h1>payment qr</h1>
          <label>payee name</label>
          <input
            type="text"
            placeholder="payee name"
            onChange={(e) => {
              setPayeeName(e.target.value);
            }}
          />
          <label>upi id</label>
          <input
            type="text"
            placeholder="upi id"
            onChange={(e) => {
              setUpiID(e.target.value);
            }}
          />
          <label>amount</label>
          <input
            type="number"
            placeholder="amount"
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
          <label>note</label>
          <input
            type="text"
            placeholder="note"
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
          <label>size</label>
          <input
            type="range"
            onChange={(e) => setSize(e.target.value)}
            min="10"
            max="100"
          />
          <button type="button" onClick={handleGenerateQR}>
            Generate QR
          </button>
        </div>
        <div className="qr-canvas">
          <div className="qr-code"  ref={captureRef}>
            {qrValue && (
              <QRCodeCanvas
                value={qrValue}
                size={size * 5}
                fgColor={color}
                level="H"
              />
            )}
          </div>
          <Download targetRef={captureRef} />
        </div>
      </div>
    </div>
  );
};
export default payment;
