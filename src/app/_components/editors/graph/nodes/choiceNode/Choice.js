import useGraphEditorStore from "@/store/useGraphEditorStore";
import Pin from "../../pins/Pin"
import { FaMinus } from "react-icons/fa";

export default function Choice({ nodeId, choice }) {
  const { removeNodeChoice } = useGraphEditorStore()

  function removeChoice() {
    removeNodeChoice(nodeId, choice.id)
  }

  return (
    <div 
      className="flex items-center gap-1 w-full rounded-sm px-1 hover:bg-primary-500"
    >
      <button 
        className="p-0.5 rounded-sm bg-danger text-[8px] cursor-pointer"
        onClick={removeChoice}
      >
        <FaMinus />
      </button>
      <div className="w-full">
        <span className="w-full truncate">
          {choice.label}
        </span>
      </div>
      <div>
        <Pin 
          id={choice.id}
          type={"source"}
          position={"right"}
        />
      </div>
    </div>
  )
}