import React from "react";
import RecipeItem from "./RecipeItem";

function RecipeList({recipes, deleteRecipe}) {
 const handleDelete = (index) => {
    deleteRecipe(index);
  };
  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked.

  return (
    <div className="recipe-list">
      
      <table>
        <thead>
           <tr>
            <th>Name</th>
            <th>Cusuine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preaparations</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {recipes.map((item, index) => (
            <RecipeItem key={index} recipe={item} onDelete={() => handleDelete(index)} />
          ))}
        
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;
