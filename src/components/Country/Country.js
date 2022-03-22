import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country)
    return (
        <div className='country'>
            <h2>Country name : {props.country.name.common}</h2>
            <p>Population : {props.country.population}</p>
            <p>Region : {props.country.region}</p>
            <p>Area : {props.country.area}</p>
        </div>
    );
};

export default Country;