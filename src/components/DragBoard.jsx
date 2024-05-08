import React from 'react';
import DotPattern from './magicui/dot-pattern';
import { cn } from '../lib/utils';
import { SquareDashedMousePointer } from 'lucide-react';
import AgentsForm from './forms/AgentsForm';
import OAIthree from './forms/OAIthree';

function DragBoard({ agents, openAI }) {

  return (
    <div className="relative flex h-full w-full justify-center overflow-hidden rounded-lg border gap-4  bg-white p-20 md:shadow-xl overflow-y-auto">
    { !agents || !openAI &&  <>
          <SquareDashedMousePointer color="#2bb141" size={40} />
          <p className="z-10 whitespace-pre-wrap text-center text-xl font-medium tracking-tighter text-black">
            Drag & drop to get started
          </p>
        </>}
      {!agents && (
        <AgentsForm />
      )}
      {openAI && (
        <OAIthree/>
      )}
      <DotPattern />
    </div>
  );
}

export default DragBoard;
