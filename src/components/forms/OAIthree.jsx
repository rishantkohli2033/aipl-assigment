import React from 'react'

const OAIthree = () => {
  return (
    <div className="z-10 bg-gray-100 h-fit mt-20 p-6 rounded-lg w-full max-w-md">
          <h2 className="text-lg font-bold mb-4">OpenAI</h2>
          <form>
            <label htmlFor="agentName" className="block mb-2 text-gray-700">Max Tokens</label>
            <input type="text" id="agentName" name="agentName" placeholder='256' className="w-full p-2 border border-gray-300 rounded-md mb-2" />
            <hr className="border-t my-2" />

            <label htmlFor="role" className="block mb-2 text-gray-700">OpenAI API Base</label>
            <input type="text" id="role" name="role" placeholder='Type something' className="w-full p-2 border border-gray-300 rounded-md mb-2" />
            <hr className="border-t my-2" />

            <label htmlFor="goal" className="block mb-2 text-gray-700">OpenAI API Key</label>
            <input type="text" id="goal" name="goal" placeholder='Type something' className="w-full p-2 border border-gray-300 rounded-md mb-2" />
            <hr className="border-t my-2" />

            <label htmlFor="capability" className="block mb-2 text-gray-700">Temperature</label>
            <input type="text" id="capability" name="capability" placeholder='Type something' className="w-full p-2 border border-gray-300 rounded-md mb-2" />
            <hr className="border-t my-2" />
          </form>
        </div>
  )
}

export default OAIthree