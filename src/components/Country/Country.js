import React from 'react';
import './Country.css'
const Country = (props) => {
    const { name, capital, flag, population, region } = props.country;
    return (
        <div className="country">
            <h2>Name: {name}</h2>
            <img src={flag} alt="" />
            <p>Capital: {capital}</p>
            <p>Region: {region}</p>
            <p>Population: {population}</p>
        </div>
    );
};

export default Country;