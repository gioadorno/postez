import Image from 'next/image'
import React from 'react';
import { ChevronDownIcon, HomeIcon, SearchIcon, MenuIcon } from '@heroicons/react/solid';
import { BellIcon, ChatIcon, GlobeIcon, PlusIcon, SparklesIcon, SpeakerphoneIcon, VideoCameraIcon  } from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/react';

const Header = () => {
    const { data: session } = useSession();
  return (
    <div className='sticky top-0 z-50 flex bg-white px-4 py-2 shadow-sm'>
        <div className='relative pt-1 h-12 w-32 flex items-center flex-shrink-0 cursor-pointer'>
        <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 48 48" className='h-full w-full'><path fill="#01579B" d="M40,12c-1-2.9-2.9-3-4-3H24H12c-1.1,0-3,0.1-4,3L3.1,24.3C3.1,25.2,24,25,24,25s20.9,0.2,20.9-0.7L40,12z"/><path fill="#0277BD" d="M40,12c-1-2.9-2.9-3-4-3H24h-5c-0.6,2-3.9,3-7,3c-1.7,0-2,2-3,3.6S7.1,16.9,6,17l-2.9,7.3C3.1,25.2,24,25,24,25s20.9,0.2,20.9-0.7L40,12z"/><path fill="#039BE5" d="M43,23H5c-1.1,0-2,0.9-2,2v12c0,1.1,0.9,2,2,2h38c1.1,0,2-0.9,2-2V25C45,23.9,44.1,23,43,23z"/><path fill="#0288D1" d="M10,23c0,0,8.9,9,14,9s14-9,14-9"/><path fill="#FBC02D" d="M43,26v10c0,0.5-0.5,1-1,1H25c5-0.8,17-12,17-12C42.5,25,43,25.5,43,26z M5,26v10c0,0.5,0.5,1,1,1h17C18,36.2,6,25,6,25C5.5,25,5,25.5,5,26z"/><path fill="#FFFDE7" d="M35,32c0-1.1,0.9-2,2-2s2,0.9,2,2c0,1.1-0.9,2-2,2S35,33.1,35,32z M13,32c0-1.1-0.9-2-2-2s-2,0.9-2,2c0,1.1,0.9,2,2,2S13,33.1,13,32z"/><path fill="#01579B" d="M41,28.6V35h-8C36,32.9,39,30.4,41,28.6 M42,25c0,0-12,11.2-17,12h17c0.6,0,1-0.5,1-1V26C43,25.5,42.5,25,42,25L42,25z M7,28.6c2,1.8,5,4.3,8,6.4H7V28.6 M6,25c-0.5,0-1,0.5-1,1v10c0,0.5,0.4,1,1,1h17C18,36.2,6,25,6,25L6,25z"/></svg>
            <h1 className='font-bold text-xl whitespace-nowrap font-serif'>PostEz</h1>
        </div>

        <div className='flex items-center mx-7 xl:min-w-[300px]'>
            <HomeIcon className='h-5 w-5' />
            <p className='flex-1 ml-2 hidden lg:inline'>Home</p>
            <ChevronDownIcon className='h-5 w-5' />
        </div>

        {/* Search Box */}
        <form className='flex flex-1 items-center space-x-2 border border-gray-200 rounded-md bg-gray-100 px-3 py-1'>
            <SearchIcon className='h-6 w-6 text-gray-400' />
            <input className='flex-1 bg-transparent outline-none' type='text' placeholder='Search PostEz' />
            <button type='submit' hidden/>
        </form>

        <div className='text-gray-500 space-x-2 items-center mx-5 hidden lg:inline-flex'>
            <SparklesIcon className='icon'/>
            <GlobeIcon className='icon'/>
            <VideoCameraIcon className='icon'/>
            <hr className='h-10 border border-gray-100' />
            <ChatIcon className='icon'/>
            <BellIcon className='icon'/>
            <PlusIcon className='icon'/>
            <SpeakerphoneIcon className='icon'/>
        </div>
        <div className='ml-5 flex items-center lg:hidden'>
            <MenuIcon className='icon' />
        </div>

        {/* Sign in/Sign out */}
        {session ? (
        <div onClick={() => signOut()} className='hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer'>
            <div className='relative h-5 w-5 flex-shrink-0'>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" className='w-full h-full'><path d="M 8.5 6 C 7.175781 6 5.980469 6.839844 5.5625 8.09375 L 3.0625 15.6875 L 3.125 15.71875 C 3.050781 15.953125 3 16.210938 3 16.46875 L 3 23.53125 C 3 24.882813 4.117188 26 5.46875 26 L 26.53125 26 C 27.882813 26 29 24.882813 29 23.53125 L 29 16.46875 C 29 16.210938 28.949219 15.953125 28.875 15.71875 L 28.9375 15.6875 L 26.4375 8.09375 C 26.019531 6.839844 24.824219 6 23.5 6 Z M 8.5 8 L 23.5 8 C 23.96875 8 24.382813 8.304688 24.53125 8.75 L 26.28125 14 L 5.71875 14 L 7.46875 8.75 C 7.617188 8.304688 8.03125 8 8.5 8 Z M 7 16 L 25 16 L 16 22.75 Z M 5 17 L 6.84375 18.375 C 6.332031 18.738281 6 19.324219 6 20 C 6 21.105469 6.894531 22 8 22 C 8.875 22 9.601563 21.4375 9.875 20.65625 L 14.3125 24 L 5.46875 24 C 5.199219 24 5 23.800781 5 23.53125 Z M 27 17 L 27 23.53125 C 27 23.800781 26.800781 24 26.53125 24 L 17.6875 24 L 22.125 20.65625 C 22.398438 21.4375 23.125 22 24 22 C 25.105469 22 26 21.105469 26 20 C 26 19.324219 25.667969 18.738281 25.15625 18.375 Z"/></svg>
            </div>
            <div className='flex-1 text-xs'>
                <p>{session?.user?.name}</p>
            <p className='text-gray-400'>Sign Out</p>
            </div>

            <ChevronDownIcon className='h-5 flex-shrink-0 text-gray-400' />
        </div>
        ) :(
        <div onClick={() => signIn()} className='hidden lg:flex items-center space-x-2 border border-gray-100 p-2 cursor-pointer'>
            <div className='relative h-5 w-5 flex-shrink-0'>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 32 32" className='w-full h-full'><path d="M 8.5 6 C 7.175781 6 5.980469 6.839844 5.5625 8.09375 L 3.0625 15.6875 L 3.125 15.71875 C 3.050781 15.953125 3 16.210938 3 16.46875 L 3 23.53125 C 3 24.882813 4.117188 26 5.46875 26 L 26.53125 26 C 27.882813 26 29 24.882813 29 23.53125 L 29 16.46875 C 29 16.210938 28.949219 15.953125 28.875 15.71875 L 28.9375 15.6875 L 26.4375 8.09375 C 26.019531 6.839844 24.824219 6 23.5 6 Z M 8.5 8 L 23.5 8 C 23.96875 8 24.382813 8.304688 24.53125 8.75 L 26.28125 14 L 5.71875 14 L 7.46875 8.75 C 7.617188 8.304688 8.03125 8 8.5 8 Z M 7 16 L 25 16 L 16 22.75 Z M 5 17 L 6.84375 18.375 C 6.332031 18.738281 6 19.324219 6 20 C 6 21.105469 6.894531 22 8 22 C 8.875 22 9.601563 21.4375 9.875 20.65625 L 14.3125 24 L 5.46875 24 C 5.199219 24 5 23.800781 5 23.53125 Z M 27 17 L 27 23.53125 C 27 23.800781 26.800781 24 26.53125 24 L 17.6875 24 L 22.125 20.65625 C 22.398438 21.4375 23.125 22 24 22 C 25.105469 22 26 21.105469 26 20 C 26 19.324219 25.667969 18.738281 25.15625 18.375 Z"/></svg>
            </div>
            <p className='text-gray-400'>Sign In</p>
        </div>

        )}
    </div>
  )
}

export default Header