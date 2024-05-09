import React from 'react';
import DotPattern from './magicui/dot-pattern';
import { MessageCircleMore, Play, SquareDashedMousePointer } from 'lucide-react';
import AgentsForm from './forms/AgentsForm';
import OAIthree from './forms/OAIthree';

function DragBoard({ agents, openAI }) {

  return (
    <div className="relative flex top-1 left-1 h-full w-full justify-center overflow-hidden rounded-lg border gap-4  bg-white p-20 md:shadow-xl overflow-y-auto">
    { !agents || !openAI &&  <div className='flex flex-col items-center'>
          <SquareDashedMousePointer color="#2bb141" size={40} />
          <p className="z-10 whitespace-pre-wrap text-center text-xl font-medium tracking-tighter text-black">
            Drag & drop to get started
          </p>
        </div>}
      {!agents && (
        <AgentsForm />
      )}
      {openAI && (
        <OAIthree/>
      )}
      <DotPattern />
      <div className='bg-green-500 rounded-full h-10 w-10 flex justify-center z-10 fixed bottom-16 right-4 hover:scale-110 transition'><button><Play color='white'/></button></div>
      <div className='bg-blue-600 rounded-full h-10 w-10 flex justify-center z-10 fixed bottom-4 right-4 hover:scale-110 transition'><button ><MessageCircleMore color='white' /></button></div>
    </div>
  );
}

export default DragBoard;
