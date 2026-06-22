import useGraphEditorStore from "@/store/useGraphEditorStore"
import Pin from "../../pins/Pin"
import { FaMinus } from "react-icons/fa";


export default function Choice({ nodeId, choice, renamingChoiceId, setRenamingChoiceId }) {
  const { removeNodeChoice, renameNodeChoice } = useGraphEditorStore()

  function onChange(event) {
    renameNodeChoice(nodeId, choice.id, event.target.value)
  }

  function deleteChoice() {
    removeNodeChoice(nodeId, choice.id)
  }

  return (
    <div 
      className="flex justify-"
      onClick={() => setRenamingChoiceId(choice.id)}
    >
      <div 
        className="w-full rounded-sm p-1 bg-primary-500 cursor-text"
      >
        {renamingChoiceId !== choice.id ? (
          <div className="flex justify-between items-center w-full truncate">
            <span>{choice.label}</span>
            <button 
              className="flex justify-center items-center size-3 rounded-sm p-0.5 bg-danger cursor-pointer"
              onClick={deleteChoice}
            >
              <FaMinus />
            </button>
          </div>
          ) : (
            <input
              className="w-full px-1 bg-primary-600 outline-none rounded-sm"
              type="text"
              defaultValue={choice.label}
              autoFocus
              onChange={onChange}
            />
        )}
      </div>
      <Pin 
        id={choice.id}
        type={"source"}
        position={"right"}
      />
    </div>
  )
}