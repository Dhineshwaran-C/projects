import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react'
import './Chatcontainer.css'
import ChatMessage from './ChatMessage';
function Chatcontainer() {
  return (
    <div className='chat-container'>

        <div className='chat-container-header'>
          <div className='chat-user-info'>
            <div className='chat-user-img'>
              <img src='user.png' alt='' />
            </div>
            <p>Shyam</p>
          </div>
          <div className='chat-container-header-btn'>
            <MoreVertIcon />
          </div>
        </div>

        <div className='chat-display-container'>
          <ChatMessage />
        </div>

    </div>
  )
}

export default Chatcontainer