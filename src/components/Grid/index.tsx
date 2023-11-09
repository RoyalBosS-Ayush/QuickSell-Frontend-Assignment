import React from 'react';
import './grid.css'
import Column from '../Column/Column';

function Grid() {

    return (
        <div className='grid'>
            <Column />
            <Column />
            <Column />
            <Column />
            <Column />
        </div>
    );
}

export default Grid;
