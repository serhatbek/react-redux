import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className='ui fixed menu'>
      <div
        className='container ui center'
        style={{ alignItems: 'center', justifyContent: 'space-between' }}
      >
        <h2 style={{ marginRight: '20px', marginBottom: '0px' }}>Fake Shop</h2>
        <nav className='ui secondary menu'>
          <NavLink className='item' to='/'>
            Home
          </NavLink>
          <NavLink className='item' to='/about'>
            About
          </NavLink>
          <NavLink className='item' to='/contact'>
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
