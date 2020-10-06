import React, { useContext } from 'react';

import { RecipesContext } from './context/RecipesContext';
import Header from './components/Header';
import Form from './components/Form';
import RecipesList from './components/RecipesList';

const App = () => {
    const { recipes } = useContext(RecipesContext);

    return (
        <>
            <Header />

            <div className="container mt-5">
                <div className="row">
                    <Form />
                </div>

                {Object.keys(recipes).length !== 0 && <RecipesList />}
            </div>
        </>
    );
};

export default App;
