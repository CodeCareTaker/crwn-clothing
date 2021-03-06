import React, { useEffect, lazy, Suspense } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { GlobalStyle } from './global.styles';

import Header from './components/header/header.component';
import Spinner from './components/spinner/spinner.component';
import ErrorBoundary from './components/error-boundary/error-boundary.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

const HomePage = lazy(() => import('./pages/homepage/homepage.component'));
const ProductPage = lazy(() => import('./components/product/product.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));

const App = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  useEffect(() => {
    dispatch(checkUserSession())
  }, [checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={ HomePage } />
            <Route path='/shop' component={ ShopPage } />
            <Route exact path='/checkout' component={ CheckoutPage } />
            <Route exact path='/signIn' 
            render={() => 
              currentUser ? (<Redirect to='/' />) : (<SignInAndSignUp />)
            } 
            />
            <Route exact path='/product' component={ ProductPage } />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  );
}

export default App;
