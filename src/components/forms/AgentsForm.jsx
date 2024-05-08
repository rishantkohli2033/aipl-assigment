import React from 'react'

const AgentsForm = () => {
  return (
    <div className="z-10 bg-gray-100 mt-20 h-fit p-6 rounded-lg w-full max-w-md">
          <h2 className="text-lg font-bold mb-4">Agents</h2>
          <form>
            <label htmlFor="agentName" className="block mb-2 text-gray-700">Agent Name</label>
            <input type="text" id="agentName" name="agentName" placeholder='writer' className="w-full p-2 border border-gray-300 rounded-md mb-2" />
            <hr className="border-t my-2" />

            <label htmlFor="role" className="block mb-2 text-gray-700">Role</label>
            <input type="text" id="role" placeholder='summarising expert' name="role" className="w-full p-2 border border-gray-300 rounded-md mb-2" />
            <hr className="border-t my-2" />

            <label htmlFor="goal" className="block mb-2 text-gray-700">Goal</label>
            <input type="text" id="goal" name="goal" placeholder='summarize input into presentable points' className="w-full p-2 border border-gray-300 rounded-md mb-2" />
            <hr className="border-t my-2" />

            <label htmlFor="backstory" className="block mb-2 text-gray-700">Backstory</label>
            <textarea id="backstory" name="backstory" placeholder='expert in summarising the given text' className="w-full p-2 border border-gray-300 rounded-md mb-2" />
            <hr className="border-t my-2" />

            <label htmlFor="capability" className="block mb-2 text-gray-700">Capability</label>
            <select type="text" id="capability" name="capability" className="w-full p-2 border border-gray-300 rounded-md mb-2" />
            <hr className="border-t my-2" />

            <label htmlFor="task" className="block mb-2 text-gray-700">Task</label>
            <input type="text" id="task" name="task" className="w-full p-2 border border-gray-300 rounded-md mb-2" placeholder='summarize points' />
          </form>
        </div>
  )
}

export default AgentsForm