import {
  Switch,
  Route,
  HashRouter as Router,
  BrowserRouter,
} from 'react-router-dom';

import { ProductDetail, ProductList } from './components';
import { About, Home, Layout } from './pages';
function App() {
  return (
    <>
      <Router basename=''>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <Route path='/product/:productId' component={ProductDetail} />
            <Route path='/about' component={About} />
            <Route path='*'>404 Not Found</Route>
            {/* <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/about'>
              <About />
            </Route> */}
          </Switch>
        </Layout>
      </Router>
    </>
  );
}

export default App;
