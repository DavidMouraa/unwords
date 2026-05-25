import { Handle } from "@xyflow/react";
import { IoCaretForward } from "react-icons/io5";

export default function Pin({ id, type, position, isConnectable }) {

  return (
    <Handle
      className="relative! left-auto! top-auto! transform-none! w-auto! h-auto! flex justify-center items-center rounded-none! border-none! bg-transparent! text-white text-lg"
      id={id}
      type={type}
      position={position}
      isConnectable={isConnectable}
    >
      <IoCaretForward />
    </Handle>
  )
}