import useGraphEditorStore from "@/store/useGraphEditorStore";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

export default function ChoiceForm({ item }) {
  const { addNodeChoice, renameNodeChoice, removeNodeChoice } = useGraphEditorStore()

  function handleAddButtonClick() {
    addNodeChoice(item.id, "Escolha")
  }

  function handleRemoveButtonClick(event, choiceId) {
    removeNodeChoice(item.id, choiceId)
  }

  function handleChange(event, choiceId) {
    renameNodeChoice(item.id, choiceId, event.target.value)
  }

  return (
    <div className="flex flex-col gap-1">
      {item.data.choices.map((choice) => (
        <div
          key={choice.id}
          className="flex gap-1"
        >
          <textarea
            className="w-full p-1 rounded-sm bg-primary-400 focus:bg-primary-600 outline-none"
            defaultValue={choice.label}
            onChange={(event) => handleChange(event, choice.id)}
          />
          <button
            className="p-0.5 rounded-sm bg-danger/80 hover:bg-danger cursor-pointer"
            onClick={(event) => handleRemoveButtonClick(event, choice.id)}
          >
            <FaMinus />
          </button>
        </div>
      ))}
      <button
        className="flex justify-center p-1 rounded-sm bg-primary-400 hover:bg-primary-300 cursor-pointer"
        onClick={handleAddButtonClick}
      >
        <FaPlus />
      </button>
    </div>
  )
}