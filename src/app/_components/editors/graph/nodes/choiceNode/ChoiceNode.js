import useGraphEditorStore from "@/store/useGraphEditorStore";
import Node from "../Node"
import { FaCodeFork } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { useEffect, useState } from "react";
import Choice from "./Choice";

export default function ChoiceNode({ id, selected, type, data }) {
  const { addNodeChoice } = useGraphEditorStore()

  const [renamingChoiceId, setRenamingChoiceId] = useState(null)

  function createChoice() {
    addNodeChoice(id, "Escolha")
  }

  useEffect(() => {
    function onClick() {
      setRenamingChoiceId(null)
    }

    window.addEventListener("click", onClick, true)

    return () => window.removeEventListener("click", onClick, true)
  }, [])

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
      <div className="flex flex-col gap-1 w-25">
        <div 
          className="flex flex-col gap-1"
        >
          {data.choices.map((choice, index) => (
            <Choice 
              key={choice.id}
              index={index}
              nodeId={id}
              choice={choice}
              renamingChoiceId={renamingChoiceId}
              setRenamingChoiceId={setRenamingChoiceId}
            />
          ))}
        </div>
        <button 
          onClick={createChoice}
          className="flex justify-center w-full rounded-sm p-0.5 bg-primary-500 hover:bg-primary-400 cursor-pointer"
        >
          <FaPlus />
        </button>
      </div>
    </Node>
  )
}