import { useState } from "react"

export default function ChoiceSection({ section, setNextSectionId }) {
  const [isActived, setIsActived] = useState(true)

  function onClick(event, nextSectionId) {
    if (isActived) {
      setNextSectionId(nextSectionId || null)
      setIsActived(false)
    }
  }

  return (
    <div
      className="flex justify-center gap-2"
    >
      {section.choices.map((choice) => (
        <div
          className="border border-primary-300 hover:border-secondary-500 hover:text-secondary-500 hover:bg-primary-500 p-1 rounded-sm cursor-pointer"
          key={choice.id}
          onClick={(event) => onClick(event, choice.next)}
        >
          {choice.label}
        </div>
      ))}
    </div>
  )
}