import Node from "../Node"
import { FaCodeFork } from "react-icons/fa6";
import Choice from "./Choice";

export default function ChoiceNode({ id, selected, type, data }) {
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
          />
        ))}
      </div>
    </Node>
  )
}