import { FaPlay } from "react-icons/fa";
import { useRouter } from "next/navigation";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import useFileManagerStore from "@/store/useFileManagerStore";
import useGraphEditorStore from "@/store/useGraphEditorStore";
import usePlayerStore from "@/store/usePlayerStore";
import downloadJson from "@/app/_utils/downloadJson";

export default function ControlMenu() {
  const { items, setItems } = useFileManagerStore()
  const { nodes, setNodes, edges, setEdges } = useGraphEditorStore()
  const { playerContent, setPlayerContent } = usePlayerStore()

  const router = useRouter()

  const DropdownMenuItems = [
    {
      label: "Salvar",
      type: "button",
      action: () => {
        const project = {
          files: items,
          nodes: nodes,
          edges: edges,
        }

        downloadJson(project)
      },
    },
    {
      label: "Importar",
      type: "file",
      action: (event) => {
        console.log("fdafdfa")
      },
    },
    {
      label: "Exportar",
      type: "button",
      action: () => {
        downloadJson(playerContent)
      },
    },
  ]

  function openPlayer() {
    router.push("/player")
  }

  function onClick() {
    openPlayer()
  }

  return (
    <div className="h-full flex justify-between items-center px-1">
      <div>
        <DropdownMenu
          items={DropdownMenuItems}
        >
          Projeto
        </DropdownMenu>
      </div>

      <button
        className="p-1 rounded-sm hover:bg-primary-400 text-secondary-500 hover:text-white cursor-pointer"
        onClick={onClick}
      >
        <FaPlay />
      </button>

      <div></div>
    </div>
  )
}