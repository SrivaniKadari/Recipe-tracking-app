import React from "react";

function RecipeItem({ recipe, onDelete }) {
  return (
    <tr>
      <td>{recipe.name}</td>
      <td>{recipe.cuisine}</td>
      <td><img src={recipe.photo} alt={recipe.name} /></td>
      <td className="content_td"><div><p>{recipe.ingredients}</p></div></td>
      <td className="content_td"><div><p>{recipe.preparation}</p></div></td>
      <td>
        <button name="delete" onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
}

export default RecipeItem;
