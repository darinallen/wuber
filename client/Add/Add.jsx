import React, { Component } from 'react';
import FormControl from 'react-bootstrap/lib/FormControl';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import { func } from 'prop-types';
import Navigation from '../Navigation/Navigation';
import Hero from '../Hero/Hero';
import './Add.css';

class Add extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categorySelected: 'widget prime',
      finishSelected: 'red',
      sizeSelected: 'small'
    };
    this.handleCategorySelect = this.handleCategorySelect.bind(this);
    this.handleFinishSelect = this.handleFinishSelect.bind(this);
    this.handleSizeSelect = this.handleSizeSelect.bind(this);
    this.handleAddClick = this.handleAddClick.bind(this);
  }

  handleCategorySelect(e) {
    this.setState({ categorySelected: e.target.value });
  }

  handleFinishSelect(e) {
    this.setState({ finishSelected: e.target.value });
  }

  handleSizeSelect(e) {
    this.setState({ sizeSelected: e.target.value });
  }

  handleAddClick() {
    this.props.addWidget(this.state.categorySelected, this.state.finishSelected, this.state.sizeSelected);
  }

  render() {
    return (
      <div>
        <Navigation />
        <Hero title="Add" subtitle="Add New Widgets" />
        <div className="add-content">
          <h1>Add a new widget to the inventory</h1>
          <form className="add-form">
            <FormGroup className="category-select" controlId="formControlsSelect">
              <ControlLabel>Select a Category</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="select"
                value={this.state.categorySelected}
                onChange={this.handleCategorySelect}
              >
                <option value="widget prime">Widget Prime</option>
                <option value="widget elite">Widget Elite</option>
                <option value="widget extreme">Widget Extreme</option>
              </FormControl>
            </FormGroup>
            <FormGroup className="finish-select" controlId="formControlsSelect">
              <ControlLabel>Select a Finish</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="select"
                value={this.state.finishSelected}
                onChange={this.handleFinishSelect}
              >
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
              </FormControl>
            </FormGroup>
            <FormGroup className="size-select" controlId="formControlsSelect">
              <ControlLabel>Select a Size</ControlLabel>
              <FormControl
                componentClass="select"
                placeholder="select"
                value={this.state.sizeSelected}
                onChange={this.handleSizeSelect}
              >
                <option value="small">Small</option>
                <option value="large">Large</option>
                <option value="huge">Huge</option>
              </FormControl>
            </FormGroup>
          </form>
          <Button bsStyle="primary" onClick={this.handleAddClick}>Add Widget</Button>
        </div>
      </div>
    );
  }
}

Add.propTypes = {
  addWidget: func.isRequired
};

export default Add;
