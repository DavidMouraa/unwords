import { IoDocumentText } from "react-icons/io5";
import File from "./File";
import useFileManagerStore from "@/store/useFileManagerStore";

export default function TextFile({ id }) {
  const { items } = useFileManagerStore()
  const file = items[id]

  return (
    <File
      id={id}
    >
      <div className="flex items-center gap-1.5">
        <IoDocumentText />
        {file.data.label}
      </div>
    </File>
  )
}