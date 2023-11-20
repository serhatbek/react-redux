import PropTypes from 'prop-types';
import { Header } from '../../components';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any,
};
