import React, { Component } from 'react';
import './App.css';

class Comment extends Component {
	render() {
		return (
			<p> written by: {this.props.text}</p>
		)
	}
}

export default Comment

//data flow: Index => App => Comment.js