import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { hot } from 'react-hot-loader';
import Store from '../redux';
import DevTools from '../redux/DevTools';
import WeChatView from '../containers/WeChatView'
import IndexPage from '../containers/IndexPage'

const Router = ({ component: Component, children, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      <Component {...props} ><Switch>{children}</Switch></Component>
    )}
  />
);

const Root = () => (
  <BrowserRouter>
    <Provider store={Store}>
      <IndexPage>
        {__DEVELOPMENT__ && <DevTools />}
        <Switch>
          <Router path='/' exact component={WeChatView} />
        </Switch>
      </IndexPage>
    </Provider>
  </BrowserRouter>
);

export default hot(module)(Root);
