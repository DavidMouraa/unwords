import { FaPlus } from "react-icons/fa6";
import Inspector from "../Inspector";
import useGraphEditorStore from "@/store/useGraphEditorStore";
import InputChoice from "../../InspectorsFields/InputChoice";

export default function Choice({ item }) {
  const { addNodeChoice } = useGraphEditorStore()

  function handleClick() {
    addNodeChoice(item.id, "Escolha")
  }

  return (
    <Inspector>
      <label className="">
        Escolhas:
      </label>
      {item.data.choices.map((choice) => (
        <InputChoice
          key={choice.id}
          item={item}
          choice={choice}
        />
      ))}
      <button 
        className="flex justify-center w-full p-1 rounded-sm cursor-pointer bg-primary-400 hover:bg-primary-300"
        onClick={handleClick}
      >
        <FaPlus />
      </button>
    </Inspector>
  )
}