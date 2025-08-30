import { Link, useLocation } from "react-router";
import "./navbar.css"
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/payment">Payment</Link>
    </div>
  );
};
export default Navbar;
