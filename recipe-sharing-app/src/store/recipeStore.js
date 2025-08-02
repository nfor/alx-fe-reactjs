// src/store/recipeStore.js
import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  favorites: [],
  recommendations: [],

  addToFavorites: (recipe) =>
    set((state) => ({
      favorites: [...state.favorites, recipe],
    })),

  removeFromFavorites: (id) =>
    set((state) => ({
      favorites: state.favorites.filter((recipe) => recipe.id !== id),
    })),

  setRecommendations: (data) =>
    set(() => ({
      recommendations: data,
    })),
}));

export default useRecipeStore;
