import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import DragBoard from '../components/DragBoard';
import Navbar from '../components/Navbar';

function EditsPage() {
  const [agents, setAgents] = useState(false);
  const [OpenAI, setOpenAI] = useState(false);
  return (
    <div className='flex justify-between bg-gray-100 h-screen'>
      <Sidebar setAgents={setAgents} agents={agents} openAI={OpenAI} setOpenAI={setOpenAI}/>
      <DragBoard agents={agents} openAI={OpenAI}/>
    </div>
  );
}

export default EditsPage;
