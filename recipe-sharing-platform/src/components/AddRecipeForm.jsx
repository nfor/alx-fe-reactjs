import React, { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!ingredients.trim()) {
      newErrors.ingredients = "Ingredients are required";
    } else if (ingredients.split(",").length < 2) {
      newErrors.ingredients = "Please list at least 2 ingredients separated by commas";
    }
    if (!instructions.trim()) newErrors.instructions = "Instructions are required";

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Form is valid, handle submission
      const newRecipe = {
        id: Date.now(),
        title,
        ingredients: ingredients.split(",").map((i) => i.trim()),
        instructions: instructions.split(".").map((i) => i.trim()).filter(Boolean),
      };
      console.log("New Recipe:", newRecipe);
      alert("Recipe submitted! Check console for details.");

      // Clear form
      setTitle("");
      setIngredients("");
      setInstructions("");
      setErrors({});
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Add New Recipe</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
        {/* Title */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Recipe Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={`w-full border rounded px-3 py-2 focus:outline-none ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Ingredients (comma separated)</label>
          <textarea
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows={4}
            className={`w-full border rounded px-3 py-2 focus:outline-none ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label className="block text-gray-700 font-semibold mb-1">Preparation Steps (separate by periods)</label>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            rows={4}
            className={`w-full border rounded px-3 py-2 focus:outline-none ${
              errors.instructions ? "border-red-500" : "border-gray-300"
            }`}
          ></textarea>
          {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
