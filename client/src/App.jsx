import NavBar from './NavBar';
import Login from './Login';
import { Profile } from './Profile';
import { useState } from 'react';
import React from 'react'
import Main from './pages/Main/Main';


function App(){
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return(
    <div className='App'>
      
      <NavBar/>
      <Main/>
    </div>
  )
}
export default App;

