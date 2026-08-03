import TextFile from "@/app/_components/primarySidebar/sections/fileManager/Items/TextFile"
import GraphFile from "@/app/_components/primarySidebar/sections/fileManager/Items/GraphFile"
import Folder from "@/app/_components/primarySidebar/sections/fileManager/Items/Folder"

const FILE_MANAGER_ITEMS_MAP = {
  text: TextFile,
  graph: GraphFile,
  folder: Folder
}

export default FILE_MANAGER_ITEMS_MAP