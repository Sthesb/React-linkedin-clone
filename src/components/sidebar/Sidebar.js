import { Avatar } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

// styles
import './Sidebar.css'

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItems = (topic) => {
    return (
    <div className="sidebar__recentItems">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
    )
  }

  return (
    <div className='sidebar'>
        {/* profile */}
        <div className="sidebar__top">
          <img src="https://images.unsplash.com/photo-1635776062043-223faf322554?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80" alt=""  />
          <Avatar className='sidebar__avatar' src={user.photoURL} />
          <h2>{user.displayName}</h2>
          <h4>Description</h4>
        </div>

        {/* stats */}
        <div className="sidebar__stats">
          <div className="sidebar__stat">
            <p>Profile Views</p>
            <p className="sidebar__statNumber">94</p>
          </div>
          <div className="sidebar__stat">
            <p>Views on posts</p>
            <p className="sidebar__statNumber">1,533</p>
          </div>

        </div>
        <div className="sidebar__bottom">
          <p>Recent</p>
          { recentItems('Programing') }
          { recentItems('ReactJS') }
          { recentItems('Developer') }
        </div>


    </div>
  )
}

export default Sidebar