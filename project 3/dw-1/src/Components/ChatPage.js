import React from 'react'
import Chatcontainer from './Chatcontainer'
import Sidebar from './Sidebar'
import './ChatPage.css'
function ChatPage({currentUser,signOut}) {
  return (
    <div className='container'>
    <div className='chatpage'>
      <div className='chatpage-container'>
        <Sidebar currentUser={currentUser} signOut= {signOut}/>
      <Chatcontainer currentUser={currentUser} />
      </div>
    </div>
    </div>
  )
}

export default ChatPage