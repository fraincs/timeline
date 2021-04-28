import React from 'react'
import Nav from './Nav';

function Header() {
  return (
    <>
      <Nav/>
      <h1 className="title"><span className="title-light">An history of Nintendo</span><br />Pocket Consoles</h1>
      <hr />
      <h2 className="subtitle">It's a decade since the Nintendo 3DS first went on sale in Japan and a lot has happened both before and since!</h2>
    </>
    );
}

export default Header;