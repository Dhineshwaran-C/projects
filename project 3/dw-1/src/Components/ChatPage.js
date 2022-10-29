import React from 'react'
import Chatcontainer from './Chatcontainer'
import Home from './Home'

function ChatPage() {
  return (
    <div className='chatpage'>
      <div className='chatpage-container'>
      <Home />
      <Chatcontainer />
      </div>
    </div>
  )
}

export default ChatPage