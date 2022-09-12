import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React from 'react';

type Props = {
    seed?: string
    large?: boolean
}

const Avatar = ({ seed, large }: Props) => {
    const { data: session } = useSession();
  return (
    <div className={`relative overflow-hidden h-10 w-10 rounded-full border-slate-300 bg-white ${large && 'h-20 w-20'}`}>
        <Image 
        layout='fill'
        src={`https://robohash.org/${
            seed || session?.user?.name || 'placeholder'
            }.png`} />
    </div>
  )
}

export default Avatar