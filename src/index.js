import React from 'react';
import ReactDOM from 'react-dom';

import { CategoriesContextProvider } from './context/CategoriesContext';
import { RecipesContextProvider } from './context/RecipesContext';
import { ModalContextProvider } from './context/ModalContext';
import App from './App';
import './bootstrap.min.css';
import './index.css';

ReactDOM.render(
    <React.StrictMode>
        <CategoriesContextProvider>
            <RecipesContextProvider>
                <ModalContextProvider>
                    <App />
                </ModalContextProvider>
            </RecipesContextProvider>
        </CategoriesContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
