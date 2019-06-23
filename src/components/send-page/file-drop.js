import React from 'react';
import Dropzone from 'react-dropzone';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

import './file-drop.css';

import { Button, NakedButton } from '../ui-elements';
import FileIcon from '../icon/file-icon';

const FileDrop = props => {

    var dropRef = React.createRef();

    let filesList = props.files.map((file, index) => (
        <li key={file.preview}>
            <FileIcon extention={file.name.split('.').pop()} className="file-icon" />
            <span className="file-name">{file.name}</span>
            <NakedButton
                className="file-close"
                onClick={() => props.deleteFile(file.preview)}>×</NakedButton>
        </li>
    ));

    return (
        <Dropzone
            ref={dropRef}
            className="file-drop scroll"
            activeClassName="file-drop-active"
            disableClick
            onDrop={(acceptedFiles) => props.addFile(acceptedFiles)}>

            <CSSTransition unmountOnExit mountOnEnter
                in={props.files.length !== 0}
                classNames="file-drop-list"
                timeout={300}>
                <ul className="file-drop-list">
                    {filesList}
                    <li id="file-add-button-list" onClick={() => { dropRef.current.open() }}>+</li>
                </ul>
            </CSSTransition>

            <CSSTransition unmountOnExit mountOnEnter
                in={props.files.length === 0}
                classNames="file-drop-text"
                timeout={300}>
                <span className="file-drop-text">
                    فایل را در اینجا رها کنید یا
                    <Button type="filled" circle="true" className="file-add-button-circle" onClick={() => { dropRef.current.open() }}>
                        +
                    </Button>
                </span>
            </CSSTransition>

        </Dropzone>
    );
};

const mapStateToProps = state => (
    {
        files: state.files
    }
);

const mapDispatchToProps = dispatch => (
    {
        addFile: (acceptedFiles) => dispatch({ type: "ADD_FILE", files: acceptedFiles }),
        deleteFile: (fileKey) => dispatch({ type: "DEL_FILE", key: fileKey })
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(FileDrop);