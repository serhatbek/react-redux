import PropTypes from 'prop-types';
import { Header } from '../../components';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main style={{ marginTop: '80px' }}>{children}</main>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any,
};
