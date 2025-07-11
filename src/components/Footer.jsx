import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white py-3 mt-auto">
      <div className="container text-center">
        <small>&copy; {new Date().getFullYear()} Receteca by SimioAstuto - <strong>Norberto Rodríguez</strong></small>
      </div>
    </footer>
  );
};

export default Footer;
