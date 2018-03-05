import React, { Component } from 'react';
import './App.css';

class Author extends Component {
	render() {
		return (
			<p> {this.props.text}</p>
		)
	}
}

export default Author

//data flow: Index => App => Comment.js