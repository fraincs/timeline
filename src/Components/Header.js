import React from 'react'
import Nav from './Nav';

function Header() {
  return (
    <>
      <Nav/>
      <h1 className="title"><span className="title-light">An history of Nintendo</span><br />Pocket Consoles</h1>
      <hr />
      <h2 className="subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et orci et purus luctus sollicitudin. Aenean posuere maximus lorem, vitae laoreet quam lacinia et. Mauris quis auctor ante, non vulputate nisi.</h2>
    </>
    );
}

export default Header;