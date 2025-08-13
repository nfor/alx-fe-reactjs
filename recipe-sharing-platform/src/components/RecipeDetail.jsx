import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Recipe not found</h1>
        <Link to="/" className="text-blue-500 underline mt-4 block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-3xl mx-auto bg-gray-50 min-h-screen">
      <Link to="/" className="text-blue-500 underline mb-6 inline-block">
        &larr; Back to Home
      </Link>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
          <p className="text-gray-700 mb-4">{recipe.summary}</p>

          {/* Ingredients Section */}
          {recipe.ingredients && (
            <div className="mb-4">
              <h2 className="text-2xl font-semibold mb-2">Ingredients</h2>
              <ul className="list-disc list-inside text-gray-700">
                {recipe.ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Instructions Section */}
          {recipe.instructions && (
            <div>
              <h2 className="text-2xl font-semibold mb-2">Instructions</h2>
              <ol className="list-decimal list-inside text-gray-700">
                {recipe.instructions.map((step, index) => (
                  <li key={index} className="mb-1">{step}</li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
