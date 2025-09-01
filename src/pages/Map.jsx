import Navbar from "../components/navbar";
import "./Map.css";
import { QRCodeCanvas } from "qrcode.react";
import { useState, useEffect, useRef } from "react";
import Download from "../downloadBtn.jsx"
const Map = () => {
  const [location, setLocation] = useState("");
  const [qrValue, setqrValue] = useState("");
  const [size, setSize] = useState(50);
  const [color, setColor] = useState("#000");

  useEffect(() => {
    setqrValue("https://github.com/satyamrk18");
  }, []);

  const handlegenrateqr = () => {
    setLocation(location);
    const URL = `https://www.google.com/maps/search/?api=1&query=${location}`;
    setqrValue(URL);
    setLocation("")
  };
  //download button referace
  const captureRef = useRef(null);
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>
      <div className="main-container">
        {" "}
        <div className="form">
          <h1>Map</h1>
          <label>enter location</label>
          <input
            type="text"
            placeholder="enter a location"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
            }}
          />
          <input
            type="range"
            onChange={(e) => {
              setSize(e.target.value);
            }}
          />
          <button type="button" onClick={handlegenrateqr}>
            generate qr
          </button>
        </div>
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
export default Map;
