import React, { createContext, useEffect, useState } from 'react';
import Axios from 'axios';

export const ModalContext = createContext();

export const ModalContextProvider = ({ children }) => {
    const [idRecipe, setIdRecipe] = useState(null);
    const [recipe, setRecipe] = useState({});

    useEffect(() => {
        const getRecipe = async () => {
            const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;

            const response = await Axios.get(URL);

            setRecipe(response.data.drinks[0]);
        };

        if (idRecipe) getRecipe();
    }, [idRecipe]);

    return (
        <ModalContext.Provider value={{ recipe, setRecipe, setIdRecipe }}>
            {children}
        </ModalContext.Provider>
    );
};
