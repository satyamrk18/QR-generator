import Navbar from "../components/navbar.jsx";
import { useState, useEffect, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";
import Download from "../downloadBtn.jsx";
import "./payment.css";
const payment = () => {
  const [payeeName, setPayeeName] = useState("");
  const [upiID, setUpiID] = useState("");
  const [amount, setAmount] = useState(0);
  const [note, setNote] = useState("");
  const [currency, setCurrency] = useState("INR");
  const [qrValue, setQrValue] = useState("");
  const [size, setSize] = useState(50);
const[color, setColor] = useState("#000000");
  //initial qr value
  useEffect(() => {
    setQrValue("https://github.com/satyamrk18");
  }, []);

  const handleGenerateQR = () => {
    if (inputText.trim() !== "") {
      setQrValue(inputText);
    }
    if (inputText.trim() === "") {
      alert("please enter the text, link or anything !");
    }
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
          <label>payee name</label>
          <input type="text" placeholder="payee name" />
          <label>upi id</label>
          <input type="text" placeholder="upi id" />
          <label>amount</label>
          <input type="number" placeholder="amount" />
          <label>note</label>
          <input type="text" placeholder="note" />
          <label>size</label>
          <input
            type="range"
            onChange={(e) => setSize(e.target.value)}
            min="10"
            max="100"
          />
          <button type="button" onClick={handleGenerateQR}></button>
        </div>
        <div className="qr-canvas" ref={captureRef}>
          <div className="qr-code">
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
