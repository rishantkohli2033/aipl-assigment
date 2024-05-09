import React from 'react';
import { FolderPen } from 'lucide-react';
import SidebarContent from './SIdebarContent/SidebarContent';

const Sidebar = ({agents, setAgents, openAI, setOpenAI}) => {
  return (
    <div className="flex flex-col sticky items-center bg-white h-screen w-96  left-0 mt-1 overflow-y-auto shadow-lg rounded-xl p-2">
      <button className="px-4 py-2 mt-2 border border-green-500 rounded-lg text-green-500 font-semibold hover:bg-green-500 hover:text-white transition-colors duration-300 mb-4 flex gap-x-6 items-center">Chat With PDF <FolderPen size={20} strokeWidth={1} /></button>
      <SidebarContent agents={agents} setAgents={setAgents} openAI={openAI} setOpenAI={setOpenAI}/>
    </div>
  );
};

export default Sidebar;
