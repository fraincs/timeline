import React from 'react'
import ThemeSwitcher from './ThemeSwitcher';

function Nav() {
    return (
        <div className="nav">
            <img src="https://via.placeholder.com/200x60?text=Mechanical+Times+Logo" alt="Mechanical Times Logo"/>
            <ThemeSwitcher />
        </div>
    );
}

export default Nav;