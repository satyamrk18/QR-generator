import "./App.css";
import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
function App() {
  const [text, setText] = useState("");
  return (
    <div className="container">
 <div className="text-input">
        <form>
        <label>input</label>
        <input
          type="text"
          name="qir input"
          placeholder="ie, text, url"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </form>
    </div>
      {/* qr code canvas */}
     <div className="qr-canvas">
       <QRCodeCanvas
        value={text}
        size={220}
        bgColor="#ffffffff"
        fgColor="#1e3b8aa8"
        level="H" 
      ></QRCodeCanvas>
     </div>
    </div>
  );
}

export default App;
