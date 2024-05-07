import React from 'react';

const Navbar = () => {
    return (
        <>
            <nav className="bg-white text-gray-800 p-4 flex justify-between items-center shadow-md">
                <div className="flex items-center">
                    <img src="/image.png" alt="GenAI Stack" className="h-8 w-10 mr-2" />
                    <span>GenAI Stack</span>
                </div>
                <div className='cursor-pointer group relative'>
                    <img src="https://github.com/shadcn.png" alt="user profile img" className='h-8 w-8 rounded-full' />
                    <div className='absolute bg-white top-10 left-2/4 -translate-x-2/4  mx-auto bg-dark-layer-1 text-brand-orange p-2 rounded shadow-lg z-40 group-hover:scale-100 scale-0 transition-all duration-300 ease-in-out'
                    >
                        <p className='text-sm'>user</p>
                    </div>
                </div>
            </nav>

        </>
    );
}

export default Navbar;
