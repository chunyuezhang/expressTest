import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './components/ui/App';
import PostList from './components/ui/PostList';
import NewPost from './components/ui/NewPost';
import ShowPost from './components/ui/ShowPost'


export const renderRoutes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={PostList} />
      <Route path='/write' component={NewPost} />
      <Route path='/post/:id' component={ShowPost} />

    </Route>
  </Router>
);
