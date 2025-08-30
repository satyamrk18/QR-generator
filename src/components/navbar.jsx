import { Link, useLoaderData, useLocation } from "react-router";
import "./navbar.css"
const Navbar = () => {
  const location  = useLocation();
  return (
    <div className="navbar">
      <Link to="/" className={location.pathname == "/"? "activepage" : "item"}>Home</Link>
      <Link to="/payment" className={location.pathname=="/payment" ? "activepage" : "item"}>Payment</Link>
      <Link to= "/map" className={location.pathname=="/map"?"activepage":"item"}>Map</Link>
    </div>
  );
};
export default Navbar;
