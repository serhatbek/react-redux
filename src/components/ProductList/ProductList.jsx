import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../index';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { setProducts } from '../../redux/Product/actions';

const ProductList = () => {
  const [isError, setIsError] = useState(false);
  const [errorDesc, setErrorDesc] = useState('');
  const { products, isLoading } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      dispatch(setProducts(response?.data));
    } catch (error) {
      setIsError(true);
      setErrorDesc(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (isError) {
    return (
      <div className='ui container'>
        <h1>Page Not Found!</h1>
        <p>{errorDesc}</p>
      </div>
    );
  }

  if (isLoading || products.length === 0) {
    return (
      <div className='loading' style={{ display: 'flex ' }}>
        <div className='lds-ripple' style={{ margin: '0 auto' }}>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return (
    <section className='ui grid container'>
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
