import Axios from 'axios';
import React, { useState, createContext, useEffect } from 'react';

// creating the context
export const CategoriesContext = createContext();

// provider is where the functions and state is located
export const CategoriesContextProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const getCategories = async () => {
            const URL = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`;

            const response = await Axios.get(URL);

            setCategories(response.data.drinks);
        };

        getCategories();
    }, []);

    return (
        <CategoriesContext.Provider value={{ categories }}>
            {children}
        </CategoriesContext.Provider>
    );
};
