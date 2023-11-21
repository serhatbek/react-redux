import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const ProductList = () => {
  const { products } = useSelector((state) => state.allProducts);
  console.log(products);
  return <section className='ui grid container'>ProductList</section>;
};

export default ProductList;
