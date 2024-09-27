import { FaLessThan } from "react-icons/fa6";
import { FaGreaterThan } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
export default function Navbar() {
  let data = useSelector((state) => state.cartData);

  let mysty = ({ isActive }) => {
    return {
      color: isActive ? "red" : "",
      textDecoration: isActive ? "underline" : "",
    };
  };
  return (
    <div id="maindiv" className=" bg-success-subtle fixed-top ">
      <div style={{ margin: "0px" }} className="row">
        <div className="col-4">
          <h5 className="container">
            {" "}
            <FaLessThan />
            Redux Store
            <FaGreaterThan />{" "}
          </h5>
        </div>
        <div className="col-2 text-lefft ">
          <b>
            <NavLink id="new" style={mysty} to={"/"}>
              Home
            </NavLink>
          </b>
        </div>
        <div className="col-3  text-center ">
          <b>
            <NavLink id="new" style={mysty} to={"/cart"}>
              Cart
            </NavLink>
          </b>
        </div>
        <div style={{ paddingRight: "0px" }} className="col-3 text-center ">
          <b>Cart Item: {data.length}</b>
        </div>
      </div>
    </div>
  );
}
