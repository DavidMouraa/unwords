
import Button from "./Button"
import { BiSolidFilePlus } from "react-icons/bi";
import { BiSolidFolderPlus } from "react-icons/bi";


export default function ActionMenu() {
  return (
    <div className="flex justify-center pt-2 py-1">
      <div className="flex text-white text-lg">
        <Button>
          <BiSolidFilePlus />
        </Button>

        <Button>
          <BiSolidFolderPlus />
        </Button>
      </div>
    </div>
  )
}