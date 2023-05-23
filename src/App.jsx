import NavBar from './NavBar';
import Login from './Login';
import { Profile } from './Profile';
import { useState } from 'react';

function App(){
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  return(
    <div className='App'>
      
      <NavBar/>
      
    </div>
  )
}
export default App;