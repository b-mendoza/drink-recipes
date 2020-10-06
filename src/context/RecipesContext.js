import React, { createContext, useEffect, useState } from 'react';
import Axios from 'axios';

export const RecipesContext = createContext();

export const RecipesContextProvider = ({ children }) => {
    const [search, setSearch] = useState({ ingredient: '', category: '' });
    const [recipes, setRecipes] = useState([]);

    const { ingredient, category } = search;

    useEffect(() => {
        const getRecipes = async () => {
            const URL =
                `https://www.thecocktaildb.com/api/json/v1/1/filter.php?` +
                `i=${encodeURI(ingredient.toLowerCase())}&c=${encodeURI(
                    category.toLowerCase()
                )}`;

            const result = await Axios.get(URL);

            setRecipes(result.data.drinks);
        };

        if (ingredient !== '' && category !== '') getRecipes();
    }, [ingredient, category]);

    return (
        <RecipesContext.Provider value={{ recipes, setSearch }}>
            {children}
        </RecipesContext.Provider>
    );
};
