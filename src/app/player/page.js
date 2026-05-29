"use client"

import { FaArrowLeft } from "react-icons/fa";
import { MdFullscreen } from "react-icons/md";
import Button from "./_components/controlMenu/Button";
import Render from "./_components/render/Render";
import { useRouter } from "next/navigation";

export default function Player() {
  const router = useRouter()

  return (
    <div 
      className="w-screen h-screen p-2 bg-black border text-white outline-none"
    >
      <div 
        className="flex justify-between"
      >
        <Button>
          <FaArrowLeft />
        </Button>

        <Button>
          <MdFullscreen />
        </Button>
      </div>

      <Render 
        router={router}
      />
    </div>
  )
}