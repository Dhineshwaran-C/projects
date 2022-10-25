import React from 'react'
import TollIcon from '@mui/icons-material/Toll';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import "./Sidebar.css"
function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebar-header'>
            <div className='sidebar-header-img'>
                <img src='./user.png' alt='' />
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