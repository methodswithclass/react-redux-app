import React, { Component } from 'react';

import { connect } from "react-redux";

import { increment } from "../redux/actions/actions";

import './Button.css';

class Button extends Component {

	constructor(props) {

		super(props);

		this.state = {
			count:0
		}

		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {

		// console.log("handle click");

		this.setState((state, props) => {
			return {count:++state.count}
		});

		this.props.increment(this.state.count);
	}


  render () {

  	return (
	    <div className="button-outer" onClick={this.handleClick}>
	      		Click
	    </div>
	  );

	}
}

export default connect(
  null,
  { increment }
)(Button);