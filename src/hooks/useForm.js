import { useState } from 'react';

export const useForm = initialState => {
    const [values, setValues] = useState(initialState);

    const handleChange = ({ target }) => {
        setValues({ ...values, [target.name]: target.value });
    };

    return [values, handleChange];
};
