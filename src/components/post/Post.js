import React, { forwardRef } from 'react'
// styles
import './Post.css'
// components
import InputOptions from '../inputOptions/InputOptions';
// icons
import { Avatar } from '@mui/material'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';


const Post = forwardRef (({ name, description, message, date, photoURL, email }, ref) => {
  console.log(photoURL)
  return (
    <div ref={ref} className='post'>
        <div className="post__header">
            <Avatar src={photoURL} className="post__avatar" >{name[0]}</Avatar>
            <div className="post__info">
              <h2>{name}</h2>
              <p>{email}</p>
              <p>{date}</p>
            </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
        </div>
        <div className="post__buttons">
          <InputOptions title = "Like"  Icon={ThumbUpIcon}  color = "gray" />
          <InputOptions title = "Comment"  Icon={CommentIcon}  color = "gray" />
          <InputOptions title = "Share"  Icon={ShareIcon}  color = "gray" />
          <InputOptions title = "Send"  Icon={SendIcon}  color = "gray" />
        </div>
    </div>
  )
})

export default Post