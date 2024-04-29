import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
  const [name, setName] = useState("");
  const [cuisine, setCuisine] = useState("");
  const [photo, setPhoto] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [preparation, setPreparation] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const newRecipe = {
      name: name,
      cuisine: cuisine,
      photo: photo,
      ingredients: ingredients,
      preparation: preparation,
    };

    addRecipe(newRecipe);

    // Clear input fields after submission
    setName("");
    setCuisine("");
    setPhoto("");
    setIngredients("");
    setPreparation("");
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <div className="recipe-list">
      <table>
        <tbody>
          <tr>
            <td style={{ width: '12%' }}>
              <input
                id="name"
                name="name"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </td>
            <td style={{ width: '12%' }}>
              <input
                id="cuisine"
                name="cuisine"
                placeholder="Cuisine"
                value={cuisine}
                onChange={(e) => setCuisine(e.target.value)}
                required
              />
            </td>
            <td style={{ width: '18%' }}>
              <input
                id="photo"
                name="photo"
                placeholder="URL"
                type="url"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
                required
              />
            </td>

            <td style={{ width: '20%' }}>
              <textarea
                id="ingredients"
                name="ingredients"
                placeholder="Ingredients"
                className="content_td"
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                required
                rows={3}
              />
            </td>

            <td style={{ width: '20%' }}>
              <textarea
                id="preparation"
                className="content_td"
                placeholder="Preparation"
                name="preparation"
                value={preparation}
                onChange={(e) => setPreparation(e.target.value)}
                required
                rows={3}
              />
            </td>
            <td style={{ width: '17%' }}>
              <button name="Create" type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    </form>
  );
}

export default RecipeCreate;
