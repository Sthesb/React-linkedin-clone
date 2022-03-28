import React, {useState } from 'react'

// style
import './Login.css'
// firebase
import { auth } from '../../firebasse/config'
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

function Login() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [profilePic, setProfilePic] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch()


    const register_user = (e) => {
        e.preventDefault()
        setError('')
        if(!name) {
            setError('Full name is required');
            return 
        }

        auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
            userAuth.user.updateProfile({
                displayName: name,
                photoURL: profilePic
            }).then (() => {
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                    displayName: name,
                    photoURL: profilePic
                }))
            }).catch((err) => setError(err.message))
        })
    }

    const login_user = (e) => {
        e.preventDefault()
        
    }
    return (
        <div className='login'>
            <img src="https://www.pngkey.com/png/full/80-802453_2018-supply-chain-solutions-linkedin-view-my-linkedin.png" alt="logo"  />
            
            <form >
                {error && <div className="login__error">{error}</div>}

                <input type="text" placeholder="Full name (required if registering)" value={name} onChange={(e) => setName(e.target.value)}  />
                <input type="text" placeholder="Profile Pic (optional)" value={profilePic} onChange={(e) => setProfilePic(e.target.value)} />
                <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button type="submit" onClick={login_user} >Sign in</button>
                <p>Not a member? <span className='login__register' onClick={register_user}>Register Now</span></p>
            </form>
        </div>
    )
}

export default Login