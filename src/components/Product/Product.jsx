import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const Product = () => {
  const { products } = useSelector((state) => state.allProducts);
  const { title, category } = products[0];

  return (
    <div className='four column wide'>
      <div className='ui link cards'>
        <div className='card'>
          <div className='image'></div>
          <div className='content'>
            <div className='header'>{title}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

Product.propTypes = {};
