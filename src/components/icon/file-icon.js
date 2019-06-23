import React from 'react';

import "./file-icon.css";

import data from "./file-icon.json";

function getKey(value) {
    return Object.keys(data).find(key => data[key].find(val => val === value) !== undefined) || "flaticon-text-corrupt";
}


const FileIcon = props => {
    
    return (
        <i className={[getKey(props.extention), props.className].join(' ')}/>
    );
};

export default FileIcon;