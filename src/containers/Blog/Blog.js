import React, { Component } from 'react';
// import axios from 'axios';
import { Route, NavLink, Switch } from 'react-router-dom';
import { NavigationStyle } from './BlogStyle';
import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => import('./NewPost/NewPost'));

class Blog extends Component {
  state ={
    auth: true,
  }

  render() {
    return (
      <div>
        <header>
          <NavigationStyle>
            <ul>
              <li>
                <NavLink
                  to='/'
                  exact
                  activeClassName='ernie'
                  activeStyle={{
                    color: 'red',
                    textDecoration: 'underline'
                  }}
                >
                Posts
                </NavLink>
              </li>
              <li>
                <NavLink to={{
                  pathname: '/new-post',
                  hash: 'submit',
                  search: '?quick-submit=true'
                }}
                >
                New Post
                </NavLink>
              </li>
            </ul>
          </NavigationStyle>
        </header>
        {/* <Route
          path='/'
          exact
          render={() => <h1>Home</h1>}
        />
        <Route
          path='/new-post'
          render={() => <Post />}
        /> */}
        <Switch>
          {
            this.state.auth ? (
              <Route
                path='/new-post'
                component={AsyncNewPost}
              />
            ) : null
          }
          <Route
            path='/posts'
            component={Posts}
          />
          <Route
            render={() => <h1>Not found</h1>}
          />
          {/* <Redirect
            from='/'
            to='/posts/'
          /> */}
          {/* <Route
            path='/'
            component={Posts}
          /> */}
          {/* <Route
            path='/:id'
            exact
            component={FullPost}
          /> */}
        </Switch>
      </div>
    );
  }
}

export default Blog;
