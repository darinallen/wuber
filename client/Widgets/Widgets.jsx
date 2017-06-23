import React from 'react';
import { arrayOf, any } from 'prop-types';
import Widget from '../Widget/Widget';

const Widgets = props => (
  <div className="widgets-content">
    {props.widgetData
      .filter(
        widget =>
          `${widget.finish} ${widget.size}`.toLowerCase().indexOf(props.searchTerm.toLowerCase()) >= 0 &&
          (widget.category === props.categorySelected || props.categorySelected === 'all')
      )
      .map(widget => <Widget category={widget.category} finish={widget.finish} size={widget.size} key={widget._id} />)}
  </div>
);

Widgets.propTypes = {
  widgetData: arrayOf(any).isRequired
};

export default Widgets;
