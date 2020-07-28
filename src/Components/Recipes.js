import React from 'react'
import Recipe from './Recipe'

function Recipes ({ recipes }) {

    let recipesToRender;

    if (recipes.length === 0) {
      
      recipesToRender = "... Try again?";
    }

    else if (recipes) {
      recipesToRender = recipes.map(recipe => {
        return <Recipe
        key={recipe.recipe.label}
        title={recipe.recipe.label}
        calories={recipe.recipe.calories}
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        url={recipe.recipe.url}
      />;
     
      })
    }
  else {recipesToRender = "No Results Found or Server Error!";}

	return (
		<article className="recipe-flex">
           {recipesToRender}
		</article>
	)
}

export default Recipes

