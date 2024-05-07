import React from 'react';

function NewStacks() {
    const handleClick = () =>{
        
    }
  return (
    <div className="py-6 px-8 bg-slate-100">
        <div className='flex justify-between items-center'>
            <h1 className="text-2xl font-bold">My Stacks</h1>
            <button className="px-4 py-2 bg-green-700 text-white rounded-md">+ New Stack</button>
        </div>
        <div className='h-[2px] mt-3 bg-gray-200'></div>
        
        <div className="pt-48 flex flex-col justify-center items-center">
    <div className="w-1/4 min-w-48 bg-white p-6 mt-4 text-center border border-gray-300 rounded-lg shadow-md ">
        <div className="text-left">
            <h1 className="text-xl font-bold text-gray-800 mb-2">Create New Stack</h1>
            <p className="text-xs text-gray-600">Start building your generative AI apps with our essential tools and frameworks</p>
            <button onClick={handleClick} className="px-3 py-1 bg-green-700 text-white rounded-lg mt-4 hover:bg-green-800">+ New Stack</button>
        </div>
    </div>
</div>

    </div>
  )
}

export default NewStacks;
