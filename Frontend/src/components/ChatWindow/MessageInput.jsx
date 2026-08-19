import React, { useState } from 'react'

const MessageInput = ({setMessages}) => {

   const [message, setMessage] = useState("")

   const handleSend = () => {

    if (message.trim() === "") {
        return
    }
    setMessages((previousMessages) => [
        ...previousMessages,
        {
            text: message,
            sender: "me"
        }
    ])
    setMessage("")
}

  return (
    <div className="p-6 bg-white border-t border-gray-200">
      <div className="flex gap-3">

        <input
          type="text"
          placeholder="Type a message..."
          value={message}
          onChange={(e)=> setMessage(e.target.value)}
          className="flex-1 px-4 py-2 bg-gray-100 rounded-lg outline-none"
        />

        <button className="px-5 py-2 bg-green-500 text-white rounded-lg cursor-pointer hover:bg-green-700" onClick={handleSend}>
          Send
        </button>

      </div>
    </div>
  )
}

export default MessageInput