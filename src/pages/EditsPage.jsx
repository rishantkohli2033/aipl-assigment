import React from 'react'
import Sidebar from '../components/Sidebar'
import DragBoard from '../components/DragBoard'
import Navbar from '../components/Navbar'

function EditsPage() {
  return (
    <div className='flex gap-2'>
      
      <Sidebar />
      <DragBoard />
    </div>
  )
}

export default EditsPage