import React from 'react';
import { Author, PostStyle } from './PostStyle';

const Post = props => (
  <PostStyle
    onClick={props.clicked}
  >
    <h1>{props.title}</h1>
    <Author>
      <Author>{props.author}</Author>
    </Author>
  </PostStyle>
);


export default Post;
