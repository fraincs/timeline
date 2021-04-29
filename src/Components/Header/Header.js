import Nav from '../Nav/index.js';

import './index.css';

function Header() {
    return (
        <>
            <Nav />
            <h1 className="title"><span className="title-light">An history of Nintendo</span><br />Pocket Consoles</h1>
            <hr className="divider" />
            <h2 className="subtitle">It's a decade since the Nintendo 3DS first went on sale in Japan and a lot has happened both before and since!</h2>
        </>
    );
}

export default Header;