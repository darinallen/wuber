import React, { Component } from 'react';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import { arrayOf, any } from 'prop-types';
import Navigation from '../Navigation/Navigation';
import Widgets from '../Widgets/Widgets';
import './Home.css';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      categorySelected: 'all'
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSearch(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleSelect(e) {
    this.setState({ categorySelected: e.target.value });
  }

  render() {
    return (
      <div>
        <Navigation />
        <main className="main-content">
          <h1 className="greeting">Wuber: the Uber of Widgets</h1>
          <form className="form">
            <FormGroup controlId="formBasicText">
              <FormControl
                type="text"
                value={this.state.searchTerm}
                placeholder="Search for a widget by size or finish"
                onChange={this.handleSearch}
              />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup className="form-select" controlId="formControlsSelect">
              <ControlLabel>Select a Category</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="select"
                value={this.state.categorySelected}
                onChange={this.handleSelect}
              >
                <option value="all">All</option>
                <option value="widget prime">Widget Prime</option>
                <option value="widget elite">Widget Elite</option>
                <option value="widget extreme">Widget Extreme</option>
              </FormControl>
            </FormGroup>
          </form>
          <Widgets
            widgetData={this.props.widgetData}
            searchTerm={this.state.searchTerm}
            categorySelected={this.state.categorySelected}
          />
        </main>
      </div>
    );
  }
}

// Ideally, 'any' should be replaced with the actual shape
Home.propTypes = {
  widgetData: arrayOf(any).isRequired
};

export default Home;
