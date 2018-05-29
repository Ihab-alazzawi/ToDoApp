import React from 'react';

const Option = props => (
	<ol>
		{props.option}
		<button
			onClick={e => {
				props.removeItemHandler(props.option);
			}}>
			Remove Item
		</button>
	</ol>
);

export default Option;
