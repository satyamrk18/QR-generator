import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

function App() {
  const [inputText, setInputText] = useState("");
  const [qrValue, setQrValue] = useState("");
  const [size] = useState(200);
  const [color] = useState("#000000");

const apiKey = import.meta.env.VITE_IMGBB_API_KEY; // Put your ImgBB API key here

  const handleGenerateQR = () => {
    if (inputText.trim() !== "") {
      setQrValue(inputText);
    }
    if(inputText.trim() === "")
    {
      alert("please enter the text, link or anything !")
    }
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

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

  return (
    <div className="container">
      <h2>QR Code Generator</h2>

      <div className="inputs">
        <input
          type="text"
          placeholder="Enter text or link"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={(e)=>
          {
            if(e.key === "Enter")
            {
              handleGenerateQR();
            }
          }
          }
        />
        <button onClick={handleGenerateQR} >Generate QR</button>
      </div>

      <p>OR upload an image</p>
      <input type="file" accept="image/*" onChange={handleFileUpload} />

      {qrValue && (
        <div className="qr-canvas">
          <QRCodeCanvas value={qrValue} size={size} fgColor={color} level="H" />
        </div>
      )}
    </div>
  );
}

export default App;
