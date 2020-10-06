import React, { useContext, useState } from 'react';

import { RecipesContext } from '../context/RecipesContext';
import { useCategories } from '../hooks/useCategories';
import { useForm } from '../hooks/useForm';
import { isValid } from '../helpers/isValid';
import Error from './Error';

const INITIAL_FORM_VALUES = { ingredient: '' };

const Form = () => {
    const { setSearch } = useContext(RecipesContext);

    const [errorHandler, setErrorHandler] = useState(false);
    const [category, SelectCategories] = useCategories('Search by Category');

    const [formValues, handleChange] = useForm(INITIAL_FORM_VALUES);
    const { ingredient } = formValues;

    const handleSubmit = event => {
        event.preventDefault();

        if (!isValid(ingredient, category)) {
            setErrorHandler(true);

            return;
        } else setErrorHandler(false);

        setSearch(state => ({ ...state, ingredient, category }));
    };

    return (
        <form className="col-12" onSubmit={handleSubmit}>
            <fieldset className="text-center mb-3">
                <legend>Search for Drinks by Category or Ingredient</legend>
            </fieldset>

            {errorHandler && <Error message="All the fields are mandatory" />}

            <div className="row">
                <div className="col-md-4">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="text"
                            name="ingredient"
                            placeholder="Search by Ingredient"
                            value={ingredient}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="form-group">
                        <SelectCategories />
                    </div>
                </div>

                <div className="col-md-4 mb-5">
                    <button
                        className="btn btn-block btn-outline-primary"
                        type="submit"
                    >
                        Search for Drinks
                    </button>
                </div>
            </div>
        </form>
    );
};

export default Form;
