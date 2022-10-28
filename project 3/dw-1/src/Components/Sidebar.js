import React from 'react'
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';
import "./Sidebar.css"
import UserProfile from './UserProfile';
function Sidebar() {
  return (
    <div className='sidebar'>
        
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
          <UserProfile name='Dhinesh' photoURL='./user.png'/>
          <UserProfile name='Dhinesh' photoURL='./user.png'/>
          <UserProfile name='Dhinesh' photoURL='./user.png'/>
          <UserProfile name='Dhinesh' photoURL='./user.png'/>
          <UserProfile name='Dhinesh' photoURL='./user.png'/>
          <UserProfile name='Dhinesh' photoURL='./user.png'/>
          <UserProfile name='Dhinesh' photoURL='./user.png'/>
          <UserProfile name='Dhinesh' photoURL='./user.png'/>
          <UserProfile name='Dhinesh' photoURL='./user.png'/>
          <UserProfile name='Dhinesh' photoURL='./user.png'/>
          <UserProfile name='Dhinesh' photoURL='./user.png'/>
        </div>
        <div className='sidebar-header'>
            <div className='sidebar-header-img'>
                <img src='./user.png' alt='' />
            </div>
            <div className='sidebar-header-name'>
              <p className='user-name'>Name</p>
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