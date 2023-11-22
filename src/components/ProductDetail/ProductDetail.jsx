import { useEffect } from 'react';
import { selectProduct } from '../../redux/Product/actions';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const ProductDetail = () => {
  const { selectedProduct, isLoading } = useSelector(
    (state) => state.allProducts
  );

  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      dispatch(selectProduct(response?.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (productId && productId !== '') {
      fetchProductDetail();
    }
  }, [productId]);

  const { id, title, price, category, description, image } = selectedProduct;
  if (isLoading) {
    return (
      <div className='ui grid container loading'>
        <div className='lds-ripple'>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

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
                style={{ background: '#e38595', color: 'white' }}
              >
                <div className='hidden content'>
                  <i className='shop icon'></i>
                </div>
                <div className='visible content'>Add to Cart</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
