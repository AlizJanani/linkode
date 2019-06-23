import React from 'react';

import './ui-elements.css';

const Button = props => {

    var classesArray = ['button'];

    switch (props.type) {
        case 'ghost':
            classesArray.push('button-ghost');
            break;
        case 'filled':
        default:
            classesArray.push('button-filled');
    };

    if (props.circle) {
        classesArray.push('button-circle');
    }
    
    if (props.choose) {
        classesArray.push('button-choose');
    }

    classesArray.push(props.className);

    var classNames = classesArray.join(' ');

    return (
        <button {...props} className={classNames} >
            {props.children}
        </button>
    );
};

export { Button };

const NakedButton = props => {
    return (
        <button {...props} className={['naked-button', props.className].join(' ')}>
            {props.children}
        </button>
    );
};

export { NakedButton }

const Input = props => (
    <div className={['input-wrapper', props.className].join(' ')}>
        <input {...props} className="input" />
        <label className="material-icons input-label">{props.icon}</label>
    </div>
);

export { Input }

const ContentPage = props => {

    var classNames = ['content-page'];

    if (props.center) {
        classNames.push('content-page-center');
    }

    classNames.push(props.className);

    return (
        <div {...props} className={classNames.join(' ')}>
            {props.children}
        </div>
    );
};

export { ContentPage };

const Container = props => (
    <div {...props} className={["container", props.className].join()} >
        {props.children}
    </div>
);

export { Container };