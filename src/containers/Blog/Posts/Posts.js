import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { BlogStyle } from '../BlogStyle';
import axios from '../../../axios';
import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
      posts: []

    }

    /*eslint-disable*/
  componentDidMount() {
    axios.get('/posts')
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map(post => ({
          ...post,
          author: 'Ernie'
        }));
        this.setState({ posts: updatedPosts });
        // console.log(response);
      })
      .catch((error) => {
        console.log(error);
        // this.setState({ error: true });
      });
  }
   /*eslint-disable*/

   postSelectedHandler = (id) => {
    // this.props.history.push(pathname: '/posts/' + id);
    this.props.history.push('/posts/' + id);
  }
    render() {
      let posts = <p>Something went wrong or disconnect to the internet</p>;
      if (!this.state.error) {
        posts = this.state.posts.map(post => (
        (
        <Post
            key={post.id}
            title={post.title}
            author={post.author}
            clicked={() => this.postSelectedHandler(post.id)}
          />
        )
        ));
      }
      return (
        <div>
         <BlogStyle>
          {posts}
        </BlogStyle>
          <Route
            path={this.props.match.url + '/:id'}
            exact
            component={FullPost}
          />

        </div>
      
      );
    }
}

export default Posts;
