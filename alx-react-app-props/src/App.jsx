import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './WelcomeMessage.jsx'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import UserProfile from './components/UserProfile.jsx'
import React from 'react';
import UserContext from './components/UserContext';
import ProfilePage from './components/UserProfile';

const userData = {
  name: 'John Doe',
  age: 30,
  bio: 'Software developer from California.'
};

function App() {
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;

