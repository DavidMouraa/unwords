import TextFile from "@/app/_components/fileExplorer/Items/TextFile"
import GraphFile from "@/app/_components/fileExplorer/Items/GraphFile"
import Folder from "@/app/_components/fileExplorer/Items/Folder"

const FILE_MANAGER_ITEMS_MAP = {
  text: TextFile,
  graph: GraphFile,
  folder: Folder
}

export default FILE_MANAGER_ITEMS_MAP