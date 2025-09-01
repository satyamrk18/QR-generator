import "./socialmedia.css";
import { useState, useEffect, useRef } from "react";
import instalogo from "../assets/images/instalogo.png";
const socialmedia = () => {
  const data = [
    {
      name: "instagram",
      logo: instalogo,
    },
  ];
  return (
    <div className="tag-container">
      {data.map((item) => {
        return (
          <div className="tag">
            <img src={item.logo} alt="logo" />
            <h4>{item.name}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default socialmedia;
