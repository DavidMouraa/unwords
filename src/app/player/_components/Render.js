import usePlayerStore from "@/store/usePlayerStore"
import { useState } from "react"
import RenderSections from "./sections/RenderSections"

export default function Render() {
  const { playerContent } = usePlayerStore()

  const [playerContentDisplayed, setPlayerContentDisplayed] = useState([playerContent[0]])
  const [nextSection, setNextSection] = useState(null)

  return (
    <div>
      {playerContentDisplayed.map((section) => (
        <RenderSections 
          key={section.id} 
          section={section} 
        />
      ))}
    </div>
  )
}