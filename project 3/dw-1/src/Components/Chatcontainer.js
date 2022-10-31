import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import React, {useState} from 'react'
import './Chatcontainer.css'
import ChatMessage from './ChatMessage';
import Picker from'emoji-picker-react';
function Chatcontainer() {

  const [message,setMessage] = useState('');
  const[openEmojiBox,setOpenEmojiBox] = useState(false);


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
          <ChatMessage message='Hello' time='2.54 PM' />
          <ChatMessage message='Hi' time='2.55 PM' />
          <ChatMessage message='Hi' time='2.55 PM' />
          <ChatMessage message='Hi' time='2.55 PM' />
          <ChatMessage message='Hi' time='2.55 PM' />
          <ChatMessage message='Hi' time='2.55 PM' />
          <ChatMessage message='Hi' time='2.55 PM' />
          <ChatMessage message='Hi' time='2.55 PM' />
          <ChatMessage message='Hi' time='2.55 PM' />
          <ChatMessage message='Hi' time='2.55 PM' />
          <ChatMessage message='Hi' time='2.55 PM' />
          <ChatMessage message='Hi' time='2.55 PM' />
          <ChatMessage message='Hi' time='2.55 PM' />
        </div>

        <div className='chat-input'>
        {
            openEmojiBox && <div className='picker'><Picker onEmojiClick={
              (event,emojiObject) => setMessage(message + emojiObject.emoji)
            }/></div>
          }          
          <div className='chat-input-btn'>
            <InsertEmoticonIcon onClick={() => setOpenEmojiBox(!openEmojiBox)} />
            <AttachFileIcon />
          </div>
          <form>
            <input type='text' placeholder='Type a Message...' value={message} 
            onChange={(e) => {
              setMessage(e.target.value);
              }} />
          </form>
          <div className='chat-input-send-btn'>
            <SendIcon/>
          </div>
        </div>

    </div>
  )
}

export default Chatcontainer