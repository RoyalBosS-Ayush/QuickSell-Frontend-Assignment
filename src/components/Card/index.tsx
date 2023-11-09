import React from 'react';
import './card.css'
import UserIcon from '../UserIcon';
import { LuMoreHorizontal } from 'react-icons/lu';
import { BiRadioCircle } from 'react-icons/bi';

function Card() {
  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>CAM-11</div>
        <UserIcon name='Ayush Munot' />
      </div>
      <div className='middle-container'>
        <BiRadioCircle color='#e2e2e2' size={24} />
        <div className='title'>Conduct Security Vulnerability Assessment</div>
      </div>
      <div className='bottom-container'>
        <div className='more-icon-container'>
          <LuMoreHorizontal color="#797d84" />
        </div>
        <div className='tag-container'>
          <div className='tag-icon'></div>
          <div className='tag-text'>Feature Request</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
