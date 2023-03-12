
import { useState } from 'react';
import './App.css';
import Login from './Login';
import { LoginContext } from './LoginContext';
import Profile from './Profile';

function App() {
  const [showProfile, setShowProfile]= useState(false)
  const [username, setUsername] = useState("")

  return (
    <div className="App">
      <LoginContext.Provider value={{setUsername, setShowProfile, showProfile, username}}>
        {showProfile ? <Profile/> : <Login/>}
      </LoginContext.Provider>
    </div>
  );
}

export default App;
