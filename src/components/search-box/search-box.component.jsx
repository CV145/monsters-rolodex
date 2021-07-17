import React from 'react';

import './search-box.styles.css';


//Functional Components don't have states and have overall less functionality than class components. They will take in some props and return some HTML
export const SearchBox = props => (
    <input
        className='search'
        type='search'
        placeholder={props.placeholder}
        onChange={props.handleChange}
    />
);

//The placeholder is a generic prop that gets passed in