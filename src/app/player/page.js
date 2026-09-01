"use client"

import { FaArrowLeft } from "react-icons/fa";
import Render from "./_components/Render"
import { useRouter } from "next/navigation";

export default function Player() {
  const router = useRouter()

  function previusPage() {
    router.back()
  }

  return (
    <div 
      className="flex flex-col items-center w-screen h-screen p-2 bg-black text-white outline-none"
    >
      <div className="w-full p-3">
        <button 
          onClick={previusPage}
          className="text-4xl cursor-pointer"
        >
          <FaArrowLeft />
        </button>
      </div>
      <Render />
    </div>
  )
}