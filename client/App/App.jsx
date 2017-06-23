import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../Home/Home';
import Cart from '../Cart/Cart';
import './App.css';

const FourOhFour = () => <h1>404</h1>;

const App = () => (
  <BrowserRouter>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
