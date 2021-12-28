import React from 'react';
import Button from '../components/common/Button';
import PostViewer from '../components/post/PostViewer';
import HeaderContainer from '../comtainers/common/HeaderContainer';

const PostPage = () => {
    return (
        <>
            <HeaderContainer />
            <PostViewer />
        </>
    );
};

export default PostPage;