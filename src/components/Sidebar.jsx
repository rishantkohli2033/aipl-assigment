import React, { useState } from 'react';
import { AlignJustify, ChevronDown, FolderPen, Sparkles, Workflow, Wrench } from 'lucide-react';

const Sidebar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState({
    Agents: false,
    Tools: false,
    LLMS: false
  });

  const toggleDropdown = (name) => {
    setIsDropdownOpen((prevState) => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  return (
    <div className="flex flex-col sticky items-center bg-white h-screen w-72  left-0 mt-1 overflow-y-auto shadow-lg rounded-xl p-2">
      <button className="px-4 py-2 mt-2 border border-green-500 rounded-lg text-green-500 font-semibold hover:bg-green-500 hover:text-white transition-colors duration-300 mb-4 flex gap-x-6 items-center">Chat With PDF <FolderPen size={20} strokeWidth={1} /></button>
      <ul className='w-full'>
        <li className="p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between" onClick={() => toggleDropdown('Agents')} name="agents">
          <div className="flex items-center gap-4 font-medium">
            <Workflow size={20} strokeWidth={1.75} /> Agents
          </div>
          <ChevronDown size={15} strokeWidth={2.25} />
        </li>
        {isDropdownOpen.Agents && (
          <div className='flex justify-center pr-4 pl-4'><button className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300'>Agents <AlignJustify size={20} strokeWidth={0.75} /> </button></div>
          )}
        <li className="p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between" onClick={() => toggleDropdown('Tools')} name="tools"><div className="flex items-center gap-4 font-medium">
          <Wrench size={20} strokeWidth={1.75} /> Tools
        </div>
          <ChevronDown size={15} strokeWidth={2.25} />
        </li>
        {isDropdownOpen.Tools && (
          <div className='flex flex-col justify-center pr-4 pl-4 gap-y-2'><button className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300'>WikiSearch <AlignJustify size={20} strokeWidth={0.75} /> </button>
          <button className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300'>DuckDuckSearch <AlignJustify size={20} strokeWidth={0.75} /> </button>
          </div>
          )}
        <li className="p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between" onClick={() => toggleDropdown('LLMS')} name="llms">
        <div className="flex items-center gap-4 font-medium">
        <Sparkles size={20} strokeWidth={1.75} /> LLMS
        </div>
          <ChevronDown size={15} strokeWidth={2.25} />
        </li>
        {isDropdownOpen.LLMS && (
          <div className='flex flex-col justify-center pr-4 pl-4 gap-y-2'><button className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300'>OpenAI 3.5 <AlignJustify size={20} strokeWidth={0.75} /> </button>
          <button className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300'>OpenAI 4 <AlignJustify size={20} strokeWidth={0.75} /> </button>
          <button className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300'>Azure OpenAI <AlignJustify size={20} strokeWidth={0.75} /> </button>
          </div>
          )}
      </ul>
    </div>
  );
};

export default Sidebar;
