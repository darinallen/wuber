import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Home from '../Home/Home';
import Cart from '../Cart/Cart';
import Add from '../Add/Add';
import './App.css';

const FourOhFour = () => <h1>404</h1>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      widgetData: []
    };
    this.getWidgets = this.getWidgets.bind(this);
  }

  componentDidMount() {
    this.getWidgets();
  }

  getWidgets() {
    axios.get('/api/widgets').then(res => {
      this.setState({ widgetData: res.data });
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={() => <Home widgetData={this.state.widgetData} />} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/add" component={Add} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
