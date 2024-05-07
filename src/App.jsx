import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import NewStacks from './components/NewStacks';

const App = () => {
  return (
    <div className='flex flex-col'>
    <Navbar />
    <NewStacks />
    </div>
  );
}

export default App;
