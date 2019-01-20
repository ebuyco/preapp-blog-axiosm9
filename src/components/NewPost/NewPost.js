import React, { Component } from 'react';
import NPostStyle from './NPostStyle';

class NewPost extends Component {
    state = {
      title: '',
      content: '',
      author: 'Ernie'
    }

    render() {
      let post = <p>Please select a Post!</p>;
      post = (
        <NPostStyle>
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
          <button>Add Post</button>
        </NPostStyle>
      );
      return post;
    }
}

export default NewPost;
