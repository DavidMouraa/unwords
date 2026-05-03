import { Handle } from "@xyflow/react";

export default function InvisiblePin({ type, position }) {
  return (
    <Handle 
      type={type}
      position={position}
      className="left-3 border-none! bg-transparent!"
    />
  )
}