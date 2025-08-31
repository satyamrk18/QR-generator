import Navbar from "../components/navbar";
import "./Map.css";
import { QRCodeCanvas } from "qrcode.react";
import { useState,useEffect,useRef } from "react";
const Map = () => {
    const [location, setLocation] = useState("");
    const [qrValue, setqrValue] = useState("");

    const handlegenrateqr = ()=>
    {
        setLocation(location)
        const URL = `https://www.google.com/maps/search/?api=1&query=${location}`;
        setqrValue(URL)
    }

  return (
    <div className="container">
      <div>
        <Navbar />
      </div>
      <div className="main-container">
        <h1>Map</h1>
        <input type="text" onChange={(e)=>{setLocation(e.target.value)}}/>
<button type="button" onClick={handlegenrateqr}>generate qr</button>
        <div className="qr-code">
            {qrValue && (
              <QRCodeCanvas
                value={qrValue}
                // size={size * 5}
                // fgColor={color}
                level="H"
              />
            )}
          </div>
      </div>
    </div>
  );
};
export default Map;
