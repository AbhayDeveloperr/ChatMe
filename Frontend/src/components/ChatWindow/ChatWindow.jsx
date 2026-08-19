import React from 'react'
import ChatHeader from './ChatHeader'
import Messages from './Messages'
import MessageInput from './MessageInput'

const ChatWindow = () => {
  return (
    <div className='flex-1 flex flex-col'>
      <ChatHeader/>
      <Messages />
      <MessageInput />
    </div>
  )
}

export default ChatWindow
