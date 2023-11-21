import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='ui fixed menu'>
      <div className='container ui center'>
        <h2>Fake Shop</h2>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
