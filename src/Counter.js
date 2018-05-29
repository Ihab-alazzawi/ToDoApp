import React, { Component } from 'react';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.addOne = this.addOne.bind(this);
		this.minOne = this.minOne.bind(this);
		this.reset = this.reset.bind(this);
		this.state = {
			count: 0
		};
	}

	addOne() {
		this.setState(prevState => {
			return { count: prevState.count + 1 };
		});
	}
	minOne() {
		this.setState(prevState => {
			return { count: prevState.count - 1 };
		});
	}
	reset() {
		this.setState(() => {
			return { count: 0 };
		});
	}

	render() {
		return (
			<div>
				<h1>Count: {this.state.count}</h1>
				<button onClick={this.addOne}>+1</button>
				<button onClick={this.minOne}>-1</button>
				<button onClick={this.reset}>Reset</button>
			</div>
		);
	}
}

export default Counter;
