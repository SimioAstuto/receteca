# 🍲 Receteca

**Receteca** es una aplicación web desarrollada con React y Vite, que permite navegar por secciones, ver recetas, una galería de imágenes, un formulario de contacto y un buscador de recetas utilizando la API pública de [TheMealDB](https://www.themealdb.com/api.php).

Diseñada con un enfoque profesional y moderno, incorpora estilos personalizados en CSS tradicional y el uso de Bootstrap para una mejor maquetación. Toda la estructura del proyecto fue desarrollada con una arquitectura de componentes reutilizables.

---

## 🚀 Tecnologías utilizadas

- React 18 + Vite
- Bootstrap 5
- CSS tradicional (uno por componente)
- React Router DOM v6
- API externa: [TheMealDB](https://www.themealdb.com/api.php)

---

## 📁 Estructura del Proyecto

Receteca/
│
├── public/
│ └── favicon.ico
│
├── src/
│ ├── assets/ # Imágenes y recursos estáticos
│ ├── components/ # Componentes reutilizables
│ │ ├── Navbar.jsx
│ │ ├── Home.jsx
│ │ ├── Card.jsx
│ │ ├── Gallery.jsx
│ │ ├── Contact.jsx
│ │ ├── Footer.jsx
│ │ └── RecipeSearch.jsx
│ ├── styles/ # Estilos CSS separados por componente
│ │ ├── Navbar.css
│ │ ├── Home.css
│ │ ├── Card.css
│ │ ├── Gallery.css
│ │ ├── Contact.css
│ │ ├── Footer.css
│ │ └── RecipeSearch.css
│ ├── hooks/ # Custom hooks
│ │ └── useFetchRecipe.js
│ ├── App.jsx # Enrutamiento principal
│ └── main.jsx # Punto de entrada
│
├── index.html
├── package.json
└── README.md


---

## 🌐 Funcionalidades

- Navegación dinámica entre secciones usando React Router
- Cards con imágenes y descripciones de recetas
- Galería visual de platos
- Formulario de contacto controlado con validación básica
- Buscador de recetas en tiempo real a través de la API pública de TheMealDB
- Footer con créditos personalizados

---

## 🧪 ¿Cómo correr el proyecto?

1. Cloná este repositorio:
   ```bash
   git clone https://github.com/tuusuario/receteca.git
   cd receteca

👨‍💻 Autor
Desarrollado por SimioAstuto 🐵

