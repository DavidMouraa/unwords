import usePlayerStore from "@/store/usePlayerStore"
import { useEffect, useState } from "react"
import RenderSections from "./sections/RenderSections"

export default function Render() {
  const { playerContent } = usePlayerStore()

  const [playerContentDisplayed, setPlayerContentDisplayed] = useState([playerContent[0]])
  const [nextSectionId, setNextSectionId] = useState(null)

  useEffect(() => {
    function advanceToNextSection() {
      if (nextSectionId) {
        const nextSection = playerContent.find((section) => section.id === nextSectionId)
        
        setPlayerContentDisplayed((contentDisplayed) => [...contentDisplayed, nextSection])
      }
    }
 
    window.addEventListener("click", advanceToNextSection)

    return () => window.removeEventListener("click", advanceToNextSection)
  }, [nextSectionId])

  return (
    <div className="flex flex-col gap-2 max-w-200 w-full">
      {playerContentDisplayed.map((section) => (
        <RenderSections 
          key={section.id} 
          section={section} 
          setNextSectionId={setNextSectionId}
        />
      ))}
    </div>
  )
}