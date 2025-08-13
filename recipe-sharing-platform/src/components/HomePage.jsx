import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(data);
  }, []);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Page Title */}
      <h1 className="text-3xl font-bold text-center mb-4">
        Recipe Sharing Platform
      </h1>

      {/* Add Recipe Button */}
      <div className="text-center mb-8">
        <Link
          to="/add-recipe"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          Add New Recipe
        </Link>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <Link
            key={recipe.id}
            to={`/recipe/${recipe.id}`}
            className="bg-white rounded-lg shadow-md overflow-hidden 
                       transform hover:scale-105 hover:shadow-lg transition-all duration-300 block"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{recipe.title}</h2>
              <p className="text-gray-600 mt-2 text-sm">{recipe.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
