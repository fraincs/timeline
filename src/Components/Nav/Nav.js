import ThemeSwitcher from '../ThemeSwitcher/index.js';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './nav.css';

function Nav() {
    return (
        <div className="nav">
            <Logo className="nav-logo" />
            <div className="nav-action">
                <button className="nav-cta">Register</button>
                <ThemeSwitcher />
            </div>
        </div>
    );
}

export default Nav;