import { useState } from "react";

const useFetchRecipe = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchMeals = async (query) => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`);
      const data = await res.json();
      setMeals(data.meals || []);
    } catch (err) {
      console.error("Error:", err);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  return { meals, loading, fetchMeals };
};

export default useFetchRecipe;
