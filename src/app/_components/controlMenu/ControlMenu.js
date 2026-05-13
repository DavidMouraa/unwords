import useGraphEditorStore from "@/store/useGraphEditorStore";
import usePlayerStore from "@/store/usePlayerStore";
import { FaPlay } from "react-icons/fa";
import Modal from "../modal/Modal";

export default function ControlMenu() {
  const { nodes, edges } = useGraphEditorStore()
  const { setContent } = usePlayerStore()

  function setPlayerContent() {
    setContent(nodes.filter((node) => node.type !== "start").map((node) => {
      const edge = edges.find((edge) => edge.source === node.id)

      return {
        id: node.id,
        type: node.type,
        next: edge?.target || null,
        data: {
          fileId: node.data.fileId,
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
        overlayClass="fixed top-0 left-0 flex justify-center items-center w-full h-full"
        contentClass="w-150 h-150 p-5 rounded-sm outline-none bg-black"
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