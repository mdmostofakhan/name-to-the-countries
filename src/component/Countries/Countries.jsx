import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import './Country.css';

const Countries = () => {
    const countries = useLoaderData()
    
    return (
        <div>
            <h4>MY Countries:{countries.length} </h4>
            <div className='country'>
                {
                    countries.map(country => <li>{country.name.common} <Link
                     to={`country/${country.acc3}`}>Details</Link> </li>)
                }
            </div>
        </div>
    );
};

export default Countries;