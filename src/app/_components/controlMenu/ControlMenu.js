import useGraphEditorStore from "@/store/useGraphEditorStore";
import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";
import SECTION_BUILDS_MAP from "@/app/_constants/maps/sectionBuildsMap";
import usePlayerStore from "@/store/usePlayerStore";

export default function ControlMenu() {
  const { nodes, edges } = useGraphEditorStore()
  const { setPlayerContent } = usePlayerStore()

  const router = useRouter()

  function openPlayer() {
    router.push("/player")
  }

  function updatePlayerContent() {
    setPlayerContent(() => {
      let newContent = {}

      edges.forEach((edge) => {
        const node = nodes.find((node) => node.id === edge.target)
        const builder = SECTION_BUILDS_MAP[node.type]
        const section = builder(node)

        newContent = {...newContent, [section.id]: section}
      })

      return newContent
    })
  }

  function onClick() {
    updatePlayerContent()
    openPlayer()
  }

  return (
    <div className="h-full flex justify-center items-center">
      <button
        className="p-1 rounded-sm hover:bg-primary-400 text-secondary-500 hover:text-white cursor-pointer"
        onClick={onClick}
      >
        <FaPlay />
      </button>
    </div>
  )
}