import React from 'react'
import SearchBar from './SearchBar'
import ChatList from './ChatList'

const Sidebar = ({setSelectedChat}) => {
  return (
    <div className='w-[350px] h-screen bg-white border-r border-gray-300'>
      <SearchBar />
      <ChatList  setSelectedChat = {setSelectedChat}/>
    </div>
  )
}

export default Sidebar
