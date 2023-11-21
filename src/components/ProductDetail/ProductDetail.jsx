import { useEffect } from 'react';
import { selectProduct } from '../../redux/Product/actions';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import axios from 'axios';

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get(
        `https://fakestoreapi.com/products/${productId}`
      );
      console.log(response);
      dispatch(selectProduct(response));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [productId]);

  return <div>Product Detail</div>;
};

export default ProductDetail;
