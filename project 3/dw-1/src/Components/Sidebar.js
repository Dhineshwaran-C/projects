import React from 'react'
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import "./Sidebar.css"
import UserProfile from './UserProfile';
function Sidebar({currentUser,signOut}) {
  return (
    <div className='sidebar'>
        <div className='heading'><p>DIRECT MESSAGE</p></div>
        <div className='sidebar-search'>
          <div className='sidebar-search-input'>
            <SearchIcon />
            <input type='text' name='search' placeholder='Search...' />
          </div>
        </div>
        <div className='sidebar-chat-list'>
          <UserProfile name='Dhinesh' photoURL='./user.png'/>
          <UserProfile name='Shyam' photoURL='./user.png'/>
          <UserProfile name='Bhuvanesh' photoURL='./user.png'/>
        </div>
        <div className='sidebar-header'>
            <div className='sidebar-header-img' onClick={signOut}>
                <img src={currentUser?.photoURL} alt='' />
            </div>
            <div className='sidebar-header-name'>
              <p className='user-name'>{currentUser?.fullname}</p>
            </div>
            <div className='sidebar-header-btn'>
                <TollIcon />
                <InsertCommentIcon />
                <MoreVertIcon />
            </div>
        </div>
    </div>
  )
}

export default Sidebar