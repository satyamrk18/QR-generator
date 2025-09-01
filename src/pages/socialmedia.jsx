import "./socialmedia.css";
import { useState, useEffect, useRef } from "react";
import data from "../data/socialmediadata.js"
const socialmedia = () => {
 
  return (
    <div className="tag-container">
      {data.map((item, index) => {
        return (
          <div className="tag" key={item.id}>
            <img src={item.logo} alt="logo" />
            <h4>{item.name}</h4>
          </div>
        );
      })}
    </div>
  );
};
export default socialmedia;
