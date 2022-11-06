import './App.css';
import {useState} from 'react'
import{
  BrowserRouter as Router, Routes,Route
} from 'react-router-dom'
import Home from './Components/Home';
import ChatPage from './Components/ChatPage';
import Login from './Components/Login';
import { auth } from './firebase';
function App() {

  const [user,setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const signOut = () => {
    auth
    .signOut()
    .then(() =>{
      setUser(null);
      localStorage.removeItem('user');
    })
    .catch((err) => alert(err.message));
  };
  return (
    <Router>
    <div className="App">
      {
        user ? (      <Routes>
          <Route path='/chatpage' element={<ChatPage currentUser={user} signOut= {signOut}/>} />
          <Route path='/' element={<Home currentUser={user} signOut= {signOut}/>} />
        </Routes>) : (<Login setUser={setUser}/>)
      }
    </div>
    </Router>
  );
}

export default App;
