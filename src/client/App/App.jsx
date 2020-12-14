import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader'; // this should only be done in the top level App component
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18n';
import { Provider } from 'react-redux';
import { CSSReset, ThemeProvider } from '@chakra-ui/core';

import NotFound from 'routes/NotFound';
import routes from '../routes/index';
import './App.scss';
import store from '../state/ReduxStore';

const App = () => (
  <Suspense fallback={<div />}>
    <ThemeProvider>
      <CSSReset />
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <Router>
            <div className="app">
              <div className="app-main-content">
                <Switch>
                  {routes.map(({ path, view }) => (
                    <Route exact key={path} path={path} component={view} />
                  ))}
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </Router>
        </Provider>
      </I18nextProvider>
    </ThemeProvider>
  </Suspense>
);

export default hot(module)(App);
