import React from 'react';
import Option from './Option';

const Options = props => (
	<div>
		<button onClick={props.removeAll}>Remove All</button>
		{props.options.map((x, i) => (
			<Option key={i} option={x} removeItemHandler={props.removeItemHandler} />
		))}
	</div>
);

export default Options;
