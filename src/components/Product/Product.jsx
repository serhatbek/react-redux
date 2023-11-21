import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const { id, title, price, category, image } = product;

  return (
    <Link className='card' to={`/product/${id}`}>
      <div
        className='image'
        style={{
          width: '200px',
          height: '250px',
          margin: 'auto',
          padding: '20px',
          background: 'transparent',
        }}
      >
        <img
          src={image}
          alt={title}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className='content'>
        <div className='header'>{title}</div>
        <div className='meta price'>$ {price}</div>
        <div className='meta'>{category}</div>
      </div>
    </Link>
  );
};

export default Product;

Product.propTypes = {
  product: PropTypes.object,
};
