import React, { Component } from 'react';

class Toggle extends Component {
	constructor(props) {
		super(props);
		this.toggleItem = this.toggleItem.bind(this);
		this.state = {
			toggle: false
		};
	}

	toggleItem() {
		this.setState(prevState => {
			return { toggle: !prevState.toggle };
		});
	}

	render() {
		return (
			<div>
				<h1>Toggle</h1>
				<button onClick={this.toggleItem}>
					{this.state.toggle ? 'Hide Item' : 'Show Item'}
				</button>
				{this.state.toggle && (
					<div>
						<p>Here is Your Item</p>
					</div>
				)}
			</div>
		);
	}
}

export default Toggle;
