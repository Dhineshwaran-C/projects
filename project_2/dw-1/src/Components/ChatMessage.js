import React from 'react'
import { auth } from '../firebase'
import './ChatMessage.css'
function ChatMessage({message, time , sender}) {
  return (
    <div className='chat-message' style={{alignSelf: sender === auth?.currentUser?.email ? 'flex-end' : 'flex-start'}}>
        <div className='chat-message-text'>
            {message}
        </div>
        <div className='chat-message-date'>
            {new Date(time.toDate()).toLocaleString()}
        </div>
    </div>
  )
}

export default ChatMessage