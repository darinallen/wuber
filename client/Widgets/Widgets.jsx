import React from 'react';
import Widget from '../Widget/Widget';
import mockData from '../../data.json';

const Widgets = () => (
  <div>
    {mockData.map(widget => (
      <Widget category={widget.category} finish={widget.finish} size={widget.size} key={widget.id} />
    ))}
  </div>
);

export default Widgets;
