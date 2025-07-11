import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("¡Gracias por tu mensaje!");
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  const handleReset = () => {
    setFormData({ nombre: "", email: "", mensaje: "" });
  };

  return (
    <section className="contact-section py-5">
      <div className="container">
        <h2 className="text-center mb-4">Contacto</h2>
        <form onSubmit={handleSubmit} onReset={handleReset} className="contact-form mx-auto">
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">Mensaje</label>
            <textarea
              className="form-control"
              id="mensaje"
              name="mensaje"
              rows="4"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">Enviar</button>
            <button type="reset" className="btn btn-secondary">Resetear</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
