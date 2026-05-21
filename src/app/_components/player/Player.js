import usePlayerStore from "@/store/usePlayerStore"
import TextSection from "./sections/TextSection"
import { useState } from "react"

export default function Player() {
  const { playerContent } = usePlayerStore()

  const [displayContent, setDisplayContent] = useState([playerContent[0]])

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && displayContent.length < playerContent.length) {
      setDisplayContent((displayContent) => [...displayContent, playerContent[displayContent.length]])
    }
  }

  return (
    <div 
      className="w-full h-full p-5 bg-black text-white outline-none"
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      {displayContent?.map((section) => (
        <TextSection 
          key={section.id}
          section={section}
        />
      ))}
    </div>
  )
}