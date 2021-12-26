import React from 'react';
import Responsive from '../components/common/Responsive';
import WriteActionButtons from '../components/write/WriteActionButtons';
import EditorContainer from '../comtainers/write/EditorContainer';
import TagBoxContainer from '../comtainers/write/TagBoxContainer';

const WriterPage = () => {
    return (
        <Responsive>
            <EditorContainer />
            <TagBoxContainer />
            <WriteActionButtons />
        </Responsive>
    );
};

export default WriterPage;