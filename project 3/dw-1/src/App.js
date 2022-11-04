import './App.css';
import {useState} from 'react'
import{
  BrowserRouter as Router, Routes,Route
} from 'react-router-dom'
import Home from './Components/Home';
import ChatPage from './Components/ChatPage';
import Login from './Components/Login';
function App() {

  const [user,setUser] = useState();
  return (
    <Router>
    <div className="App">
      {
        user ? (      <Routes>
          <Route path='/chatpage' element={<ChatPage/>} />
          <Route path='/' element={<Home/>} />
        </Routes>) : (<Login />)
      }
    </div>
    </Router>
  );
}

export default App;
