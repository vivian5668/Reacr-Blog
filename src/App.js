import React, { Component } from 'react';
import logo from './logo.svg';
import Comment from './Comment';
import Author from './Author';
import './App.css';

class Post extends Component {
  constructor (props) {
    super(props)
    this.state = {
      body: this.props.body,
      value: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  changeBody(e) {
    this.setState({
      body: this.state.value 
    })
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }

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
      return <Author data={author} />
    })

//line 18-20 text is just a variable we made up
//it is used on line 7 in comment.js
    return (
      <div>
        <h1> Title is: {title} </h1>
        {allAuthors}
        <p> {this.state.body} </p>
        {allComments}
        <button onClick={ (e) => this.changeBody (e) }> Change body Here! </button>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
        
    )
  }
}

export default Post
