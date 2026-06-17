"use client"

import Render from "./_components/Render"

export default function Player() {
  return (
    <div 
      className="flex flex-col items-center w-screen h-screen p-2 bg-black text-white outline-none"
    >
      <Render />
    </div>
  )
}