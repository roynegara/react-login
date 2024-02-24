import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        backgroundColor: "grey",
        color: "white",
        textDecorationLine: "none",
      }}>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <Link to="/login">Login</Link>
    </div>
  );
};

export default Navbar;
