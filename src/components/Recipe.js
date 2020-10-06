import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { ModalContext } from '../context/ModalContext';
import ModalRecipe from './ModalRecipe';

const Recipe = ({ idDrink, strDrink, strDrinkThumb }) => {
    const [open, setOpen] = useState(false);

    const { setIdRecipe } = useContext(ModalContext);

    const handleClick = () => {
        setIdRecipe(idDrink);

        setOpen(state => !state);
    };

    return (
        <div className="card">
            <h2 className="card-header">{strDrink}</h2>

            <img
                className="card-img-top"
                src={strDrinkThumb}
                alt={`${strDrink} drink`}
                loading="lazy"
            />

            <div className="card-body">
                <button
                    className="btn btn-block btn-primary"
                    type="button"
                    onClick={handleClick}
                >
                    Recipe
                </button>

                <ModalRecipe open={open} setOpen={setOpen} />
            </div>
        </div>
    );
};

Recipe.propTypes = {
    idDrink: PropTypes.string.isRequired,
    strDrink: PropTypes.string.isRequired,
    strDrinkThumb: PropTypes.string.isRequired,
};

export default Recipe;
