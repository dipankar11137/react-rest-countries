import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country)
    const { area, region, population, name, flags } = props.country;
    return (
        <div className='country'>
            <img src={flags[1]} alt="" />
            <h2>Country name : {name.common}</h2>
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p>Area : {area}</p>
        </div>
    );
};

export default Country;