import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import { ModalContext } from '../context/ModalContext';
import Modal from '@material-ui/core/Modal';
import Fade from '@material-ui/core/Fade';
import Backdrop from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core/styles';

const getModalStyle = () => {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
};

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            height: '100%',
        },
        [theme.breakpoints.up('sm')]: {
            width: 500,
            height: 700,
            borderRadius: 3,
        },
        outline: 'none',
        overflowY: 'auto',
    },
}));

const ModalRecipe = ({ open, setOpen }) => {
    const [modalStyle] = useState(getModalStyle);

    const { recipe, setRecipe, setIdRecipe } = useContext(ModalContext);
    const { strDrink, strInstructions, strDrinkThumb } = recipe;

    const classes = useStyles();

    const handleClose = () => {
        setIdRecipe(null);
        setRecipe({});

        setOpen(false);
    };

    if (Object.keys(recipe).length === 0) return null;

    const formatedIngredients = () => {
        const ingredients = [];

        for (let index = 1; index < 16; index++) {
            if (
                recipe[`strIngredient${index}`] !== null &&
                recipe[`strMeasure${index}`] !== null
            ) {
                ingredients.push(
                    <li
                        key={
                            recipe[`strIngredient${index}`] +
                            recipe[`strMeasure${index}`]
                        }
                    >
                        {recipe[`strIngredient${index}`]} -{' '}
                        {recipe[`strMeasure${index}`]}
                    </li>
                );
            } else if (recipe[`strIngredient${index}`] !== null) {
                ingredients.push(
                    <li key={recipe[`strIngredient${index}`]}>
                        {recipe[`strIngredient${index}`]}
                    </li>
                );
            }
        }

        return ingredients;
    };

    return (
        <Modal
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <div className={classes.paper} style={modalStyle}>
                    <h3>{strDrink}</h3>
                    <hr />

                    <img
                        className="img-fluid my-2"
                        src={strDrinkThumb}
                        alt={`${strDrink} drink`}
                    />

                    <h4 className="mt-2">Instructions</h4>
                    <p>{strInstructions}</p>

                    <h4 className="mt-2">Ingredients and Quantities</h4>
                    <ul>{formatedIngredients()}</ul>

                    <button
                        className="btn btn-primary btn-block"
                        type="button"
                        onClick={handleClose}
                    >
                        Close
                    </button>
                </div>
            </Fade>
        </Modal>
    );
};

ModalRecipe.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired,
};

export default ModalRecipe;
