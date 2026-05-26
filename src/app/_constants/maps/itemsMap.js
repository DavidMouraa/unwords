import Folder from "@/app/_components/fileManager/items/Folder"
import TextFile from "../../_components/fileManager/items/TextFile"
import GraphFile from "../../_components/fileManager/items/GraphFile"

const ITEMS_MAP = {
  text: TextFile,
  graph: GraphFile,
  folder: Folder
}

export default ITEMS_MAP