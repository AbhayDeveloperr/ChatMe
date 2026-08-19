import React from 'react'

const MessageInput = () => {
  return (
    <div className="p-6 bg-white border-t border-gray-200">
      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-4 py-2 bg-gray-100 rounded-lg outline-none"
        />

        <button className="px-5 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-700">
          Send
        </button>

      </div>
    </div>
  )
}

export default MessageInput