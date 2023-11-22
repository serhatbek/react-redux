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
      <div className='loading'>
        <div className='lds-ripple'>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  return <div>Product Detail</div>;
};

export default ProductDetail;
