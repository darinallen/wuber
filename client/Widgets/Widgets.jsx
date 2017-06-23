import React from 'react';
import Widget from '../Widget/Widget';
import mockData from '../../data.json';

const Widgets = props => (
  <div className="widgets-content">
    {mockData
      .filter(
        widget =>
          `${widget.finish} ${widget.size}`.toLowerCase().indexOf(props.searchTerm.toLowerCase()) >= 0 &&
          (widget.category === props.categorySelected || props.categorySelected === 'all')
      )
      .map(widget => <Widget category={widget.category} finish={widget.finish} size={widget.size} key={widget.id} />)}
  </div>
);

export default Widgets;
