import React from 'react';
import Widget from '../Widget/Widget';
import mockData from '../../data.json';
import './Widgets.css';

const Widgets = () => (
  <div className="widgets-content">
    {mockData.map(widget => (
      <Widget category={widget.category} finish={widget.finish} size={widget.size} key={widget.id} />
    ))}
  </div>
);

export default Widgets;
