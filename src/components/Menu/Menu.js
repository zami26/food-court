import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MenuItem from '../MenuItem/MenuItem';
import './Menu.css'

const Menu = () => {
    const menuItems = useLoaderData();
    // console.log(menuItems.meals);
    return (
        <div>
            <h3>It is the menu page.</h3>
            <div className='items-container'>
                {
                    (menuItems.meals).map(menuItem => <MenuItem
                        key={menuItem.idMeal}
                        menuItem={menuItem}
                    ></MenuItem>)
                }
            </div>

        </div>
    );
};

export default Menu;