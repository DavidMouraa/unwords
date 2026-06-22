import usePlayerStore from "@/store/usePlayerStore"
import { useEffect, useState } from "react"
import RenderSections from "./sections/RenderSections"

export default function Render() {
  const { playerContent } = usePlayerStore()

  const firstSection = Object.values(playerContent)[0]
  const [playerContentDisplayed, setPlayerContentDisplayed] = useState([firstSection])
  const [nextSectionId, setNextSectionId] = useState(null)

  useEffect(() => {
    function advanceToNextSection() {
      const nextSectionDisplayed = playerContentDisplayed.find((section) => section.id === nextSectionId)
      
      if (nextSectionId && !nextSectionDisplayed) {
        const nextSection = playerContent[nextSectionId]
        
        setPlayerContentDisplayed((contentDisplayed) => [...contentDisplayed, nextSection])
      }
    }
 
    window.addEventListener("click", advanceToNextSection)

    return () => window.removeEventListener("click", advanceToNextSection)
  }, [nextSectionId, playerContentDisplayed])

  return (
    <div className="flex flex-col gap-5 max-w-200 w-full text-secondary-500">
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