import { useDispatch, useSelector } from 'react-redux';
import { Product } from '../index';
import { useEffect, useState } from 'react';
import actions from '../../redux/actions';

const ProductList = () => {
  const [isError, setIsError] = useState(false);
  const [errorDesc, setErrorDesc] = useState('');
  const { products, isLoading } = useSelector((state) => state.allProducts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: actions.GET_PRODUCTS,
      payload: null,
    });
  }, []);

  if (isError) {
    return (
      <div className='ui container'>
        <h1>Page Not Found!</h1>
        <p>{errorDesc}</p>
      </div>
    );
  }

  if (isLoading || products?.data?.length === 0) {
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
          {products?.data?.map((product) => {
            return <Product key={product.id} product={product} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductList;
