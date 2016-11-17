import React from 'react';
import Playground  from 'component-playground';
import MyComponent from '../../src/MyComponent';

export default function() {
  return (
    <div style={{backgroundColor: 'white'}}>
      <Playground codeText={"<MyComponent>Children</MyComponent>"} scope={{React: React, MyComponent: MyComponent}}/>
    </div>
  );
}

