import React from 'react'

const Messages = () => {
  return (
    <div className="flex-1 p-5 overflow-y-auto">

      {/* Received message */}
      <div className="flex justify-start mb-3">
        <div className="bg-white px-4 py-2 rounded-lg">
          Hello!
        </div>
      </div>

      {/* Sent message */}
      <div className="flex justify-end mb-3">
        <div className="bg-green-200 px-4 py-2 rounded-lg">
          Hi, how are you?
        </div>
      </div>

      {/* Received message */}
      <div className="flex justify-start mb-3">
        <div className="bg-white px-4 py-2 rounded-lg">
          I'm good. What about you?
        </div>
      </div>

    </div>
  )
}

export default Messages