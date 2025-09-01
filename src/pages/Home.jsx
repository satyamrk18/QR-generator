import { useState, useEffect, useRef } from "react";
import "./Home.css"
import { QRCodeCanvas } from "qrcode.react";
import Download from "../downloadBtn.jsx"
import Navbar from "../components/navbar.jsx"
import Note from "../components/note.jsx";
const Home = () => {
  const [inputText, setInputText] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [size, setSize] = useState(50);
  const [color] = useState("#000000");
const [note, setNote] = useState("");

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
        <h2>Text/Link to qr code</h2>
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
          <Note noteValue={note}/>
        </div>
        <Download targetRef={captureRef} />
      </div>
   </div>
   <div className="edits">
    <lavel>add note</lavel>
<input type="text" placeholder="enter a note" onChange={(e)=>{setNote(e.target.value)}}/>
   </div>
    </div>
  );
};
export default Home;
