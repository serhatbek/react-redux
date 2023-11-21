import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../index';
import axios from 'axios';
import { useEffect } from 'react';
import { setProducts } from '../../redux/Product/actions';

const ProductList = () => {
  const { products } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <section className='ui grid container' style={{ marginTop: '40px' }}>
      <div className='column wide'>
        <div className='four ui link cards'>
          {products?.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
