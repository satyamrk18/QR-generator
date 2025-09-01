import { useState, useEffect, useRef } from "react";
import "./images.css";
import { QRCodeCanvas } from "qrcode.react";
import Download from "../downloadBtn.jsx";
import Navbar from "../components/navbar.jsx";
const image = () => {
  const [qrValue, setQrValue] = useState("");
  const [size, setSize] = useState(50);
  const [color] = useState("#000000");
useEffect(()=>
{
setQrValue("https://github.com/satyamrk18");
},[])

  const apiKey = import.meta.env.VITE_IMGBB_API_KEY; // Put your ImgBB API key here
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
      <div>
        <Navbar />
      </div>
      <div className="main-container">
        <div className="inputs">
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
          <p>size</p>
          <input
            type="range"
            onChange={(e) => {
              setSize(e.target.value);
            }}
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
          </div>
          <Download targetRef={captureRef} />
        </div>
      </div>
    </div>
  );
};
export default image;
