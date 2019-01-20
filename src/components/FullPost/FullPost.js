import React, { Component } from 'react';
import { EditStyle, FPostStyle } from './FPostStyle';

class FullPost extends Component {
  render() {
    /*eslint-disable*/
    let post = <p>Please select a Post!</p>;
     /*eslint-disable*/
    return (
      <FPostStyle>
        <h1>Title</h1>
        <p>Content</p>
        <EditStyle>
          <button>Delete</button>
        </EditStyle>
      </FPostStyle>
    );
    return post;
  }
}

export default FullPost;
