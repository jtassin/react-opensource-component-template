import React from 'react';

export const MyComponent = function (props) {
  return <div>{props.children}</div>;
};

MyComponent.propTypes = {
  children: React.PropTypes.elements,
};

export default MyComponent;
