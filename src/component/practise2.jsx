import React from 'react';
import practise from './practise';

const SimpleComponent = (props) => {
  return <div>Hello, {props.name}!</div>;
};

const EnhancedComponent = practise(SimpleComponent);

export { EnhancedComponent };
