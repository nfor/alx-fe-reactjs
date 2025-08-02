import useRecipeStore from '../store/recipeStore';

const FavoritesList = () => {
  const favorites = useRecipeStore((state) => state.favorites);
  
  return (
    <div>
      <h2>Favorites</h2>
      {favorites.map((recipe) => (
        <div key={recipe.id}>{recipe.name}</div>
      ))}
    </div>
  );
};
