import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../index';
import axios from 'axios';
import { useEffect } from 'react';
import { setProducts } from '../../redux/Product/actions';

const ProductList = () => {
  const { products } = useSelector((state) => state.allProducts);
  console.log(products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products');
      // console.log(response);
      dispatch(setProducts(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return <section className='ui grid container'>{/* <Product /> */}</section>;
};

export default ProductList;
