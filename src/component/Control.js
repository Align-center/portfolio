import React from 'react';

function Control({ isActive, length, page}) {

    var className = 'control';
    var style = {
        '--index': length.length
    };

    if (isActive) {
        className += ' is-active';
    }

    return (
        <li className={className} style={style}>
            <span className="hidden">Page {page}</span>
        </li>
    );
}

export default Control;