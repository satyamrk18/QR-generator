import { Link, useLocation } from "react-router";
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="item">Home</Link>
      <Link to="/payment" className="item">Payment</Link>
      <Link to= "/map" className="item">Map</Link>
    </div>
  );
};
export default Navbar;
