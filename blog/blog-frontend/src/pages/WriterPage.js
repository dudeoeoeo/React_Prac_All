import React from 'react';
import Responsive from '../components/common/Responsive';
import EditorContainer from '../comtainers/write/EditorContainer';
import TagBoxContainer from '../comtainers/write/TagBoxContainer';
import WriteActionButtonsContainer from '../comtainers/write/WriteActionButtonsContainer';

const WriterPage = () => {
    return (
        <Responsive>
            <EditorContainer />
            <TagBoxContainer />
            <WriteActionButtonsContainer />
        </Responsive>
    );
};

export default WriterPage;