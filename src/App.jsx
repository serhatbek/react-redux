import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { Header, ProductDetail, ProductList } from './components';
import { About, Contact, Home, Layout } from './pages';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router basename='https://github.com/serhatbek/react-redux'>
          <Layout>
            <Switch>
              <Route path='/'>
                <Home />
              </Route>
              <Route path='/about'>
                <About />
              </Route>
              <Route path='/contact'>
                <Contact />
              </Route>
              <Route exact path='/product/:productId'>
                <ProductDetail />
              </Route>
              {/* <Route path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/product/:productId'
                component={ProductDetail}
              />
              <Route path='*'>404 Not Found</Route> */}
            </Switch>
          </Layout>
        </Router>
      </Provider>
    </>
  );
}

export default App;
