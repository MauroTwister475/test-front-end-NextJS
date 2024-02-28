import React from 'react'

interface BlockPathProps {
  path?: string,
  aditionalPath?: string,
}
export function BlockPath({ path, aditionalPath }: BlockPathProps) {
  return (
    <div className='w-full flex justify-start px-40 items-center text-gray-300 gap-6'>
      <h2>{path}</h2>
      <div className='w-2 h-2 bg-gray-300 rounded-full'/>
      <span>{aditionalPath}</span>
    </div>
  )
}
