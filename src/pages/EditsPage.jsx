import React from 'react';
import Sidebar from '../components/Sidebar';
import DragBoard from '../components/DragBoard';
import Navbar from '../components/Navbar';

function EditsPage() {
  return (
    <div className='flex justify-between bg-gray-100 h-screen'>
      <Sidebar />
      <DragBoard />
    </div>
  );
}

export default EditsPage;
