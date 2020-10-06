export const isValid = (ingredient, category) => {
    if (ingredient.trim() === '') return false;
    if (category.trim() === '') return false;

    return true;
};
