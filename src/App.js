import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar.js/Sidebar';

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* App Body */}
      <div className="app__body">
        <Sidebar />
      </div>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widgets */}
    </div>
  );
}

export default App;
