import React from "react";
import "../styles/Home.css";
import portada from "../assets/images/portada.jpg";

const Home = () => {
  return (
    <section className="home-section py-5">
      <div className="container text-center">
        <img src={portada} alt="Receteca" className="mb-4 shadow" />
        <h1 className="mb-3">Bienvenido a Receteca</h1>
        <p>Explorá las mejores recetas caseras para cada momento. Inspirate, cociná y disfrutá con estilo.</p>
      </div>
    </section>
  );
};

export default Home;
