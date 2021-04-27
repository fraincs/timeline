import React from 'react'
import ThemeSwitcher from './ThemeSwitcher';

function Nav() {
    return (
        <div className="nav">
            <img src="https://via.placeholder.com/200x60?text=Pocket+Gaming" alt="Pocket Gaming Logo"/>
            <ThemeSwitcher />
        </div>
    );
}

export default Nav;