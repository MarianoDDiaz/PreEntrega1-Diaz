import React from "react";
import ZapatoPortada from "../assets/zapatoPortada.jpg";


const Home = () => {
  return (
    <div className="portada">
      <img src={ZapatoPortada} className="imagenPortada" />
    </div>
  );
};

export default Home;
