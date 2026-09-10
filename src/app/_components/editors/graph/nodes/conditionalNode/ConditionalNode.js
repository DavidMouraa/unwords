import Node from "../Node";
import { MdForkRight } from "react-icons/md";

export default function ConditionalNode({ id, selected, type, data }) {
  return (
    <Node
      id={id}
      selected={selected}
      color={"#CC5500"}
      Icon={MdForkRight}
      type={type}
      label={"Condicional"}
      data={data}
    >
      hjhdskahf
    </Node>
  )
}