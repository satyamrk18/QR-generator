import "./App.css";
import { useState, useEffect } from "react";
import { QRCodeCanvas } from "qrcode.react";
function App() {
  const [text, setText] = useState("");
  return (
    <div>
      <h1>Hello world</h1>
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
      <QRCodeCanvas
        value={text}
        size={200}
        bgColor="#f0f8ff"
        fgColor="#1e3a8a"
      ></QRCodeCanvas>
    </div>
  );
}

export default App;
