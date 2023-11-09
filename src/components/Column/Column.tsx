import React from 'react';
import Card from '../Card';
import "./column.css"
import { BiRadioCircle } from 'react-icons/bi';
import { GrAdd } from 'react-icons/gr';
import { LuMoreHorizontal } from 'react-icons/lu';

function Column() {

    return (
        <div className='column'>
            <div className='column-header'>
                <div className='column-header-left-container'>
                    <BiRadioCircle color='#e2e2e2' size={24} />
                    <div className='column-title'>
                        Todo
                        <span className='count'>3</span>
                    </div>
                </div>
                <div className='column-header-right-container'>
                    <GrAdd color="#797d84" size={12} />
                    <LuMoreHorizontal color="#797d84" size={14} />
                </div>
            </div>
            <Card />
            <Card />
        </div>
    );
}

export default Column;
