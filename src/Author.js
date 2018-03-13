import React, { Component } from 'react';
import './App.css';

class Author extends Component {
	render() {
		return (
			<p>written by:  {this.props.data}</p>
		)
	}
}

export default Author

//data flow: Index => App => Comment.js