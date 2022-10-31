import React from 'react'
import './ChatMessage.css'
function ChatMessage({message,time}) {
  return (
    <div className='chat-message'>
        <div className='chat-message-text'>
            {message}
        </div>
        <div className='chat-message-date'>
            {time}
        </div>
    </div>
  )
}

export default ChatMessage