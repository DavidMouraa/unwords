import useGraphEditorStore from "@/store/useGraphEditorStore";
import usePlayerStore from "@/store/usePlayerStore";
import { FaPlay } from "react-icons/fa";
import useFileManagerStore from "@/store/useFileManagerStore";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function ControlMenu() {
  const { nodes, edges } = useGraphEditorStore()
  const { playerContent, setPlayerContent } = usePlayerStore()
  const { items } = useFileManagerStore()

  const button = useRef()
  const router = useRouter()

  const hasContent = !playerContent?.length

  function openPlayer() {
    router.push("/player")
  }

  function updatePlayerContent() {
    const connectedNodesId = []

    edges.forEach((edge) => {
      if (edge.source !== "start") {
        !connectedNodesId.includes(edge.source) && connectedNodesId.push(edge.source)
      }
      !connectedNodesId.includes(edge.target) && connectedNodesId.push(edge.target)
    })
    
    setPlayerContent(connectedNodesId.map((nodeId) => {
      const node = nodes.find((node) => node.id === nodeId)
      const edge = edges.find((edge) => edge.source === nodeId) || null
      const content = items[node.data.fileId]?.data.content || null

      return {
        id: node.id,
        type: node.type,
        next: edge?.target,
        data: {
          content,
        }
      }
    }))
  }

  useEffect(() => {
    updatePlayerContent()
  }, [updatePlayerContent])

  return (
    <div className="h-full flex justify-center items-center">
      <button
        ref={button}
        className="p-1 rounded-sm hover:bg-primary-400 text-secondary-500 hover:text-white cursor-pointer"
        onClick={openPlayer}
        disabled={hasContent}
      >
        <FaPlay />
      </button>
    </div>
  )
}