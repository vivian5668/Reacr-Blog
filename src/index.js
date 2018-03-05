import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Post from './App';
import Author from './App';
import registerServiceWorker from './registerServiceWorker';


var post = {
	title: "Dinosuar!",
	authors: [
		"James Reich",
		"hwd JINA",
		"Reny IJu"
	],
	body: "Check out this body property!",
	comments: [
		'pizza', 'coffee','flower'
	]
}

ReactDOM.render(
		<Post 
			title={post.title}
			authors={post.authors}
			body={post.body}
			comments={post.comments}
		/>, 
		document.getElementById('root')
	);
registerServiceWorker();

