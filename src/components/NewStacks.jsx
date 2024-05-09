import React, { useState } from 'react';
import ModalOpen from './ModalOpen';
import useGlobalState from '../store/useGlobalState';
import {ExternalLink} from 'lucide-react';
import { Link } from 'react-router-dom';
function NewStacks() {
    const { stackArray } = useGlobalState();
    const [input, setInput] = useState({
        stackName: "",
        stackDesc: "",
    });
    return (
        <div className="py-8 px-8">
            <div className='flex justify-between items-center'>
                <h1 className="text-2xl font-bold">My Stacks</h1>
                <ModalOpen input={input} setInput={setInput} />
            </div>
            <div className='h-[2px] mt-3 bg-gray-200'></div>

            {stackArray.length == 0 && <div className="pt-48 flex flex-col justify-center items-center">
                <div className="w-1/4 min-w-48 bg-white p-6 mt-4 text-center border border-gray-300 rounded-lg shadow-md ">
                    <div className="text-left">
                        <h1 className="text-xl font-bold text-gray-800 mb-2">Create New Stack</h1>
                        <p className="text-xs text-gray-600">Start building your generative AI apps with our essential tools and frameworks</p>
                        <br />
                        <ModalOpen input={input} setInput={setInput} />
                    </div>
                </div>
            </div>}

            <div className="flex flex-wrap">
                {stackArray.length > 0 &&
                    stackArray.map((stack, index) => (
                        <CardComponent key={index} stackName={stack.stackName} stackDesc={stack.stackDesc} />
                    ))
                }
            </div>


        </div>
    )
}

const CardComponent = ({ stackName, stackDesc }) => (
  <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 m-4 flex-none" style={{ width: '400px' }}>
    <h2 className="text-xl font-bold mb-4">{stackName}</h2>
    <p className="text-gray-700 text-sm mb-4">{stackDesc}</p>
    <div className="flex justify-end mt-auto">
    <Link to={"/edits"} className="bg-white border-neutral-200 border-2 hover:bg-neutral-100 text-black transition py-2 px-4 rounded flex items-center gap-1">
        Edit Stack <ExternalLink size={18} className="ml-1 text-gray-900" />
    </Link>
    </div>
  </div>
);
export default NewStacks;
