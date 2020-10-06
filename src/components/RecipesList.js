import React, { useContext } from 'react';

import { RecipesContext } from '../context/RecipesContext';
import Recipe from './Recipe';

const RecipesList = () => {
    const { recipes } = useContext(RecipesContext);

    return (
        <div className="card-columns">
            {recipes.map(recipe => (
                <Recipe key={recipe.idDrink} {...recipe} />
            ))}
        </div>
    );
};

export default RecipesList;
