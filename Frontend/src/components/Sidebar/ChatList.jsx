import React from 'react'

const ChatList = ({setSelectedChat, conversations}) => {


  return (
  <div>
    {conversations.map((chat) => (
      <div key={chat._id} onClick={() => setSelectedChat(chat)} className="px-4 py-3 border-b border-gray-200 cursor-pointer hover:bg-gray-100">
        <h3 className="font-semibold">{chat.username}</h3>
        <p className="text-sm text-gray-500">
          Start chatting...
        </p>
      </div>
    ))}
  </div>
  )
}

export default ChatList