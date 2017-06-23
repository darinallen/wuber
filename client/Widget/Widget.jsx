import React from 'react';
import { string } from 'prop-types';
import Button from 'react-bootstrap/lib/Button';
import './Widget.css';

const Widget = props => (
  <div className="widget-container">
    <h5 className="title">{`${props.size} ${props.finish} ${props.category}`}</h5>
    <div className="icon" style={{ backgroundColor: props.finish }} />
    <div className="cart-btn-container">
      <Button bsStyle="primary">Add to Cart</Button>
    </div>
  </div>
);

Widget.propTypes = {
  size: string.isRequired,
  finish: string.isRequired,
  category: string.isRequired
};

export default Widget;
