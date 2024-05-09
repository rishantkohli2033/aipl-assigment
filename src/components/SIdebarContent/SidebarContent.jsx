import React, { useState } from 'react'
import { DndContext, closestCorners } from '@dnd-kit/core'
import { AlignJustify, ChevronDown, Sparkles, Workflow, Wrench } from 'lucide-react';
const SidebarContent = ({agents, setAgents, openAI, setOpenAI}) => {
    
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
        <ul className='w-full'>
            {/* Agents */}
            <li className="p-4 hover:bg-gray-100 cursor-pointer flex items-center justify-between" onClick={() => toggleDropdown('Agents')} name="agents">
                <div className="flex items-center gap-4 font-medium">
                    <Workflow size={20} strokeWidth={1.75} /> Agents
                </div>
                <ChevronDown size={15} strokeWidth={2.25} />
            </li>
            {isDropdownOpen.Agents && (
                <DndContext collisionDetection={closestCorners}>
                <div className='flex justify-center pr-4 pt-2 pl-4'><button  onClick={() => setAgents(!agents)} className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300'>Agents <AlignJustify size={20} strokeWidth={0.75} /> </button></div>
                </DndContext>
                
            )}

            {/* Tools */}
            <li className="p-4 hover:bg-gray-100 mt-2 cursor-pointer flex items-center justify-between" onClick={() => toggleDropdown('Tools')} name="tools"><div className="flex items-center gap-4 font-medium">
                <Wrench size={20} strokeWidth={1.75} /> Tools
            </div>
                <ChevronDown size={15} strokeWidth={2.25} />
            </li>
            {isDropdownOpen.Tools && (
                <div className='flex flex-col justify-center pr-4 pt-2 pl-4 gap-y-2'><button className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300' onClick={() => setAgents(!agents)}>WikiSearch <AlignJustify size={20} strokeWidth={0.75} /> </button>
                    <button className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300' onClick={() => setAgents(!agents)}>DuckDuckSearch <AlignJustify size={20} strokeWidth={0.75} /> </button>
                    <button className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300' onClick={() => setAgents(!agents)}>GMail<AlignJustify size={20} strokeWidth={0.75} /> </button>
                    <button className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300' onClick={() => setAgents(!agents)}>Github<AlignJustify size={20} strokeWidth={0.75} /> </button>
                </div>
            )}

            {/* LLMS */}
            <li className="p-4 hover:bg-gray-100 mt-2 cursor-pointer flex items-center justify-between" onClick={() => toggleDropdown('LLMS')} name="llms">
                <div className="flex items-center gap-4 font-medium">
                    <Sparkles size={20} strokeWidth={1.75} /> LLMS
                </div>
                <ChevronDown size={15} strokeWidth={2.25} />
            </li>
            {isDropdownOpen.LLMS && (
                <div className='flex flex-col justify-center pr-4 pt-2 pl-4 gap-y-2'><button onClick={() => setOpenAI(!openAI)} className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300'>OpenAI 3.5 <AlignJustify size={20} strokeWidth={0.75} /> </button>
                    <button className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300' onClick={() => setOpenAI(!openAI)} >OpenAI 4 <AlignJustify size={20} strokeWidth={0.75} /> </button>
                    <button className='border-2 w-full flex items-center justify-between pr-4 pl-4 pt-2 pb-2 hover:border-slate-500 rounded-lg border-slate-300' onClick={() => setOpenAI(!openAI)} >Azure OpenAI <AlignJustify size={20} strokeWidth={0.75} /> </button>
                </div>
            )}

        </ul>
    )
}

export default SidebarContent