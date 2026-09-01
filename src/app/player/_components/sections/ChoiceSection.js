import { useState } from "react"

export default function ChoiceSection({ section, setNextSectionId }) {
  const [selectedChoiceId, setSelectedChoiceId] = useState(null)

  function onClick(_, nextSectionId, choiceId) {
    if (!selectedChoiceId) {
      setSelectedChoiceId(choiceId)
      setNextSectionId(nextSectionId)
    }
  }

  return (
    <div
      className="flex flex-col justify-center gap-2"
    >
      {section.choices.map((choice) => (
        <div
          className={`border border-primary-300 ${!selectedChoiceId || selectedChoiceId === choice.id ? "bg-primary-600" : "opacity-30"} ${!selectedChoiceId ? "hover:border-secondary-500 hover:text-secondary-500 hover:bg-primary-500 cursor-pointer" : ""} p-1 rounded-sm`}
          key={choice.id}
          onClick={(event) => onClick(event, choice.next, choice.id)}
        >
          {choice.label}
        </div>
      ))}
    </div>
  )
}