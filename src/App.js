import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// style
import './App.css';
// components
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar'
import Feed from './components/feed/Feed'
import Widget from './components/widgets/Widget'
import Login from './components/login/Login';

// slicer
import { login, logout, selectUser } from './features/userSlice';

import { auth } from './firebasse/config';


function App() {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()


  useEffect (()=> {
    auth.onAuthStateChanged(userAuth => {
      if(userAuth){
        dispatch(login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoURL: userAuth.photoURL
      }))
      }else{
        dispatch(logout())
      }
    })
  },[])



  return (
    <div className="app">
      {/* Header */}
      <Header />
      {/* App Body */}

      { !user ? (<Login /> ): (
        <div className="app__body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widget />
        </div>
        )
      }
        
        
    </div>
  );
}

export default App;
