import React, { useContext, useState } from 'react';

import { CategoriesContext } from '../context/CategoriesContext';

export const useCategories = selectedOption => {
    const [state, setState] = useState('');
    const { categories } = useContext(CategoriesContext);

    const handleChange = ({ target }) => setState(target.value);

    const SelectCategories = () => (
        <select
            className="form-control"
            name="category"
            value={state}
            onChange={handleChange}
        >
            <option hidden value>
                {selectedOption}
            </option>

            {categories.map(category => (
                <option key={category.strCategory} value={category.strCategory}>
                    {category.strCategory}
                </option>
            ))}
        </select>
    );

    return [state, SelectCategories];
};
