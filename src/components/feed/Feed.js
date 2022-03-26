import React, { useState, useEffect } from 'react'
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
// styles
import './Feed.css';
// icons
import CreateIcon from '@mui/icons-material/Create'
import ImageIcon from '@mui/icons-material/Image'
import SubscriptionsIcon from '@mui/icons-material/Subscriptions'
import EventNoteIcon from '@mui/icons-material/EventNote'
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
// components
import InputOptions from '../inputOptions/InputOptions'
import Posts from '../post/Post';
// firebase
import { db, timestamp } from '../../firebasse/config';


function Feed() {
    const [posts, setPosts] = useState([]);
    const [newPost, setNewPost] = useState('');

    useEffect(() => {
        db.collection("posts").orderBy('created_at', 'desc').onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => (
                {
                    id: doc.id, data: 
                    doc.data() 
                }
            )))
        ))

    },[])

    const handleSubmit = (e) => {
        e.preventDefault()
        if(newPost === null || newPost === ''){
            return 
        }

        db.collection('posts').add({
            name: 'Sthembiso Mathebula',
            description: 'Software Developer',
            message: newPost,
            photoURL: '',
            created_at: timestamp.fromDate(new Date()),
        })

        setNewPost('')
    }

    return (
        <div className='feed'>
            <div className="feed__imputContainer">
                <div className="feed__input">
                    <CreateIcon />
                    <form action="">
                        <input type="text" value={newPost} onChange={(e) => setNewPost(e.target.value)} />
                        <button type="submit" onClick={handleSubmit}>Send</button>
                    </form>
                </div>
                <div className="feed__options">
                    {/* input options */}
                    <InputOptions title="Photo" Icon={ImageIcon} color="#70b5f9"/>
                    <InputOptions title="Video" Icon={SubscriptionsIcon} color="#e7a33e"/>
                    <InputOptions title="Event" Icon={EventNoteIcon} color="#c0cdcd"/>
                    <InputOptions title="Write article" Icon={CalendarViewDayIcon} color="#7fc15e"/>
                </div>
            </div>

            {  posts && posts.map(p => {
                return <Posts key={p.id}
                    name={p.data.name} 
                    message={p.data.message} 
                    description={p.data.description}
                    date={ formatDistanceToNow( p.data.created_at.toDate(), { addSuffix: true } )}
                />
                
            })}

        </div>
    )
}

export default Feed