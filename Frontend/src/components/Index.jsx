import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar'
import ChatWindow from './ChatWindow/ChatWindow'

const Index = () => {

    const [selectedChat, setSelectedChat] = useState(null);

  return (
    <div className='flex h-screen'>
      <Sidebar  setSelectedChat = {setSelectedChat}/>
      <ChatWindow selectedChat = {selectedChat} />
    </div>
    
  )
}

export default Index
