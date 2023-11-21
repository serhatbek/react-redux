import PropTypes from 'prop-types';
import { Header } from '../../components';

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default Layout;

Layout.propTypes = {
  children: PropTypes.any,
};
