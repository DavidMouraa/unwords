"use client"

import { useEffect, useState } from "react"
import TextSection from "./sections/TextSection"
import usePlayerStore from "@/store/usePlayerStore"

export default function Render({ router }) {
  const { playerContent } = usePlayerStore()

  const [displayContent, setDisplayContent] = useState(null)

  const handleKeyDown = (event) => {
    if (event.key === "Enter" && displayContent.length < content.length) {
      setDisplayContent((displayContent) => [...displayContent, content[displayContent.length]])
    }
  }

  useEffect(() => {
    !playerContent && router.push("/")
  }, [])

  return (
    <div 
      className="size-full text-white outline-none"
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