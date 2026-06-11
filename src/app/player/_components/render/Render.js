"use client"

import { useEffect, useState } from "react"
import TextSection from "./sections/TextSection"
import usePlayerStore from "@/store/usePlayerStore"

export default function Render({ router }) {
  const { playerContent } = usePlayerStore()

  const [displayContent, setDisplayContent] = useState([])

  const handleKeyDown = (event) => {
    console.log(displayContent.length < playerContent.length)

    if (event.key === "Enter" && displayContent.length < playerContent.length) {
      console.log(playerContent[displayContent.length])
      setDisplayContent((displayContent) => [...displayContent, playerContent[displayContent.length]])
    }
  }

  useEffect(() => {
    if (playerContent.length) {
      setDisplayContent([playerContent[0]])
    }
  }, [])

  return (
    <div 
      className="size-full text-white outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {displayContent.map((section) => (
        <TextSection 
          key={section.id}
          section={section}
        />
      ))}
    </div>
  )
}