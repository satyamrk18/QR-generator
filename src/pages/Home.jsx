import { useState, useEffect, useRef } from "react";
import "./Home.css";
import { QRCodeCanvas } from "qrcode.react";
import Download from "../downloadBtn.jsx";
import Navbar from "../components/navbar.jsx";
import Note from "../components/note.jsx";
const Home = () => {
  const [inputText, setInputText] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [size, setSize] = useState(50);
  const [color] = useState("#000000");
  //note edits
  const [note, setNote] = useState("scan me");
  const [noteSize, setNoteSize] = useState(20);

  useEffect(() => {
    setQrValue("https://github.com/satyamrk18");
  }, []);
  //id note is empty and user try to handle edits of note
  useEffect(() => {
    if (note.trim() === "") {
      alert("please enter a note first.");
      setNoteSize(20);
    }
  }, [noteSize]);

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
        <div className="qr-canvas">
          <div className="qr-code" ref={captureRef}>
            {qrValue && (
              <QRCodeCanvas
                value={qrValue}
                size={size * 5}
                fgColor={color}
                level="H"
              />
            )}
            <Note noteValue={note} fontSize={noteSize} />
          </div>
          <Download targetRef={captureRef} />
        </div>
      </div>
      <div className="edit-container">
        <div className="edit">
          <label>add note</label>
          <input
            type="text"
            placeholder="enter a note"
            value={note}
            onChange={(e) => {
              setNote(e.target.value);
            }}
          />
          <label>note size</label>
          <input
            type="range"
            min="5"
            max="100"
            onChange={(e) => {
              setNoteSize(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default Home;
