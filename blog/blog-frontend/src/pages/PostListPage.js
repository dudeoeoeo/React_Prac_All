import React from 'react';
import PostList from '../components/posts/PostList';
import HeaderContainer from '../comtainers/common/HeaderContainer';

const PostListPage = () => {
    return (
        <>
            <HeaderContainer />
            <PostList />
        </>
    );
};

export default PostListPage;