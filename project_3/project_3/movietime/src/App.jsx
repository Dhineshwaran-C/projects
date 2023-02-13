import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Login from './pages/Login';
import MovieTime from './pages/MovieTime';
import Signup from './pages/Signup';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path='/login' element={<Login />}></Route>
      <Route exact path='/Signup' element={<Signup />}></Route>
      <Route exact path='/' element={<MovieTime />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
