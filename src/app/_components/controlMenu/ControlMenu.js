import useGraphEditorStore from "@/store/useGraphEditorStore";
import usePlayerStore from "@/store/usePlayerStore";
import { FaPlay } from "react-icons/fa";

export default function ControlMenu() {
  const { nodes, edges } = useGraphEditorStore()
  const { setContent } = usePlayerStore()

  function playProject() {
    const playerContent = nodes.map((node) => {
      if (node.type !== "start") {
        const edge = edges.find((edge) => edge.source === node.id)

        return {
          id: node.id,
          type: node.type,
          next: edge?.target || null,
          data: {
            fileId: node.data.fileId
          }
        }
      }
    })

    setContent(playerContent)
  }

  return (
    <div className="h-full flex justify-center items-center">
      <button
        className="p-1 rounded-sm hover:bg-primary-400 text-secondary-500 hover:text-white cursor-pointer"
        onClick={playProject}
      >
        <FaPlay />
      </button>
    </div>
  )
}