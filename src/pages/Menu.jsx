import Navbar from "../components/Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menus, setMenus] = useState([]);

  const getMenusData = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => {
        console.log(res);
        setMenus(res.data.data.Data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMenusData();
  }, []);

  console.log("data", menus);

  return (
    <div style={{textAlign: "center" }}>
      <Navbar />
      <h1>Ini MENU</h1>
      {menus.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
            border: "10px solid black",
            borderRadius: "10px",
            padding: "20px",
            marginBottom: "20px",
            textAlign: "center",
              alignContent: "center",
            backgroundColor: "grey",
          }}>
          <h1>{item.type}</h1>
          <h3>{item.description}</h3>
          <h3>{item.name}</h3>
          <div style={{ alignContent: "center" }}>
            <img
              style={{ width: "300px", height: "300px", borderRadius: "10px" }}
              src={item.imageUrl}
              alt={item.name}
            />

            <Link to={`/menu/${item.id}`}>
              <button
                style={{
                  display: "block",
                  cursor: "pointer",
                  backgroundColor: "green",
                  color: "white",
                  textDecoration: "none",
                  marginLeft: "49%",
                }}>
                Detail
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
