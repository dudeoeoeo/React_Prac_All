import React from 'react';
import { Route } from '../node_modules/react-router/index';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import WriterPage from './pages/WriterPage';

const App = () => {
  return (
    <>
      <Route component={PostListPage} path={['/@:username', "/"]} exact />
      <Route component={LoginPage} path='/login' exact />
      <Route component={RegisterPage} path='/register' exact />
      <Route component={WriterPage} path='/write' exact />
      <Route component={PostListPage} path='/@:username/:postId' exact />
    </>
  );
};

export default App;