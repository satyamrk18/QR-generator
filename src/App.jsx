import "./App.css";
import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
function App() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(100);
  return (
    <div className="container">
      <div className="text-input">
        <form>
          <label>input</label>
          {/* input */}
          <input
            type="text"
            name="qir input"
            placeholder="ie, text, url"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
          {/* size */}
          <input
            type="range"
            min="10"
            max="100"
            value={size}
            onChange={(e) => {
              setSize(e.target.value);
            }}
          /><p>{size}</p>
        </form>
      </div>
      {/* qr code canvas */}
      <div className="qr-canvas">
        <QRCodeCanvas
          value={text}
          size={size*5}
          bgColor="#ffffffff"
          fgColor="#1e3b8aa8"
          level="H"
        ></QRCodeCanvas>
      </div>
    </div>
  );
}

export default App;
