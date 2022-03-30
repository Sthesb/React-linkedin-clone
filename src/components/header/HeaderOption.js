import { Avatar } from '@mui/material';
import React from 'react'
// styles
import './HeaderOption.css';
// import { useSelector } from 'react-redux'
// import { selectUser } from '../../features/userSlice'

function HeaderOption({ title, Icon, avatar, onClick }) {
  // console.log(avatar)
  return (
    <div className='headerOption' onClick={onClick}>
        {Icon && <Icon className="headerOption__icon"/>}
        { avatar && <Avatar className='headerOption__icon' src={avatar} />}
        <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption