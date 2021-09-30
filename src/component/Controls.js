import React from 'react';
import Control from './Control';
import './Controls.css';

function Controls({ length, pageIndex }) {

    return (
        <ul className='controls'>

            {length.map((el, index) => {

                if (index <= pageIndex) 
                    return <Control key={el} isActive length={length} page={index + 1} />
                else 
                    return <Control key={el} length={length} page={index + 1} />
            })}
        </ul>
    );
}

export default Controls;