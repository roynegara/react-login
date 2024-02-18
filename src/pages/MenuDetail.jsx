import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const MenuDetail = () => {
  const [menu, setMenu] = useState([]);

  const getMenuDetail = () => {
    axios
      .get(`https://api.mudoapi.tech/menu/${id}`)
      .then((res) => {
        console.log(res);
        setMenu(res?.data?.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getMenuDetail();
  }, []);

  console.log("data", menu);

  const { id } = useParams();
  console.log(id);

  return (
    <div>
      {" "}
      <Navbar />
      <div style={{ margin: "15px", textAlign: "center", border: "10px solid black", borderRadius: "10px" }}>
        <h1>Menu Detail</h1>
        <h1>Jenis Menu : {menu?.type}</h1>
        <h1>Nama Menu : {menu?.name}</h1>
        <h1>Deskripsi : {menu?.description}</h1>
        <img style={{ width: "300px", height: "300px", borderRadius: "10px" }} src={menu.imageUrl} alt={menu?.name} />
        <h1>Harga : {menu?.priceFormatted}</h1>
      </div>
    </div>
  );
};

export default MenuDetail;
