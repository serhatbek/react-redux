import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import { ProductDetail } from './components';
import { About, Contact, Home, Layout } from './pages';

function App() {
  return (
    <>
      <Provider store={store}>
        <Router basename=''>
          <Layout>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} />
              <Route
                exact
                path='/product/:productId'
                component={ProductDetail}
              />
              <Route exact path='*'>
                404 Not Found
              </Route>
            </Switch>
          </Layout>
        </Router>
      </Provider>
    </>
  );
}

export default App;
