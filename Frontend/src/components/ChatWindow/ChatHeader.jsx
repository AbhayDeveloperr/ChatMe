import React, { useState } from 'react'

const ChatHeader = ({selectedChat}) => {
  return (
    <div className="h-16 px-8 bg-white border-b border-gray-200 flex items-center">
      <h2 className="font-semibold text-xl text-gray-800">
        {selectedChat?.username}
      </h2>
    </div>
  )
}

export default ChatHeader