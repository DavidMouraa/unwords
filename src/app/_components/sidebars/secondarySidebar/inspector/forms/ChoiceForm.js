import useGraphEditorStore from "@/store/useGraphEditorStore";
import { FaPlus } from "react-icons/fa";

export default function ChoiceForm({ item }) {
  const { addNodeChoice, renameNodeChoice } = useGraphEditorStore()

  function handleClick() {
    addNodeChoice(item.id, "Escolha")
  }

  function handleChange(event, choiceId) {
    renameNodeChoice(item.id, choiceId, event.target.value)
  }

  return (
    <div className="flex flex-col gap-1">
      {item.data.choices.map((choice) => (
        <textarea
          key={choice.id}
          className="p-1 rounded-sm bg-primary-400"
          defaultValue={choice.label}
          onChange={(event) => handleChange(event, choice.id)}
        />
      ))}
      <button
        className="flex justify-center p-1 rounded-sm bg-primary-400 hover:bg-primary-300 cursor-pointer"
        onClick={handleClick}
      >
        <FaPlus />
      </button>
    </div>
  )
}