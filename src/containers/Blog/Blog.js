import React, { Component } from 'react';
import axios from 'axios';
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import BlogStyle from './BlogStyle';

class Blog extends Component {
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <BlogStyle>
          <Post />
          <Post />
          <Post />
        </BlogStyle>
        <BlogStyle>
          <FullPost />
        </BlogStyle>
        <BlogStyle>
          <NewPost />
        </BlogStyle>
      </div>
    );
  }
}

export default Blog;
