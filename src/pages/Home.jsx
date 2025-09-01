import { useState, useEffect, useRef } from "react";
import "./Home.css"
import { QRCodeCanvas } from "qrcode.react";
import Download from "../downloadBtn.jsx"
import Navbar from "../components/navbar.jsx"
const Home = () => {
  const [inputText, setInputText] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [size, setSize] = useState(50);
  const [color] = useState("#000000");


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
    <div className="container">
     <div>
       <Navbar />
     </div>
   <div className="main-container">
       <div className="inputs">
        <h2>QR Code Generator</h2>
        <input
          type="text"
          placeholder="Enter text or link"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleGenerateQR();
            }
          }}
        />
        <button onClick={handleGenerateQR}>Generate QR</button>

        <p>size of the qr code {size}</p>
        <input
          type="range"
          onChange={(e) => setSize(e.target.value)}
          min="10"
          max="100"
        />
      </div>

      {/* qr code */}
      <div className="qr-canvas" >
        <div className="qr-code" ref={captureRef}>
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
export default Home;
