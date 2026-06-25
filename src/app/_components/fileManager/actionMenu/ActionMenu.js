import useFileManagerStore from "@/store/useFileManagerStore";
import Button from "./Button"
import { BiSolidFilePlus } from "react-icons/bi";
import { BiSolidFolderPlus } from "react-icons/bi";
import buildItem from "@/app/_utils/buildItem";

export default function ActionMenu() {
  const { currentFolderId, items, setItems } = useFileManagerStore()

  function createFolder() {
    const newFolder = buildItem("folder", items[currentFolderId]?.id || null)

    setItems((items) => ({...items, [newFolder.id]: newFolder}))
  }

  function createFile() {
    const newFolder = buildItem("text", items[currentFolderId]?.id || null)

    setItems((items) => ({...items, [newFolder.id]: newFolder}))
  }

  return (
    <div className="flex justify-center pt-2 py-1">
      <div className="flex gap-0.5 text-white text-lg">
        <Button
          onClick={createFile}
        >
          <BiSolidFilePlus />
        </Button>

        <Button 
          onClick={createFolder}
        >
          <BiSolidFolderPlus />
        </Button>
      </div>
    </div>
  )
}