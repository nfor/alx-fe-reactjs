import { useNavigate } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate('/');
  };

  return (
    <button onClick={handleDelete} style={{ marginTop: '1rem', color: 'red' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
