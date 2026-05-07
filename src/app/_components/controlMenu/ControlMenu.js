import useGraphEditorStore from "@/store/useGraphEditorStore";
import { FaPlay } from "react-icons/fa";

export default function ControlMenu() {
  const { nodes, edges } = useGraphEditorStore()

  function playProject() {
    // const startNode = 
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