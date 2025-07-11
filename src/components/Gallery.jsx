import React from "react";
import Card from "./Card";
import "../styles/Gallery.css";
import img1 from "../assets/images/ensalada.jpg";
import img2 from "../assets/images/pasta.jpg";
import img3 from "../assets/images/postre.jpg";

const Gallery = () => {
  const recipes = [
    {
      title: "Ensalada fresca",
      text: "Ideal para días calurosos, con vegetales de estación.",
      image: img1,
    },
    {
      title: "Pizza casera",
      text: "Una receta italiana tradicional con salsa cremosa.",
      image: img2,
    },
    {
      title: "Postre tentador",
      text: "Delicioso y suave, perfecto para cerrar la comida.",
      image: img3,
    },
  ];

  return (
    <section className="gallery-section py-5">
      <div className="container">
        <h2 className="text-center mb-5">Galería de Recetas</h2>
        <div className="row g-4">
          {recipes.map((recipe, index) => (
            <div className="col-md-4" key={index}>
              <Card title={recipe.title} text={recipe.text} image={recipe.image} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
