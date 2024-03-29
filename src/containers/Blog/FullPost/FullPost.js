import React, { Component } from 'react';
import axios from 'axios';
import { EditStyle, FPostStyle, BtnDelete } from './FPostStyle';

class FullPost extends Component {
  state = {
    loadedPost: null
  }

  componentDidMount() {
    console.log(this.props);
    this.loadData();
  }

  componentDidUpdate() {
    this.loadData();
  }

  loadData = () => {
    if (this.props.match.params.id) {
      if (!this.state.loadedPost ||
         (this.state.loadedPost && this.state.loadedPost.id !== +this.props.match.params.id)) {
        axios.get(`/posts/${this.props.match.params.id}`)
          .then((response) => {
          // console.log(response);
            this.setState({ loadedPost: response.data });
          });
      }
    }
  }

  deletePostHandler = () => {
    axios.delete(`/posts/${this.props.match.params.id}`)
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    /*eslint-disable*/
    let post = <p>Please select a Post!</p>;
    if(this.props.match.params.id){
      post: <p style={{textAlign: 'center'}}>Loading...!</p>
    }
    if (this.state.loadedPost){
      post = (
        <FPostStyle>
          <h1>{this.state.loadedPost.title}</h1>
          <p>{this.state.loadedPost.body}</p>
          <EditStyle>
            <BtnDelete
            onClick={this.deletePostHandler}
            >Delete</BtnDelete>
          </EditStyle>
        </FPostStyle>
      );
    }
     /*eslint-disable*/
     return post;
  }
}

export default FullPost;
