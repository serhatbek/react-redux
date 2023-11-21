import PropTypes from 'prop-types';

const Product = ({ product }) => {
  const { title, price, category, image } = product;

  return (
    <div className='card'>
      <div className='image'>
        <img src={image} alt={title} />
      </div>
      <div className='content'>
        <div className='header'>{title}</div>
        <div className='meta price'>$ {price}</div>
        <div className='meta'>{category}</div>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {
  product: PropTypes.object,
};
