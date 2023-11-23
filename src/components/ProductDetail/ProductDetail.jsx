import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../redux/actions';

const ProductDetail = () => {
  const [isError, setIsError] = useState(false);
  const [errorDesc, setErrorDesc] = useState('');
  const { productId } = useParams();
  const dispatch = useDispatch();
  const { selectedProduct, isLoading } = useSelector(
    (state) => state.allProducts
  );

  const productDetail = selectedProduct?.data;

  useEffect(() => {
    dispatch({
      type: actions.GET_SELECTED_PRODUCT,
      id: productId,
    });
    return () => {
      dispatch({
        type: actions.REMOVE_SELECTED_PRODUCT,
      });
    };
  }, [productId]);

  if (isError) {
    return (
      <div className='ui container'>
        <h1>Page Not Found!</h1>
        <p>{errorDesc}</p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className='ui grid container loading'>
        <div className='lds-ripple' style={{ margin: '0 auto' }}>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  const { title, price, category, description, image } = productDetail || {};

  return (
    <section className='ui grid container'>
      <div className='ui placeholder segment'>
        <div className='ui two column stackable center aligned grid'>
          <div className='ui vertical divider'>AND</div>
          <div className='middle aligned row'>
            <div className='column lp'>
              <img className='ui fluid image' src={image} />
            </div>
            <div className='column rp'>
              <h1>{title}</h1>
              <h2>
                <a className='ui teal tag label'>${price}</a>
              </h2>
              <h3 className='ui brown block header'>{category}</h3>
              <p>{description}</p>
              <div
                className='ui vertical animated button'
                tabIndex='0'
                style={{
                  background: '#d3556a',
                  color: 'white',
                  marginBottom: '15px',
                }}
              >
                <div className='hidden content'>
                  <i className='shop icon'></i>
                </div>
                <div className='visible content'>Add to Cart</div>
              </div>

              <Link to='/'> Back To Home</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
