import usePlayerStore from "@/store/usePlayerStore"
import TextSection from "./sections/TextSection"
import { useState } from "react"

export default function Player() {
  const { content } = usePlayerStore()

  const [displayContent, setDisplayContent] = useState([content[0]])

  const handleKeyDown = (event) => {
    if (event.key === "enter") {

    }
  }

  return (
    <div 
      className="w-full h-full bg-black text-white"
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