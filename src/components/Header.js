import React from 'react';
import Link from './Link';
function Header() {
  return (
    <div className='ui secondary pointing menu'>
      <Link className='item' href='/'>
        Accordion
      </Link>
      <Link className='item' href='/list'>
        Wikipedia Search
      </Link>
      <Link className='item' href='/dropdown'>
        Color App
      </Link>
      <Link className='item' href='/translate'>
        Translate
      </Link>
    </div>
  );
}

export default Header;
