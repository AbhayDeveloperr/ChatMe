import React, { useState } from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import MessageInput from './MessageInput'

const ChatWindow = ({selectedChat}) => {

    const [messages, setMessages] = useState([])

  return (
    <div className='flex-1 flex flex-col'>
      <ChatHeader selectedChat={selectedChat}/>
      <Messages messages = {messages} />
      <MessageInput setMessages ={setMessages} />
    </div>
  )
}

export default ChatWindow
