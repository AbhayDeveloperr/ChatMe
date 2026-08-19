import React from 'react'

const Messages = ({messages}) => {
  return (
    <div className="flex-1 p-5 overflow-y-auto">

      {messages.map((message,index)=>(
        <div key={index} className= {`flex mb-3 ${message.sender === "me"? "justify-end" : "justify-start"}`}>
            <div className= {`px-4 py-2 rounded-lg ${message.sender === "me" ? "bg-green-200" : "bg-white" }`}>
            {message.text}
            </div>
        </div>
      ))}

    </div>
  )
}

export default Messages