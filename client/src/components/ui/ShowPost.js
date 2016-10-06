import React, { Component } from 'react';
import axios from 'axios';

class ShowPost extends React.Component {
  constructor(){
    super();
    this.state={
      data:{}
    }
  }
  componentDidMount(){
    let id = this.props.params.id;
    let address = `http://localhost:3000/post/${id}`;
    axios.get(address).then( res => {
        this.setState({
          data:res.data.post
        });
        console.log(this.state.data)
    })
  }

  render() {
    return(
      <div>
      { this.state.data.title}<br />
      { this.state.data.category}<br />
      { this.state.data.content}
      </div>
    )
  }
}
export default ShowPost;
