import React from 'react';
import HeaderContainer from '../comtainers/common/HeaderContainer';
import PaginationContainer from '../comtainers/posts/PaginationContainer';
import PostListContainer from '../comtainers/posts/PostListContainer';

const PostListPage = () => {
    return (
        <>
            <HeaderContainer />
            <PostListContainer />
            <PaginationContainer />
        </>
    );
};

export default PostListPage;