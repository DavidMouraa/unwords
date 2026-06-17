import { useState } from "react"

export default function ChoiceSection({ section, setNextSectionId }) {
  const [isActived, setIsActived] = useState(true)

  function onClick(nextSectionId) {
    if (isActived) {
      setNextSectionId(nextSectionId || null)
      setIsActived(false)
    }
  }

  return (
    <div
    >
      {section.choices.map((choice) => (
        <div
          key={choice.id}
          onClick={() => onClick(choice.next)}
        >
          {choice.label}
        </div>
      ))}
    </div>
  )
}