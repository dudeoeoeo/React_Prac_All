import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Route } from 'react-router';
import LoginPage from './pages/LoginPage';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import WriterPage from './pages/WriterPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>REACTERS</title>
      </Helmet>
      <Route component={PostListPage} path={['/@:username', "/"]} exact />
      <Route component={LoginPage} path='/login' exact />
      <Route component={RegisterPage} path='/register' exact />
      <Route component={WriterPage} path='/write' exact />
      <Route component={PostListPage} path='/@:username/:postId' exact />
    </>
  );
};

export default App;