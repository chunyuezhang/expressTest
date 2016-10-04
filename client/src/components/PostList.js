import React, { Component } from 'react';
import axios from 'axios';

export default class PostList extends Component {
  constructor() {
    super();
    this.state={
      posts: []
    };
  }
  componentWillMount() {
    //  Promise
    axios.get('http://localhost:3000/posts').then(res => {
      console.log('axios');
      this.setState({
        posts: res.data.posts
      });
      console.log(this.state.posts);
    });
  }
  render() {
    let posts = this.state.posts.map( (item,i) => <p key={i}>{item.title}</p>)
    return(
      <div>
        <h1> PostList</h1>
        { posts }
      </div>
    );
  }
}
