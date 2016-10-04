
import React, { Component } from 'react';
import axios from 'axios';
export default class App extends Component {
  constructor() {
    super();
    this.state={
      posts: "all posts"
    };
  }
  componentWillMount() {
    console.log('hello will mount');
    axios.get('http://localhost:3000/posts', function(res){
      this.setState({
        posts: res.posts
      })
    })
    // 再此处发 Ajax 请求，
    // 请求服务器端的 json 数据
  }
  render() {

    return(
      <div>
        { this.state.posts }
      </div>
    );
  }
}
