import Node from "../Node"
import { FaCodeFork } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import Choice from "./Choice";
import useGraphEditorStore from "@/store/useGraphEditorStore";

export default function ChoiceNode({ id, selected, type, data }) {
  const { addNodeChoice } = useGraphEditorStore()

  function handleClick() {
    addNodeChoice(id, "Escolha")
  }

  return (
    <Node
      id={id}
      selected={selected}
      color={"#078a86"}
      type={type}
      label={"Escolha"}
      data={data}
      Icon={FaCodeFork}
    >
      <div className="flex flex-col gap-1 w-40">
        {data.choices.map((choice) => (
          <Choice 
            key={choice.id}
            choice={choice}
            nodeId={id}
          />
        ))}
        <button 
          className="flex justify-center p-0.5 rounded-sm bg-primary-500 hover:bg-primary-400 cursor-pointer"
          onClick={handleClick}
        >
          <FaPlus />
        </button>
      </div>
    </Node>
  )
}