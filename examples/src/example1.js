import React from 'react';
import Playground  from 'component-playground';
import MyComponent from '../../src/MyComponent';

export default class extends React.component( ){
	render () {
		return (
			<div style={{backgroundColor: 'white'}}>
				<Playground codeText={"<MyComponent>Children</MyComponent>"} scope={{React: React, MyComponent: MyComponent}}/>
			</div>
		);
	}
};
