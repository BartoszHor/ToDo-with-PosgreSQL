import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainLayout from '../src/components/layout/MainLayout/MainLayout';
import NotFound from '../src/components/views/NotFound/NotFound'
import './styles/global.scss';
import store from '../src/redux/store';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={'/not'} component={NotFound} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
    
  );
};

export default App;
