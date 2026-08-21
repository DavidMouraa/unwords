import Node from "./Node";
import { MdForkLeft } from "react-icons/md";

export default function ConditionalNode({ id, type, data, selected }) {
  return (
    <Node
      Icon={MdForkLeft}
      id={id}
      data={data}
      selected={selected}
      label={"Condicional"}
      type={type}
      color={"#71270c"}
    >
      
    </Node>
  )
}