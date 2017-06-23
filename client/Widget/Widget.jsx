import React from 'react';
import { string } from 'prop-types';

const Widget = props => (
  <div>
    <h4>{`${props.size} ${props.finish} ${props.category}`}</h4>
  </div>
);

Widget.propTypes = {
  size: string.isRequired,
  finish: string.isRequired,
  category: string.isRequired
};

export default Widget;
