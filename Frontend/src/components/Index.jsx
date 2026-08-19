import React from 'react'
import Sidebar from './Sidebar/Sidebar'
import ChatWindow from './ChatWindow/ChatWindow'

const Index = () => {
  return (
    <div className='flex h-screen'>
      <Sidebar/>
      <ChatWindow />
    </div>
    
  )
}

export default Index
