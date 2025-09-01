import { BrowserRouter, Routes,Route } from "react-router";
import Home from "./pages/Home.jsx"
import Payment from "./pages/paymnet.jsx"
import Map from "./pages/Map.jsx"
import Image from "./pages/images.jsx"
import SocialMedia from "./pages/socialmedia.jsx"
import "./App.css";

function App() {
  
  return (
   <div>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
      <Route path="/map" element={<Map />}></Route>
      <Route path="/image" element={<Image />}></Route>
      <Route  path="/socialmedia" element={<SocialMedia />}></Route>
      <Route path="*" element={<h1>error 404 page not fount</h1>}></Route>
    </Routes>
    </BrowserRouter>
   </div>
  );
}

export default App;
