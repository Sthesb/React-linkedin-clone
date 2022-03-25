import React from 'react'
// styles
import './Feed.css';
// icons
import CreateIcon from '@mui/icons-material/Create'
function Feed() {
  return (
    <div className='feed'>
        <div className="feed__imputContainer">
            <div className="feed__input">
                <CreateIcon />
                <form action="">
                    <input type="text" />
                    <button type="submit">Send</button>
                </form>
            </div>
            <div className="feed__options">
                {/* input options */}
            </div>
        </div>
    </div>
  )
}

export default Feed