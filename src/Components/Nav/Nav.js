import ThemeSwitcher from '../ThemeSwitcher/index.js';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './nav.css';

function Nav() {
    return (
        <div className="nav">
            <Logo className="nav-logo" />
            <ThemeSwitcher />
        </div>
    );
}

export default Nav;