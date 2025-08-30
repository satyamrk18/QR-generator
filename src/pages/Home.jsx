import { useState, useEffect, useRef } from "react";
import "./Home.css"
import { QRCodeCanvas } from "qrcode.react";
import Download from "../downloadBtn.jsx"
const Home = () => {
  const [inputText, setInputText] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [size, setSize] = useState(50);
  const [color] = useState("#000000");

  const apiKey = import.meta.env.VITE_IMGBB_API_KEY; // Put your ImgBB API key here
  useEffect(() => {
    setQrValue("hii");
  }, []);
  const handleGenerateQR = () => {
    if (inputText.trim() !== "") {
      setQrValue(inputText);
    }
    if (inputText.trim() === "") {
      alert("please enter the text, link or anything !");
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) {
      //if uplads is empty, it will not run the next code to generate the qr code
      return;
    }
    if (file.size >= 5 * 1024 * 1024) {
      //if the file size is
      alert("the file size not bigger than 5MB");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setQrValue(data.data.url); // use hosted image URL
      }
    } catch (error) {
      console.error("Image upload failed:", error);
    }
  };
  //download button referace
  const captureRef = useRef(null);
  return (
    <div className="container">
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

        <p>OR upload an image</p>
        {/* file input */}
        <input type="file" onChange={handleFileUpload} />
        {/* camera input */}
        <p>click picture to generate a qr</p>
        <input
          type="file"
          accept="image/*"
          capture="camera"
          onChange={handleFileUpload}
        />
        <p>size of the qr code {size}</p>
        <input
          type="range"
          onChange={(e) => setSize(e.target.value)}
          min="10"
          max="100"
        />
      </div>

      {/* qr code */}
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
  );
};
export default Home;
