import useGraphEditorStore from "@/store/useGraphEditorStore";
import usePlayerStore from "@/store/usePlayerStore";
import { FaPlay } from "react-icons/fa";
import Modal from "../modal/Modal";
import useFileManagerStore from "@/store/useFileManagerStore";

export default function ControlMenu() {
  const { nodes, edges } = useGraphEditorStore()
  const { setContent } = usePlayerStore()
  const { items } = useFileManagerStore()

  function setPlayerContent() {
    const connectedNodesId = []

    edges.forEach((edge) => {
      if (edge.source !== "start") {
        !connectedNodesId.includes(edge.source) && connectedNodesId.push(edge.source)
      }
      !connectedNodesId.includes(edge.target) && connectedNodesId.push(edge.target)
    })

    setContent(connectedNodesId.map((nodeId) => {
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

  function onClick() {
    setPlayerContent()
  }

  return (
    <div className="h-full flex justify-center items-center">
      <Modal
        triggerClass="outline-none"
        overlayClass="fixed top-0 left-0 flex justify-center items-center w-full h-full bg-black/50"
        contentClass="max-w-180 max-h-200 size-full p-5 rounded-sm outline-none bg-black"
      >
        <div
          className="p-1 rounded-sm hover:bg-primary-400 text-secondary-500 hover:text-white cursor-pointer"
          onClick={onClick}
        >
          <FaPlay />
        </div>
      </Modal>
    </div>
  )
}