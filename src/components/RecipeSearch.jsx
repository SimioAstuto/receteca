import React, { useState } from "react";
import "../styles/RecipeSearch.css";

const RecipeSearch = () => {
  const [query, setQuery] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMeals = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      setMeals(data.meals || []);
    } catch (error) {
      console.error("Error fetching data:", error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchMeals();
  };

  return (
    <div className="recipe-search container py-5">
      <h2 className="text-center mb-4">Buscar Recetas</h2>
      <form onSubmit={handleSubmit} className="d-flex justify-content-center mb-4">
        <input
          type="text"
          className="form-control w-50 me-2"
          placeholder="Ej: chicken, pasta, etc."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-success">Buscar</button>
      </form>

      {loading && <p className="text-center">Cargando recetas...</p>}

      <div className="row">
        {meals.map((meal) => (
          <div className="col-md-4 mb-4" key={meal.idMeal}>
            <div className="card h-100">
              <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
              <div className="card-body">
                <h5 className="card-title">{meal.strMeal}</h5>
                <p className="card-text">{meal.strCategory} - {meal.strArea}</p>
                <a href={meal.strSource || meal.strYoutube} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary btn-sm">Ver receta</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeSearch;
