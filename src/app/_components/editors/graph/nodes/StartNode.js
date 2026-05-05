import { IoRocket } from "react-icons/io5";
import InvisiblePin from "../pins/InvisiblePin";
import useGraphEditorStore from "@/store/useGraphEditorStore";
import { useEffect, useState } from "react";
import buildEdge from "@/app/_utils/buildEdge";

export default function StartNode({ id }) {
  const { nodes, edges, setNodes, setEdges } = useGraphEditorStore()

  const [targetNodeId, setTargetIdNode] = useState(null)

  function setConnectionWithTarget() {
    const targetNode = nodes[targetNodeId]

    setNodes((nodes) => {
      const newNodes = nodes?.map((node) => {
        if (node.id === id) {
          return {
            ...node,
            position: {
              x: -50 + targetNode?.position.x,
              y: 46 + targetNode?.position.y,
            }
          }
        }

        return node
      })

      return newNodes
    })
  }
  
  useEffect(() => {
    const targetExist = nodes.find((node) => node.id === targetNodeId?.node)

    if (!targetExist) {
      const newTargetNode = nodes.find((node) => node.id !== id) || null

      setTargetIdNode(newTargetNode)

      setEdges(buildEdge("execute", id, newTargetNode?.id))
    }
  }, [nodes.length])

  return (
    <div 
      className="rounded-[50%] p-1 bg-[#ffffff] text-[#000000] text-lg"
    >
      <IoRocket />
      <InvisiblePin 
        type="source"
        position="right"
      />
    </div>
  )
}