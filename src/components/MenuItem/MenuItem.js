import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css'

const MenuItem = ({ menuItem }) => {
    const { idMeal, strMeal, strMealThumb, strArea, strCategory } = menuItem;
    return (
        <div className='item'>
            <img src={strMealThumb} alt="" />
            <h5>{strMeal}</h5>
            <p>{strCategory}, <small>{strArea} Special</small></p>
            <button> <Link to={`/menuItem/${idMeal}`} >Making Details</Link> </button>
        </div>
    );
};

export default MenuItem;