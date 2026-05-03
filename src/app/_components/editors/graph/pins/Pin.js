import { Handle } from "@xyflow/react";
import { IoCaretForward } from "react-icons/io5";

export default function Pin({ type, position }) {
  return (
    <Handle
      className="relative! left-auto! top-auto! transform-none! w-auto! h-auto! flex justify-center items-center rounded-none! border-none! bg-transparent! text-white text-lg"
      type={type}
      position={position}
    >
      <IoCaretForward />
    </Handle>
  )
}