import { create } from 'zustand';

export const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  recommendations: [],

  // CRUD
  addRecipe: (newRecipe) => {
    const updated = [...get().recipes, newRecipe];
    set({ recipes: updated });
    get().filterRecipes();
  },

  deleteRecipe: (id) => {
    set((state) => ({
      recipes: state.recipes.filter(r => r.id !== id),
      favorites: state.favorites.filter(favId => favId !== id),
    }));
    get().filterRecipes();
    get().generateRecommendations();
  },

  updateRecipe: (updatedRecipe) => {
    const updated = get().recipes.map(r => 
      r.id === updatedRecipe.id ? updatedRecipe : r
    );
    set({ recipes: updated });
    get().filterRecipes();
  },

  // Search
  searchTerm: '',
  filteredRecipes: [],
  setSearchTerm: (term) => {
    set({ searchTerm: term });
    get().filterRecipes();
  },

  filterRecipes: () => {
    const { recipes, searchTerm } = get();
    const filtered = recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    set({ filteredRecipes: filtered });
  },

  // Favorites
  addFavorite: (recipeId) => {
    const currentFavs = get().favorites;
    if (!currentFavs.includes(recipeId)) {
      set({ favorites: [...currentFavs, recipeId] });
      get().generateRecommendations();
    }
  },

  removeFavorite: (recipeId) => {
    set((state) => ({
      favorites: state.favorites.filter(id => id !== recipeId)
    }));
    get().generateRecommendations();
  },

  // Recommendations (mock)
  generateRecommendations: () => {
    const { recipes, favorites } = get();
    const recommended = recipes.filter(
      recipe => favorites.includes(recipe.id) && Math.random() > 0.5
    );
    set({ recommendations: recommended });
  },
}));
