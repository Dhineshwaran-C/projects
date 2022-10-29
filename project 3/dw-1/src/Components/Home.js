import React from 'react'
import Sidebar from './Sidebar'
import './Home.css'
function Home() {
  return (
    <div className='container'>
    <div className='home'>
        <div className='home-container'>
            <Sidebar/>
            <div className='home-bg'>
              <img src='./Apple-logo.png' alt='' />
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home