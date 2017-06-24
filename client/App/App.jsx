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
      widgetData: [],
      orderData: []
    };
    this.getWidgets = this.getWidgets.bind(this);
    this.addWidget = this.addWidget.bind(this);
    // this.getOrder = this.getOrder.bind(this);
  }

  componentDidMount() {
    this.getWidgets();
    // this.getOrder();
  }

  getWidgets() {
    axios.get('http://localhost:3000/api/widgets').then(res => {
      this.setState({ widgetData: res.data });
    });
  }

  // For now, default to quantity of 1
  addWidget(newCategory, newFinish, newSize) {
    axios
      .post('http://localhost:3000/api/widget', {
        category: newCategory,
        finish: newFinish,
        size: newSize,
        quantity: 1
      })
      .then(res => {
        console.log(`post response data: ${JSON.stringify(res.data)}`);
        this.setState({ widgetData: res.data });
      })
      .catch(err => {
        console.log(`post request error: ${err}`);
      });
  }

  // getOrder() {
  //   axios.get('/api/order').then(res => {
  //     this.setState({ orderData: res.data });
  //   });
  // }

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Switch>
            <Route exact path="/" component={() => <Home widgetData={this.state.widgetData} />} />
            <Route exact path="/cart" component={() => <Cart orderData={this.state.orderData} />} />
            <Route exact path="/add" component={() => <Add addWidget={this.addWidget} />} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
