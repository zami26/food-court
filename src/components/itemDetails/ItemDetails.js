import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './itemdetails.css'
const ItemDetails = () => {
    const details = useLoaderData();
    const getDetails = details.meals[0];
    console.log(getDetails.strYoutube);
    return (
        <div className='details'>
            <h3>The making details of :-  {getDetails.strMeal}</h3>
            <img src={getDetails.strMealThumb} alt="" />

            <p><b>Making process:-</b> {getDetails.strInstructions}</p>

        </div>
    );
};

export default ItemDetails;