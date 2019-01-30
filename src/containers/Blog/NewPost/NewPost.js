import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import NPostStyle from './NPostStyle';

class NewPost extends Component {
    state = {
      title: '',
      content: '',
      author: 'Ernie',
      submitted: false
    }

    componentDidMount = () => {
      // If unauth => this.props.history.replace('/posts');
      console.log(this.props);
    }

    postDataHandler = () => {
      const data = {
        title: this.state.title,
        body: this.state.content,
        author: this.state.author
      };
      axios.post('/posts', data)
        .then((response) => {
          console.log(response);
          this.props.history.replace('/posts');
          // this.setState({ submitted: true });
        });
    }


    render() {
      /*eslint-disable*/
      let post = <p>Please select a Post!</p>;
      let redirect = null;
      if (this.state.submitted) {
       redirect =  <Redirect to='/posts/' />;
      }
      /*eslint-disable*/
      post = (
        <NPostStyle>
          {redirect}
          <h1>Add a Post</h1>
          <label>Title</label>
          <input
            type='text'
            value={this.state.title}
            onChange={event => this.setState({ title: event.target.value })}
          />
          <label>Content</label>
          <textarea
            rows='4'
            value={this.state.content}
            onChange={event => this.setState({ content: event.target.value })}
          />
          <label>Author</label>
          <select
            value={this.state.author}
            onChange={event => this.setState({ author: event.target.value })}
          >
            <option value='Ernie'>Max</option>
            <option value='Buyco'>Manu</option>
          </select>
          <button
            onClick={this.postDataHandler}
          >Add Post</button>
        </NPostStyle>
      );
      return post;
    }
}

export default NewPost;
