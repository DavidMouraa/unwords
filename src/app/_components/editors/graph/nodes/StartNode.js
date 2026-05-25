import buildEdge from "@/app/_utils/buildEdge";
import useGraphEditorStore from "@/store/useGraphEditorStore";
import { Handle } from "@xyflow/react";
import { useEffect } from "react";
import { IoRocket } from "react-icons/io5";

export default function StartNode({ id, isConnectable }) {
  const { nodes, edges, setEdges, setStartTargetId } = useGraphEditorStore()

  function connectWithTarget(targetId) {
    const isConnected = edges.some(edge => edge.type === "start")

    if (!isConnected) setEdges(buildEdge("start", id, targetId))
  }

  useEffect(() => {
    const currentTarget = nodes.find((node) => node.id !== id) || null

    if (currentTarget) {
      setStartTargetId(currentTarget.id)
      connectWithTarget(currentTarget.id)
    }
  }, [nodes.length, setStartTargetId, connectWithTarget])

  return (
    <div className="flex justify-center items-center size-6 rounded-[50%] bg-white">
      <IoRocket />
      <Handle 
        className="border-none! bg-white!"
        type="source"
        position="right"
        isConnectable={isConnectable}
      />
    </div>
  )
}