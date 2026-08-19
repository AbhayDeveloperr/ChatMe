import React from 'react'
import SearchBar from './SearchBar'
import ChatList from './ChatList'

const Sidebar = () => {
  return (
    <div className='w-[350px] h-screen bg-white border-r border-gray-300'>
      <SearchBar />
      <ChatList />
    </div>
  )
}

export default Sidebar
