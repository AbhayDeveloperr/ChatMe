import React from 'react'

const ChatList = () => {

  const chats = [
    {
      username: "Guru",
      lastMessage: "Hey, how are you?"
    },
    {
      username: "Ashish",
      lastMessage: "What's up?"
    },
    {
      username: "Shreya",
      lastMessage: "Hello!"
    }
  ]

  return (
    <div>
      {chats.map((chat,index)=> (
        <div key={index} className="px-4 py-3 border-b border-gray-200">
          <h3 className="font-semibold">{chat.username}</h3>
          <p className="text-sm text-gray-500">{chat.lastMessage}</p>
        </div>
      ))}
    </div>
  )
}

export default ChatList