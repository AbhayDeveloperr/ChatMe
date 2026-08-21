import React from 'react'
import SearchBar from './SearchBar'
import ChatList from './ChatList'

const Sidebar = ({setSelectedChat , conversations , fetchConversations}) => {
  

  return (
    <div className='w-[350px] h-screen bg-white border-r border-gray-300'>
      <SearchBar setSelectedChat = {setSelectedChat} fetchConversations = {fetchConversations} />
      <ChatList  setSelectedChat = {setSelectedChat} conversations = {conversations}/>
    </div>
  )
}

export default Sidebar
