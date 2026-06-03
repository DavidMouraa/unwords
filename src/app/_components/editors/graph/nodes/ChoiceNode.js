import useGraphEditorStore from "@/store/useGraphEditorStore";
import Node from "./Node"
import { FaCodeFork } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

export default function ChoiceNode({ id, selected, type, data }) {
  const { addNodeChoice } = useGraphEditorStore()

  const [renamingChoiceId, setRenamingChoiceId] = useState(null)

  function createChoice() {
    addNodeChoice(id, "escolha 1")
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
      <div className="flex flex-col gap-1 w-25">
        <div 
          className="flex flex-col gap-1"
        >
          {data.choices.map((choice) => (
            <div 
              key={uuidv4()}
              className="flex justify-center rounded-sm p-1 bg-primary-500 cursor-pointer"
              onClick={() => setRenamingChoiceId(choice.id)}
            >
              {renamingChoiceId !== choice.id ? (
                <label className="w-full truncate">
                  {choice.label}
                </label>
              ) : (
                <input
                  className="w-full px-1 bg-primary-600 outline-none rounded-sm"
                  type="text"
                  defaultValue={choice.label}
                  autoFocus
                >
                  
                </input>
              )}
            </div>
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