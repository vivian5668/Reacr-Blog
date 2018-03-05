import React, { Component } from 'react';
import logo from './logo.svg';
import Comment from './Comment';
import Author from './Author';
import './App.css';

class Post extends Component {
  render() {
    const { title, authors, body, comments } = this.props

    // let allComments = [
    //     <Comment text={comments[0]}/>,
    //     <Comment text={comments[1]}/>,
    //     <Comment text={comments[2]}/> 
    // ]
    let allComments = comments.map(function (comment, index) {
      return <Comment text={comment} />
    })

    let allAuthors = authors.map(function (author, index) {
      return <Author text={author} />
    })

//line 18-20 text is just a variable we made up
//it is used on line 7 in comment.js
    return (
      <div>
        <h1> Title is: {title} </h1>
        {allAuthors}
        <p> {body} </p>
        {allComments}
         
      </div>
        
    )
  }
}

export default Post
